import { error } from 'console';
import { promises as fs } from 'fs';

const create = async () => {    
    
    try {
        await fs.access('src/fs/files/fresh.txt');
        throw new Error ('FS operation failed');
    } catch {
        if(error.message==='FS operation failed')
            throw error
        else{
        await fs.writeFile('src/fs/files/fresh.txt', 'I am fresh and young');
        console.log('File created');
        }
    };
};


await create();