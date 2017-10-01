

const fs=require('fs');
const notes=require('./notes.js');  //files written
const _=require('lodash');  //third party module
const yargs=require('yargs');


var argv=yargs.argv;
var command=argv._[0];


if(command === 'add')
{
  var note = notes.addNote(argv.title,argv.body);
  if(note) {
    console.log('Note created');
    console.log('------------');
    console.log(`Title :  ${note.title}`);
  }
  else {
    console.log('Note with same title exists');
  }
}
else if(command === 'list')
{
  var allNotes=notes.getList();
  console.log(`printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => {
    console.log('------------');
    console.log(`Title :  ${note.title}`);
    console.log(`Body : ${note.body}`);
    console.log('------------');
  });
}
else if(command === 'remove')
{
  var removedNote=notes.removeNote(argv.title);
  var msg = removedNote ? `note removed with title : ${argv.title}` : 'note dosent exist';
  console.log(msg);
}
else if(command === 'read')
{
  var note=notes.readNote(argv.title);
  var msg=note ? `Contents of given title is : ${note[0].body}` : "Title dosen't exists";
  console.log(msg);
}
else
{
    console.log('unrecognised command');
}
