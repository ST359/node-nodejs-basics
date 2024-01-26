import { createReadStream } from "node:fs";
import process from "node:process";
import { dirname } from "path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const readStream = createReadStream(`${__dirname}\\files\\fileToRead.txt`);
    readStream.pipe(process.stdout);
};

await read();