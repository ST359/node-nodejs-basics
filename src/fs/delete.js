import fs from "node:fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  const fileToDelete = join(__dirname, 'files','fileToRemove.txt');
  fs.unlink(fileToDelete).catch((err) => {
    throw new Error("FS operation failed");
  });
};

await remove();
