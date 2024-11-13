import OpenAI from "openai";
import "dotenv/config";
const openai = new OpenAI({ apiKey: process.env.apikey });
const completion = await openai.chat.completions.create({
  model: "gpt-4o",
  messages: [{ role: "user", content: "write a haiku about ai" }],
});
console.log(completion.choices[0].message.content);
