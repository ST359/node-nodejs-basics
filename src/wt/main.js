import os from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Worker } from "node:worker_threads";

const __dirname = dirname(fileURLToPath(import.meta.url));
const numOfCores = os.cpus().length;
const workerScript = join(__dirname, "worker.js");

function createWorker(num) {
  return new Promise(function (resolve, reject) {
    const worker = new Worker(workerScript, {
      workerData: num,
    });
    worker.on("message", (data) => {
      resolve(data);
    });
    worker.on("error", () => {
      reject({ status: "error", data: null });
    });
    worker.on("exit", (status) => {
      if (status !== 0) {
        reject({ status: "error", data: null });
      }
    });
  });
}
const performCalculations = async () => {
  let results = [];
  for (let i = 10; i < 10 + numOfCores; i++) {
    try {
      results.push(await createWorker(i));
    } catch {
      results.push({ status: "error", data: null });
    }
  }
  console.log(results);
};

await performCalculations();
