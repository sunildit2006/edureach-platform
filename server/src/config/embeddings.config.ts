import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

const apiKey = process.env.GOOGLE_API_KEY;

if (!apiKey) {
  throw new Error("GOOGLE_API_KEY is not defined in environment variables");
}

const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "gemini-embedding-001",
  apiKey,
});

export default embeddings;