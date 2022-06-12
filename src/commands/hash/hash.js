import fs from 'fs';
import { createHash } from 'crypto';
import { pipeline, } from 'stream/promises';
import { Writable, } from 'stream';

export const hash = async (path_to_file) => {
    const hashGenerator = createHash('SHA256');

    const hashUpdater = new Writable();

    hashUpdater.on('data', (chunk) => {
        hashGenerator.update(chunk);
    });

    const readStream = fs.createReadStream(path_to_file, 'utf-8');

    await pipeline(
        readStream,
        hashUpdater
    );

    console.log(hashGenerator.digest("hex"));
};
