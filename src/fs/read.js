import{readFile} from 'node:fs/promises';

const read = async () => {
    const data = await readFile('src/fs/files/fileToRead.txt', {encoding: 'utf8'});
    console.log(data);
    // Write your code here 
};

await read();