const fs = require('fs');
const chalk = require('chalk');

// Prompt messages styling.
const successMsg = chalk.green.inverse;
const errorMsg = chalk.red.inverse;

// Main function for adding note.
const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title);
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });

        saveNote(notes);
        console.log(successMsg('Successfully added a note!'));
    } else {
        console.log(errorMsg('The note already exists!'));
    }
};

// Reads the stated json file. If it doesn't exist, the function returns an empty array.
const loadNotes = function () {
    try {
        const bufferedData = fs.readFileSync('notes.json');
        return JSON.parse(bufferedData);
    } catch (e) {
        return [];
    }
};

// Writes/Overwrite to the json file. If it doesn't exist, fs will create one.
const saveNote = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes));

module.exports = {
    addNote: addNote
}