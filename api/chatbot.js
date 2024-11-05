const axios = require("axios");

export default async function handler(req, res) {
    const { message } = req.body;

    try {
        const response = await axios.post("https://google-ai-api.example.com/v1/chat", {
            input: message,
        }, {
            headers: {
                "Authorization": `Bearer AIzaSyDIaKigunVlkjIHhZYTAkM4n65arWXHdtY`,
                "Content-Type": "application/json",
            }
        });

        const botResponse = response.data.response;
        res.status(200).json({ response: botResponse });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Failed to get response" });
    }
};
