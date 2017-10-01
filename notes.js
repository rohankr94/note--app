

const fs=require('fs');

var fetchNote = () => {
  try{
  var prevData = fs.readFileSync('appdata.json');
  return JSON.parse(prevData);
}catch(e){
  return [];
}
};

var saveNote = (notes) => {
  fs.writeFileSync('appdata.json',JSON.stringify(notes));
};

var addNote = (title,body) => {
  var notes=fetchNote();
  var note={
    title,body
  };
  var duplicateNote=notes.filter((note) => note.title===title);
  if(duplicateNote.length==0)
  {
    notes.push(note);
    saveNote(notes);
    return note;
  }
};

var getList = () => {
  return fetchNote();
};

var removeNote = (title) => {
  var notes=fetchNote();
  var filteredNote=notes.filter((note) => note.title!==title);
  saveNote(filteredNote);
  return notes.length !== filteredNote.length;
};

var readNote = (title) => {
  var notes=fetchNote();
  var filteredNote=notes.filter((note) => note.title===title);
  if(filteredNote.length!==0)
    return filteredNote;
};

module.exports = {
  addNote,
  getList,
  removeNote,
  readNote
};
