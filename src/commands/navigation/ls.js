import fs from 'fs/promises';

export const ls = async () => {
    const filesNames = await fs.readdir(process.cwd());

    console.log(filesNames);
};
