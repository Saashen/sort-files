const fs = require('fs/promises');
const path = require('path');

const program = require('./lib/commander');
const handleError = require('./lib/handleError');

const sortFiles = require('./controllers/sortFiles');
const deleteFiles = require('./controllers/deleteFiles');
const isAccessible = require('./helpers/isAccessible');

program.parse(process.argv);
const folderInput = path.resolve('d:\\', program.opts().folder);
const folderOutput = path.resolve('d:\\', program.opts().output);

(async () => {
    try {
        const directory = await isAccessible(folderOutput);
        if (!directory) {
            await fs.mkdir(folderOutput);
        }

        const sorting = await sortFiles(folderOutput);
        return await sorting(folderInput);
    } catch (error) {
        handleError(error);
    }
})()
    .then(() => console.log('Done: now can delete source folder'))
    .then(async () => deleteFiles(folderInput))
    .then(() => console.log('Done: folders deleted'));
