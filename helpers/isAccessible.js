const fs = require('fs/promises');

const isAccessible = targetPath =>
    fs
        .access(targetPath)
        .then(() => true)
        .catch(() => false);

module.exports = isAccessible;
