import fs from "node:fs/promises";
import { join } from "node:path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const copy = async () => {
  const srcFolder = join(__dirname, 'files');
  const destinationFolder = join(__dirname, 'files_copy');
  const fsError = "FS operation failed";
  await fs.access(srcFolder, fs.constants.R_OK).catch(() => {
    throw new Error(fsError);
  });
  await fs
    .cp(srcFolder, destinationFolder, {
      errorOnExist: true,
      recursive: true,
      force: false,
    })
    .catch(() => {
      throw new Error(fsError);
    });
};

await copy();
