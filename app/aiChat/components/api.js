


const { Configuration, OpenAIApi } = require("openai");

// Initialize the API client with your API key
const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

async function getProfessionalAnswer(question) {
    try {
        // Provide your resume or other professional documents as context
        const documents = [
            "I'm Atticus Ezis. A self taught software developer profecient in languages and frameworks such as: [html, css, javascript, Python, Django, Next.js, React, bootstrap, tailwind]",
            "My past work experiences includes customer service roles as: [server, garden-sales assocaite at McGuckins, vendor for Lifted Limited, CSA organizer]. And technical roles like printer operator at Lifted Limited LLC and Junior Developer at American Literature",
        ];

        // Construct the prompt with the question and context
        const prompt = `Answer the question based on the professional details provided: \n\n${question}\n\n###\n\nDocuments: ${documents.join("\n\n")}`;

        // Call the OpenAI API with the constructed prompt
        const response = await openai.createCompletion({
            model: "gpt-4", // Adjust model as needed
            prompt: prompt,
            max_tokens: 150,
            n: 1,
            stop: ["###"]
        });

        // Log the response from the AI
        console.log(response.data.choices[0].text.trim());
    } catch (error) {
        console.error("Error calling OpenAI API:", error);
    }
}

// Example question
getProfessionalAnswer("What software development skills do I have?");
