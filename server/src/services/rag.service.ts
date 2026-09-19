
import path from "node:path";
import { fileURLToPath } from "node:url";
import { MongoClient } from "mongodb";
import { createAgent, tool } from "langchain";
import { z } from "zod";
import {
  ChatGoogleGenerativeAI,
  GoogleGenerativeAIEmbeddings,
} from "@langchain/google-genai";
import { MongoDBAtlasVectorSearch } from "@langchain/mongodb";
import { TextLoader } from "@langchain/classic/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mongoClient: MongoClient | null = null;

const getMongoClient = async (): Promise<MongoClient> => {
  if (!mongoClient) {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error("MONGODB_URI is not defined");
    }

    mongoClient = new MongoClient(uri);
    await mongoClient.connect();
  }

  return mongoClient;
};

const getCollection = async () => {
  const client = await getMongoClient();

  return client
    .db("test")
    .collection("knowledge_vectors");
};

const getEmbeddings = () => {
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    throw new Error("GOOGLE_API_KEY is not defined");
  }

  return new GoogleGenerativeAIEmbeddings({
    model: "gemini-embedding-001",
    apiKey,
  });
};

const getVectorStore = async (): Promise<MongoDBAtlasVectorSearch> => {
  const collection = await getCollection();

  return new MongoDBAtlasVectorSearch(getEmbeddings(), {
    collection,
    indexName: "edureach_vector_index",
    textKey: "text",
    embeddingKey: "embedding",
  });
};

export const initializeRAG = async (): Promise<void> => {
  try {
    const collection = await getCollection();

    const count = await collection.countDocuments();

    if (count > 0) {
      console.log(
        `Knowledge base already contains ${count} documents.`,
      );
      return;
    }

    const filePath = path.join(
      __dirname,
      "../../knowledge-base/edureach-knowledge.txt",
    );

    const loader = new TextLoader(filePath);
    const documents = await loader.load();

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    const chunks = await splitter.splitDocuments(documents);

    const vectorStore = await getVectorStore();

    await vectorStore.addDocuments(chunks);

    console.log(
      `Knowledge base initialized with ${chunks.length} chunks.`,
    );
  } catch (error) {
    console.error("Knowledge base initialization failed:", error);
  }
};

const createRetrieveTool = (
  vectorStore: MongoDBAtlasVectorSearch,
) => {
  return tool(
    async ({ query }: { query: string }) => {
      const retrievedDocs = await vectorStore.similaritySearch(
        query,
        3,
      );

      if (retrievedDocs.length === 0) {
        return "No relevant information was found in the knowledge base.";
      }

      return retrievedDocs
        .map(
          (doc) =>
            `Source: ${
              doc.metadata.source || "EduReach Knowledge Base"
            }\nContent: ${doc.pageContent}`,
        )
        .join("\n\n");
    },
    {
      name: "retrieve",
      description:
        "Retrieve information from the EduReach College knowledge base. " +
        "Use this for questions about courses, fees, admissions, mentors, campus, placements, facilities, events, and college information.",
      schema: z.object({
        query: z.string(),
      }),
    },
  );
};

export const getRAGResponse = async (
  question: string,
): Promise<string> => {
  try {
    const vectorStore = await getVectorStore();
    const retrieve = createRetrieveTool(vectorStore);

    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
      throw new Error("GOOGLE_API_KEY is not defined");
    }

    const model = new ChatGoogleGenerativeAI({
      model: "gemini-3.6-flash",
      temperature: 0.2,
      apiKey,
    });

    const agent = createAgent({
      model,
      tools: [retrieve],
      systemPrompt:
        "You are EduReach Bot, a helpful AI counselor for EduReach College, Hyderabad. " +
        "ALWAYS use the retrieve tool to search the knowledge base before answering. " +
        "Answer only using information returned by the retrieve tool. " +
        "Be concise, friendly, and professional. " +
        "If the information is not found, say: " +
        "\"I don't have that information right now. Click Talk to Us to speak with a counselor.\"",
    });

    const result = await agent.invoke({
      messages: [
        {
          role: "user",
          content: question,
        },
      ],
    });

    const messages = result.messages || [];
    const lastMessage = messages[messages.length - 1];

    if (!lastMessage) {
      return "I don't have that information right now.";
    }

    const content = lastMessage.content;

if (typeof content === "string") {
  return content;
}

if (Array.isArray(content)) {
  return content
    .map((item: any) =>
      typeof item === "string" ? item : item.text || "",
    )
    .join("");
}

return String(content);
  } catch (error) {
    console.error("Agentic RAG error:", error);

    return "I'm having trouble right now. Please try again.";
  }
};
