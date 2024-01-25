import fs from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const list = async () => {
  const dirToList = `${__dirname}\\files`;
  try {
    const files = await fs.readdir(dirToList);
    for (const file of files){
        console.log(file);
    }
  } catch (err) {
    throw new Error('FS operation failed')
  }
  
};

await list();
