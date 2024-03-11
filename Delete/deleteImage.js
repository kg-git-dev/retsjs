const fs = require('fs').promises;
const path = require('path');
const createConsoleLog = require('../Utils/createConsoleLog');

const getMatchingFiles = async (directory, mlsIndex) => {
    try {
        const mlsPattern = new RegExp(`^${mlsIndex}-(\\d+)\\.jpeg$`, 'i');

        const files = await fs.readdir(directory);

        createConsoleLog(__filename, `looking up images for${mlsIndex}`)

        const matchingFiles = files.filter(file => file.match(mlsPattern));
               
        return matchingFiles;
    } catch (err) {
        throw err;
    }
}

const deleteMatchingFiles = async (directory, mlsIndex) => {
    try {
        const matchingFiles = await getMatchingFiles(directory, mlsIndex);

        console.log(matchingFiles);

        if (matchingFiles.length > 0) {
            await Promise.all(matchingFiles.map(async (file) => {
                const filePath = path.join(directory, file);
                await fs.unlink(filePath);
            }));
            console.log(`Deleted ${matchingFiles.length} files.`); // Moved outside the loop
        } else {
            console.log('No matching files found to delete.');
        }
    } catch (err) {
        console.log('Error deleting files:', err);
    }
}


module.exports = {
    getMatchingFiles,
    deleteMatchingFiles
};
