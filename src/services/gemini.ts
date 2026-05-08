import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY 
});

export const generateAuraDescription = async (details: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a high-end creative director for "Aura Design Lab". 
      Your brand voice is: refined, sophisticated, slightly mysterious, architectural, and professional. 
      Write a concise, artistic project description (max 3 sentences) for a project with these details: ${details}. 
      Focus on "structures of thought" and "visual clarity".`,
    });
    
    return response.text;
  } catch (error) {
    console.error("AI Generation Error:", error);
    return "Error generating description. Please try again.";
  }
};
