import { ExplainRequest } from "@/app/types";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    throw new Error("GEMINI Api Key is not set, Please Check Environment Variables!");
}

const genAI = new GoogleGenerativeAI(apiKey);

export const POST = async (req: NextRequest) => {
    try {
        const { code }: ExplainRequest = await req.json();
        if (!code) {
            return NextResponse.json({ error: "Code is Required" }, { status: 400 })
        }
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

        const prompt = `Please explain the following code in detail: \n\n${code}\n\nExplanation:`;
        const result = await model.generateContent(prompt);
        const response = result.response;
        const explanation = response.text();

        return NextResponse.json({ data: { explanation } }, { status: 200 });
    } catch (error) {
        console.error("Error: ", error);
        return NextResponse.json({ error: "Failed to generate explanation" }, { status: 500 });
    }
}