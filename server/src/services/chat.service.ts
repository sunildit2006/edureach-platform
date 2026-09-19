import { MongoClient } from "mongodb";
import { createVectorStore } from "../config/vectorstore.config.ts";
import chatModel from "../config/chat-model.config.ts";

export const askQuestion = async (question: string): Promise<string> => {
  const mongoURI = process.env.MONGODB_URI;

  if (!mongoURI) {
    throw new Error("MONGODB_URI is not defined");
  }

  const client = new MongoClient(mongoURI);

  try {
    await client.connect();

    const db = client.db();
    const collection = db.collection("knowledge_vectors");

    const vectorStore = createVectorStore(collection);

    const documents = await vectorStore.similaritySearch(question, 3);

    const context = documents
      .map((document) => document.pageContent)
      .join("\n\n");

    const prompt = `
You are EduReach College's AI assistant.

Answer the user's question using only the provided college information.

If the answer is not available in the context, say:
"I don't have that information in the college knowledge base."

College Knowledge:
${context}

User Question:
${question}
`;

    const response = await chatModel.invoke(prompt);

    return response.content.toString();
  } finally {
    await client.close();
  }
};