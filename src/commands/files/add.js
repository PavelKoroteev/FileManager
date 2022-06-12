import fs from 'fs/promises';

export const add = async (new_file_name) => {
    await fs.writeFile(new_file_name, '');
}