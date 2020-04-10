const yargs = require('yargs');
const note = require('./notes.js');

//Insert a new object in the json file
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

// Remove a json object if the queried title matches the title property of the json object
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

yargs.parse();