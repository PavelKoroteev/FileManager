import fs from 'fs';
import { pipeline } from 'stream/promises';

export const cp = async (path_to_file, path_to_new_directory) => {
    const read = fs.createReadStream(path_to_file);
    const write = fs.createWriteStream(path_to_new_directory);

    await pipeline(
        read,
        write,
    );
};
