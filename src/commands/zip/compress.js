import fs from 'fs';
import { pipeline } from 'stream/promises';
import zlib from 'zlib';

export const compress = async (path_to_file, path_to_destination) => {
    const readable = fs.createReadStream(path_to_file);
    const writeable = fs.createWriteStream(path_to_destination);

    const gzip = zlib.createGzip();

    await pipeline(
        readable,
        gzip,
        writeable,
    );
};
