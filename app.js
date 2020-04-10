const yargs = require('yargs');
const note = require('./notes.js');

//Inserts a new object in the json file
//Sample input: node app.js add --title="Grocery List" --body="Cereal and milk"
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Insert title of the new note',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Insert content of the new note',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        note.addNote(argv.title, argv.body);
    },
});

// Removes a json object if the queried title matches the title property of the object
// Sample input: node app.js remove --title="Grocery List"
yargs.command({
    command: 'remove',
    describe: 'Remove an existing note',
    builder: {
        title: {
            describe: 'Delete an existing note',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv) {
        note.removeNote(argv.title);
    },
});

// Lists all the title of all json objects 
// Sample input: node app.js list
yargs.command({
    command: 'list',
    describe: 'List all created note/s',
    handler() {
        note.listNotes();
    },
});

// Displays the object title and body if the queried title finds a match
// Sample input: node app.js read --title="Grocery List"
yargs.command({
    command: 'read',
    describe: 'Read selected note',
    builder: {
        title: {
            describe: 'Read the selected note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.readNote(argv.title);
    },
});

yargs.parse();