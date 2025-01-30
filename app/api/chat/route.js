
import { NextResponse } from "next/server"
import OpenAI from "openai";
import dotenv from "dotenv"

dotenv.config(); 


export async function POST()  {
    const api_key = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    console.log("API Key:", process.env.NEXT_PUBLIC_OPENAI_API_KEY);
    console.log("API Key Type:", typeof process.env.NEXT_PUBLIC_OPENAI_API_KEY);
  
    
    const openai = new OpenAI({
        apiKey: api_key // Key is only accessible server-side
      });
    
      try {
        const completion = await openai.chat.completions.create({
          model: "gpt-4", // Use a valid model name
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            {
              role: "user",
              content: "Write a haiku about recursion in programming.",
            },
          ],
        });


        console.log(completion);
        debugger
    
        return NextResponse.json({ response: completion.choices[0].message.content });
      } catch (error) {

        debugger

        return NextResponse.json({ error: error.message }, { status: 500 });
      }
  
}
