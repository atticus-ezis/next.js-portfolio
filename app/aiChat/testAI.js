import OpenAI from "openai";

const api_key = process.env.NEXT_PUBLIC_OPENAI_API_KEY

const openai = new OpenAI(api_key);


const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "Write a haiku about recursion in programming.",
        },
    ],
    store: true,
});

console.log(completion.choices[0].message);





