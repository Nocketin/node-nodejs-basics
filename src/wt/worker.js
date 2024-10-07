import { parentPort } from 'worker_threads'
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  parentPort.on('message', (number) => {
    try {
      const result = nthFibonacci(number);
      parentPort.postMessage({ status: 'resolved', data: result });
    } catch (err) {
      parentPort.postMessage({ status: 'error', data: null });
    }
  });
};

sendResult();