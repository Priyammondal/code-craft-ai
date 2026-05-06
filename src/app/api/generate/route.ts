import { GenerateRequest } from "@/app/types";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    throw new Error("GEMINI Api Key is not set, Please Check Environment Variables!");
}

const genAI = new GoogleGenerativeAI(apiKey);

export const POST = async (req: NextRequest) => {
    try {
        const { language, description }: GenerateRequest = await req.json();
        if (!description) {
            return NextResponse.json({ error: "Description is Required" }, { status: 400 })
        }
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

        const prompt = `Generate ${language || "Javascript"} code for: ${description} \n\nCode:`;
        const result = await model.generateContent(prompt);
        const response = result.response;
        const generatedCode = response.text();

        return NextResponse.json({ data: { generatedCode } }, { status: 200 });
    } catch (error) {
        console.error("Error: ", error);
        return NextResponse.json({ error: "Failed to generate code" }, { status: 500 });
    }
}