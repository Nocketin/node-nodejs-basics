import {rename as rnme} from 'node:fs/promises';


const rename = async () => {
    try{
    await rnme('src/fs/files/wrongFilename.txt', 'src/fs/files/properFilename.md');
    } catch(err) {
        console.log(err);
        throw new Error('FS operation failed');
    }
    // Write your code here 
};

await rename();