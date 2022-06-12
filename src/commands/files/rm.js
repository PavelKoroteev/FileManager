import fs from 'fs/promises';

export const rm = async (path_to_file) => {
    await fs.unlink(path_to_file);
}
