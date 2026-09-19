import { MongoDBAtlasVectorSearch } from "@langchain/mongodb";
import type { Collection, Document } from "mongodb";
import embeddings from "./embeddings.config.ts";

export const createVectorStore = (
  collection: Collection<Document>,
): MongoDBAtlasVectorSearch => {
  return new MongoDBAtlasVectorSearch(embeddings, {
    collection,
    indexName: "edureach_vector_index",
    textKey: "text",
    embeddingKey: "embedding",
  });
};