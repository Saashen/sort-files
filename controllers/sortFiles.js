const fs = require('fs/promises');
const path = require('path');

const isAccessible = require('../helpers/isAccessible');
const getFolderName = require('../helpers/getFolderName');
const handleError = require('../lib/handleError');

const sortFiles = async output => {
    const _copyFile = async file => {
        const ext = path.extname(file.path);
        const name = file.name.toLowerCase();
        const folder = getFolderName(ext, name);
        const targetPath = path.join(output, folder);

        try {
            if (!(await isAccessible(targetPath))) {
                await fs.mkdir(targetPath);
            }
            await fs.copyFile(file.path, path.join(targetPath, file.name));
        } catch (error) {
            handleError(error);
        }
        return;
    };

    const readFolder = async input => {
        try {
            const files = await fs.readdir(input);
            for (const item of files) {
                const localInput = path.join(input, item);
                const state = await fs.stat(localInput);
                if (state.isDirectory()) {
                    await readFolder(localInput);
                } else {
                    await _copyFile({ name: item, path: localInput });
                }
            }
        } catch (error) {
            handleError(error);
        }
    };

    return readFolder;
};

module.exports = sortFiles;
