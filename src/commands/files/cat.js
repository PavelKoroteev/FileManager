import fs from 'fs';
import { pipeline } from 'stream/promises';

export const cat = async (path_to_file) => {
    await pipeline(
        // TODO use BOM
        fs.createReadStream(path_to_file, 'utf-8'),
        process.stdout,
    );
}
