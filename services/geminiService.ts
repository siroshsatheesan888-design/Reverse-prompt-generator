
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generateReversePrompt = async (outputText: string): Promise<string> => {
  const model = "gemini-2.5-flash";
  const systemInstruction = `You are an expert in "reverse prompt engineering." Your task is to analyze the following text and generate a detailed, effective prompt that could have been used to create it with a generative AI model.

The prompt you create should be specific enough to guide an AI to produce a similar output. Consider the following elements from the provided text:
- **Tone & Style:** Is it formal, casual, poetic, technical, etc.?
- **Format:** Is it a list, a story, a code block, a JSON object, a blog post?
- **Content:** What is the subject matter? What key information is included?
- **Constraints:** Are there any implied constraints, like word count, character persona, or specific instructions?

Your final output should be ONLY the generated prompt, without any explanations or conversational text.`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: outputText,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        topP: 0.9,
        topK: 40,
      }
    });
    return response.text.trim();
  } catch (error) {
    console.error("Error generating content from Gemini:", error);
    throw new Error("Failed to communicate with the AI model.");
  }
};
