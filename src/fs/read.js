import fs from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const fileToRead = join(__dirname, 'files', 'fileToRead.txt');
  try {
    const fileContent = await fs.readFile(fileToRead, { encoding: "utf-8" });
    console.log(fileContent);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
