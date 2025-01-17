import fs from "node:fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { join } from "node:path";
const __dirname = dirname(fileURLToPath(import.meta.url));

const rename = async () => {
  const src = join(__dirname, 'files', 'wrongFilename.txt');
  const destination = join(__dirname, 'files', 'properFilename.md');
  const fsError = "FS operation failed";
  await fs.access(src).catch(() => {
    throw new Error(fsError);
  });
  await fs.access(destination)
    .then(() => {
      throw new Error(fsError);
    })
    .catch((error) => {
      if (error.message === fsError) {
        throw error;
      }
      fs.rename(src, destination).catch((error)=>console.error(error));
    });
};

await rename();
