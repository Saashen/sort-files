const fs = require('fs/promises');
const path = require('path');
const handleError = require('../lib/handleError');

const deleteFiles = async folderInput => {
    try {
        const files = await fs.readdir(folderInput);
        for (const file of files) {
            await fs.unlink(path.join(folderInput, file));
        }
    } catch (error) {
        handleError(error);
    }
};

module.exports = deleteFiles;
