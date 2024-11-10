const {OpenAI} = require('openai');

const openai = new OpenAI()
openai.apiKey = process.env.OPENAI_API_KEY;


async function generateLesson()  {
    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            { role: "system", content: "Generate a lesson based on the given prompt, break the lesson down into sections based on the topics"},
            {
                role: "user",
                content: "Explain what a binary search tree is."
            },
        ],
    });

    return response;
}

module.exports = generateLesson

