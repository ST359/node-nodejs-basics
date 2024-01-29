import fs from "node:fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
  const fileContent = "I am fresh and young";
  const fileName = join(__dirname, 'files', 'fresh.txt');
  try {
    await fs.open(fileName);
    throw new Error("FS operation failed");
  } catch(error) {
    if (error.message ==="FS operation failed"){
      throw error;
    }
    await fs.writeFile(fileName, fileContent);
  }
};

await create();