const { Configuration, OpenAIApi } = require("openai");

// Initialize the API client with your API key
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

async function getProfessionalAnswer(question) {
    try {
        // Provide your resume or other professional documents as context
        const documents = [
            "Experience: Software Developer at XYZ Corp, 2020-Present. Skills: JavaScript, Python, AWS.",
            "Education: Bachelor's in Computer Science from ABC University, 2016-2020."
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
