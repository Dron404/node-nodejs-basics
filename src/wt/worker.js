// n should be received from main thread
import { workerData, parentPort } from "worker_threads";
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  //if (Math.random() > 0.5)  throw new Error()
  parentPort.on("message", (data) => {
    parentPort.postMessage(nthFibonacci(data));
  });
};
sendResult();
