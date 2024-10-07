 import { readdir, mkdir, copyFile} from 'node:fs/promises';

const copy = async () => {
    try{
        await mkdir('src/fs/files_copy')
    } catch (err) {
        throw new Error('FS operation failed');
    }

    try {
        const files = await readdir('src/fs/files');
        for (const file of files)
        {
            await copyFile(`src/fs/files/${file}`, `src/fs/files_copy/${file}`);
        }
      } catch (err) {
        throw new Error('FS operation failed');
      } 
    // Write your code here 
   

   };

await copy();
