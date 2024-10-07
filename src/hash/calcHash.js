import {createHash} from 'node:crypto';
import {createReadStream} from 'node:fs';

const calculateHash = async () => {

const filename = 'src/hash/files/fileToCalculateHashFor.txt';
const hash = createHash('SHA256');
const input = createReadStream(filename);

input.on('readable', ()=> {
    const data = input.read();
    if (data)
        hash.update(data);
    else {
        console.log(`${hash.digest('hex')} ${filename}`);
    }
})

    // Write your code here 
};

await calculateHash();