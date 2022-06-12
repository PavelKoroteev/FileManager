import fs from 'fs/promises';

const checkUnexist = async (new_filename) => {
    try {
        await fs.readFile(new_filename);
    } catch (e) {
        return;
    }
    throw new Error(`File with name "${new_filename}" already exist`);
};

export const rn = async (path_to_file, new_filename) => {
    await checkUnexist(new_filename);
    await fs.rename(path_to_file, new_filename);
}