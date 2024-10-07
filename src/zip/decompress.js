import { createGunzip }  from 'node:zlib';
import {createReadStream, createWriteStream} from 'node:fs';
import {rm} from 'node:fs/promises'

const decompress = async () => {
    
    const gunzip = createGunzip();
    const source = createReadStream('src/zip/files/archive.gz');
    const destination = createWriteStream('src/zip/files/fileToCompress.txt');

    source.pipe(gunzip).pipe(destination);

    destination.on('finish', () => {
        console.log('File successfully decompressed to fileToCompress.txt');
    });

    destination.on('error', (err) => {
        console.error('Error writing to the output file:', err);
    });

    source.on('error', (err) => {
        console.error('Error reading the input file:', err);
    });

    try{
        await rm('src/zip/files/archive.gz');
        } catch (err) {
           throw new Error ('FS operation failed'); 
        }
    // Write your code here 
};



await decompress();