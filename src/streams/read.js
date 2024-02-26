import { createReadStream } from "node:fs";
import process from "node:process";
import { dirname } from "path";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const fileToRead = join(__dirname, 'files', 'fileToRead.txt');
    const readStream = createReadStream(fileToRead);
    readStream.pipe(process.stdout);
};

await read();