import fs from 'fs/promises';
import { createHash } from 'crypto';

export const hash = async (path_to_file) => {
    const file = await fs.readFile(path_to_file, 'utf-8');

    console.log(createHash('SHA256').update(file).digest('hex'));
}