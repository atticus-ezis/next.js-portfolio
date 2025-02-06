

export async function POST(req: Request) {
    const apiKey = (process.env.OPENAI_API_KEY || "").trim();
    try {
        const { message } = await req.json(); // message from user

        if (!message) {
            return Response.json({ error: "Message is required" }, { status: 400 });
        }

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{ role: "user", content: message }]
            })
        });

        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        return Response.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
    }
}

  




