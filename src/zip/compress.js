import { createGzip }  from 'node:zlib';
import { pipeline }  from 'node:stream';
import {createReadStream, createWriteStream} from 'node:fs';
import {rm} from 'node:fs/promises';

const compress = async () => {

const gzip = createGzip();
const source = createReadStream('src/zip/files/fileToCompress.txt');
const destination = createWriteStream('src/zip/files/archive.gz');

pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
});

try{
    await rm('src/zip/files/fileToCompress.txt');
    } catch (err) {
       throw new Error ('FS operation failed'); 
    }
    // Write your code here 
};



await compress();