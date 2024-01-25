import fs from "node:fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const remove = async () => {
  const fileToDelete = `${__dirname}\\files\\fileToRemove.txt`;
  fs.unlink(fileToDelete).catch((err) => {
    throw new Error("FS operation failed");
  });
};

await remove();
