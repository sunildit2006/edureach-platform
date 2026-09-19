import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const apiKey = process.env.GOOGLE_API_KEY;

if (!apiKey) {
  throw new Error("GOOGLE_API_KEY is not defined in environment variables");
}

const chatModel = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey,
  temperature: 0.2,
});

export default chatModel;