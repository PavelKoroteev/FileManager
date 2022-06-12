import fs from 'fs';
import { pipeline } from 'stream/promises';
import zlib from 'zlib';

export const decompress = async (path_to_file, path_to_destination) => {
    const readable = fs.createReadStream(path_to_file);
    const writeable = fs.createWriteStream(path_to_destination);

    const gunzip = zlib.createGunzip;

    await pipeline(
        readable,
        gunzip,
        writeable,
    )
};
