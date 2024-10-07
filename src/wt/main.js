import { cpus } from 'os'
import { Worker } from 'worker_threads'

const numberOfThreads = cpus().length 

const performCalculations = async () => {
 
  const runWorkers = () => {
    return new Promise((resolve) => {
      const results = [];
      let threadsDone = 0;
      for (let i = 0; i < numberOfThreads; i++) {
        try {
          const worker = new Worker('./src/wt/worker.js');
          const numberToSend = 10 + i;
          worker.postMessage(numberToSend);
          
          worker.on('message', (message) => {
            results[i] = message; 
            threadsDone++;
            
            if (threadsDone === numberOfThreads) {
              resolve(results);
            }
          });
        } catch (err) {
          console.log(err);
        }
      }
    })
  };
 

  const results = await runWorkers()
  console.log(results);
};

await performCalculations();

