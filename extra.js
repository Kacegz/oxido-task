import fs from "fs/promises";
import path from "path";
const __dirname = path.resolve();

const templatePath = path.resolve(__dirname, "szablon.html");
const articlePath = path.resolve(__dirname, "artykul.html");
const outputPath = path.resolve(__dirname, "podglad.html");

async function loadFile(filePath) {
  const data = await fs.readFile(filePath, {
    encoding: "utf8",
  });
  return data;
}

async function generatePreview() {
  try {
    const templateContent = await loadFile(templatePath);
    const articleContent = await loadFile(articlePath);

    const final = templateContent.replace(
      "</body>",
      `${articleContent}</body>`
    );
    await fs.writeFile(outputPath, final, "utf8");
    console.log("Podglad wygenerowany pomyślnie!");
  } catch (error) {
    console.error("Blad:", error);
  }
}

generatePreview();
