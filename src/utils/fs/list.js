import fs from 'fs/promises';
import { fileURLToPath } from 'url';

export const ls = async () => {
    const path = (p) => fileURLToPath(new URL(import.meta.url));

    try {
        const files = await fs.readdir(path('./files'));
        console.log(files);
    } catch (e) {        
        throw new Error('FS operation failed');
    }
};
