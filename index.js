import OpenAI from "openai";
import "dotenv/config";
import fs from "fs/promises";
import path from "path";
const __dirname = path.resolve();

async function task() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, "text.txt"), {
      encoding: "utf8",
    });
    console.log(data);
    await fs.writeFile("artykul.html", data);
  } catch (err) {
    console.log(err);
  }
}
task();
