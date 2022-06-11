import fs from 'fs/promises';
// import fs from 'fs';
import { pipeline } from 'stream/promises';

export const cat = async (path) => {
    // await pipeline(
    //     // TODO use BOM
    //     fs.createReadStream(path, 'utf-8'),
    //     process.stdout,
    // );
    // console.log('FINISH');
    const file = await fs.readFile(path, 'utf-8');
    console.log(file);
}