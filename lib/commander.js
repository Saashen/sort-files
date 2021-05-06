const { program } = require('commander');

program
    .version('0.0.1')
    .option(
        '-f, --folder [type]',
        'Input source folder, path from disk D',
        'Downloads',
    )
    .option('-o, --output [type]', 'Input output folder', 'Sorted');

module.exports = program;
