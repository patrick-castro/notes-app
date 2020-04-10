const yargs = require('yargs');
const note = require('./notes.js');

//Added a command to add a new note
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

yargs.parse();