import { createReadStream, createWriteStream, read } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream";
import zlib from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const fileToDecompress = join(__dirname, 'files', 'archive.gz');
  const result = join(__dirname, 'files', 'fileToCompress.txt');
  const readStream = createReadStream(fileToDecompress);
  const writeStream = createWriteStream(result);
  const unzip = zlib.createUnzip();
  pipeline(readStream, unzip, writeStream, () => {});
};

await decompress();
