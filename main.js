import OpenAI from "openai";
import "dotenv/config";
import fs from "fs/promises";
import path from "path";
const __dirname = path.resolve();

async function main() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, "text.txt"), {
      encoding: "utf8",
    });
    console.log("Waiting for API response...");
    const prompt = `Przerób poniższą treść artykułu na HTML, używając odpowiednich tagów HTML.
    Wskaż miejsca, gdzie warto dodać grafikę, dodając tag <img src="image_placeholder.jpg" alt="opis grafiki"> z dokładnym opisem grafiki jako promptem.
    Umieść podpisy pod grafikami w odpowiednim tagu HTML.
    Zwrócony kod ma zawierać tylko zawartość pomiędzy tagami body, nie formatuj odpowiedzi jako html
    Treść:
    ${data}`;
    const openai = new OpenAI({ apiKey: process.env.apikey });
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
    });
    const response = completion.choices[0].message.content;
    await fs.writeFile("artykul.html", response);
    console.log("HTML file saved successfully.");
  } catch (err) {
    console.error(err);
  }
}
main();
