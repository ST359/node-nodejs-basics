import { Worker, workerData, parentPort } from "node:worker_threads";

// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  let reply = {};
  const fibResult = nthFibonacci(workerData);
  if (fibResult) {
    reply.status = "resolved";
    reply.data = fibResult;
  } else {
    reply.status = "error";
    reply.data = null;
  }
  parentPort.postMessage(reply);
};

sendResult();
