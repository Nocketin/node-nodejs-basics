import {Transform} from 'stream';
const transform = async () => {
 // Write your code here 
    const reverse = Transform({
        transform(chunk, encoding, callback){
            const reversedString = chunk.toString().split('').reverse().join(''); 
            callback  (null, reversedString);
        }
    })

    process.stdin
    .pipe(reverse)
    .pipe(process.stdout);

    process.stdin.on('error', (err) => {
        console.error(err.message);
    });
};

await transform();