import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import join from "node:path";
const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const fileForHash = join(__dirname, "files", "fileToCalculateHashFor.txt");
  const hash = createHash("sha256");
  const fileReader = createReadStream(fileForHash);
  fileReader.on("readable", () => {
    let chunk = fileReader.read();
    chunk ? hash.update(chunk) : console.log(hash.digest("hex"));
  });
};

await calculateHash();
