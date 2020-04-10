const yargs = require('yargs');
const note = require('./notes.js');

console.log(yargs);
console.log(yargs.argv);
// console.log(note.testFunc());

yargs.parse();