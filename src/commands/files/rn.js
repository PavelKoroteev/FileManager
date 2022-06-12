import fs from 'fs/promises';
import { existsSync } from 'fs';

export const rn = async (path_to_file, new_filename) => {
    if (existsSync(new_filename)) {
        throw new Error('File is exist');        
    }
    await fs.rename(path_to_file, new_filename);
}
