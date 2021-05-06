require('dotenv').config();

const getFolderName = (ext, name) => {
    if (
        name.includes(process.env.NAME1) ||
        name.includes(process.env.NAME2) ||
        name.includes(process.env.NAME3) ||
        name.includes('ausweis') ||
        name.includes('confirmation') ||
        name.includes('bescheinigung') ||
        name.includes('unterlage') ||
        name.includes('bestätigung') ||
        name.includes('bestaetigung')
    ) {
        return 'documents';
    } else if (name.includes('receipt') || name.includes('invoice')) {
        return 'receipts';
    } else if (name.includes('csqm')) {
        return 'mathematics';
    } else if (name.includes('cscw')) {
        return 'collaborative_work';
    } else if (name.includes('statistics')) {
        return 'statistics';
    } else if (name.includes('upload_week')) {
        return 'software_development';
    } else if (
        name.includes(process.env.NAME4) ||
        ext == '.epub' ||
        ext == '.pdb' ||
        ext == '.fb2' ||
        ext == '.azw' ||
        ext == '.lit' ||
        ext == '.prc' ||
        ext == '.mobi'
    ) {
        return 'books';
    } else if (ext == '.png' || ext == '.jpeg' || ext == '.jpg') {
        return 'images';
    } else if (ext == '.zip') {
        return 'archives';
    } else if (
        name.includes('student') ||
        name.includes(process.env.NAME5) ||
        name.includes(process.env.NAME6) ||
        name.includes('studien') ||
        name.includes('bank') ||
        name.includes('guide')
    ) {
        return 'university';
    } else if (
        name.includes('application') ||
        name.includes('bogen') ||
        name.includes('form') ||
        name.includes('antrag')
    ) {
        return 'forms';
    } else if (
        name.includes('a1') ||
        name.includes('a2') ||
        name.includes('b1')
    ) {
        return 'language';
    } else if (ext == '.msi' || ext == '.exe') {
        return 'installations';
    } else if (
        ext == '.html' ||
        ext == '.css' ||
        ext == '.js' ||
        ext == '.jsx' ||
        ext == '.json' ||
        ext == '.svg'
    ) {
        return 'code';
    } else {
        return 'unsorted';
    }
};

module.exports = getFolderName;
