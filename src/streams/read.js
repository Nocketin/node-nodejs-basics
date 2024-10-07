import {createReadStream} from 'node:fs';

const read = async () => {

    const filename = 'src/streams/files/fileToRead.txt';
    const readable = createReadStream(filename);

    readable.on('readable', () => {
        let chunk;
        console.log('Stream is readable (new data received in buffer)');

        while (null !== (chunk = readable.read())) {
          process.stdout.write(chunk);
          console.log(`\nRead ${chunk.length} bytes of data...`);
          console.log(chunk);
        }
      });

      readable.on('end', () => {
        console.log('Reached end of stream.');
      }); 
    // Write your code here 
};

await read();