import fs from 'fs/promises';

export const cp = async (path_to_file, path_to_new_directory) => {
    await fs.copyFile(path_to_file, path_to_new_directory);
}
