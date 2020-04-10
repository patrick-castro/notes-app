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

// Writes/Overwrites to the json file. If it doesn't exist, fs will create one.
const saveNote = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes));

const removeNote = function (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        saveNote(notesToKeep);
        console.log(successMsg('Successfully deleted note'));
    } else {
        console.log(errorMsg('The note does not exists!'));
    }
};

// Displays all the object titles in the json
const listNotes = function () {
    const notes = loadNotes();
    if (notes.length > 0) {
        notes.forEach((note) => console.log(note.title));
    } else {
        console.log(errorMsg('No notes available'));
    }

};

const readNote = function (title) {
    const notes = loadNotes();
    const noteToRead = notes.find((note) => note.title === title);

    if (noteToRead) {
        console.log('Title: ' + noteToRead.title);
        console.log('Body: ' + noteToRead.body);
    } else {
        console.log(errorMsg('The note does not exist!'));
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};