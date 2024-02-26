import { createWriteStream } from "node:fs";
import process from "node:process";
import { dirname } from "path";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
    const fileToWrite = join(__dirname, 'files','fileToWrite.txt');
    const writeableStream = createWriteStream(fileToWrite);
    process.stdin.pipe(writeableStream);
};

await write();