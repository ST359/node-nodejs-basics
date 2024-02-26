import { createReadStream, createWriteStream } from "node:fs";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";
import { join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  const fileToCompress = join(__dirname, 'files', 'fileToCompress.txt');
  const resultingArchive = join(__dirname, 'files', 'archive.gz');
  const readStream = createReadStream(fileToCompress);
  const writeStream = createWriteStream(resultingArchive);
  const zip = zlib.createGzip();
  readStream.pipe(zip).pipe(writeStream);
};

await compress();
