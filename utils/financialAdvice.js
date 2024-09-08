// // pages/api/financialAdvice.js
// import { Configuration, OpenAIApi } from "openai";

// // Set up the OpenAI client with your API key (server-side, secure)
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY, // Access the API key securely
// });
// const openai = new OpenAIApi(configuration);

// // Define the handler for the API route
// export default async function handler(req, res) {
//   const { totalBudget, totalIncome, totalSpend } = req.body;

//   const userPrompt = `
//     Based on the following financial data:
//     - Total Budget: ${totalBudget} USD 
//     - Expenses: ${totalSpend} USD 
//     - Incomes: ${totalIncome} USD
//     Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively.
//   `;

//   try {
//     // Call the OpenAI API to generate financial advice
//     const chatCompletion = await openai.createChatCompletion({
//       model: "gpt-4", // Specify the GPT model to use
//       messages: [{ role: "user", content: userPrompt }],
//     });

//     // Extract the advice from the response
//     const advice = chatCompletion.data.choices[0].message.content;

//     // Send the advice as the response to the client
//     res.status(200).json({ advice });
//   } catch (error) {
//     console.error("Error fetching financial advice:", error);
//     res.status(500).json({ error: "Failed to fetch financial advice." });
//   }
// }
