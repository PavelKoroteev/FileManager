import fs from 'fs';
import { pipeline, } from 'stream/promises'

export const add = async (new_file_name) => {
    await pipeline(
        '',
        fs.createWriteStream(new_file_name)
    );
};
