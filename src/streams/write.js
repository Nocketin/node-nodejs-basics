import { createWriteStream } from 'node:fs';


const write = async () => {
    const writable = createWriteStream('src/streams/files/fileToWrite.txt')
    process.stdin.on('data', (chunk) =>{
        const input = chunk.toString();
        if(input.trim() === 'end')
        {
            writable.end();
            process.stdin.pause();
        }
        else {
        writable.write(chunk);
        }
    });
    process.stdin.on('end', () =>{
        writable.end();
        console.log('end of stream');
    });

    writable.on('error', (err) => {
        console.error(`Error writing to file: ${err.message}`);
    });

    // Write your code here 
};

await write();