import { z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '../trpc';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const model = "gpt-4-turbo"
// OR "gpt-4o"

export const openaiRouter = createTRPCRouter({
    getAnalytics: protectedProcedure.input(z.object({transactions: z.string(),})).mutation(async ({ input }) => {

        try {
            const prompt = `LIMIT TO 250 TOKENS; DO NOT USE MARKDOWN FORMAT (meaning do not use asterisks or hashtags since it will ruin the formatting of my website): Here are my recent transactions, I want you to  generate a summary of my spending habits: ${input.transactions}, and also mark the categories I spent the most money in and suggestions on how to budget myself better and save money. Keep it personalized, not generalized advice.`;

            const response = await openai.chat.completions.create({
                model: model,
                messages: [
                    {role: "system", content: "You are a helpful financial analyst/assistant."},
                    {role: "user", content: prompt}
                ],
                max_tokens: 250,
                temperature: 1,
            });

            console.log(response.choices[0].message);
            return response.choices[0].message;
        }   catch (error) {
            console.error("Error querying OpenAI API: ",error);
            throw new Error("Error querying OpenAI API")
        }
    }),


})
