import fs from "node:fs/promises";
import path from "node:path";
import { MongoClient } from "mongodb";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { createVectorStore } from "../src/config/vectorstore.config.ts";

const knowledgeBasePath = path.join(
  process.cwd(),
  "knowledge-base",
  "college-info.md",
);

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});

const ingest = async (): Promise<void> => {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    throw new Error("MONGODB_URI is not defined");
  }

  const client = new MongoClient(mongoURI);

  try {
    const content = await fs.readFile(knowledgeBasePath, "utf-8");
    const documents = await splitter.createDocuments([content]);

    await client.connect();

    const db = client.db();
    const collection = db.collection("knowledge_vectors");

    const vectorStore = createVectorStore(collection);

    await vectorStore.addDocuments(documents);

    console.log(`Successfully added ${documents.length} chunks to MongoDB.`);
  } catch (error) {
    console.error("Ingestion failed:", error);
    process.exit(1);
  } finally {
    await client.close();
  }
};

ingest();