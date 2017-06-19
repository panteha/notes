function testThatAddNoteCanAddANewNoteObject() {
  var noteList = new NoteList();
  noteList.addNewNote(new Note("First note!"));
  assert.isTrue(noteList.notes.length === 1);
  noteList.addNewNote(new Note("Second note!"));
  assert.isTrue(noteList.notes.length === 2);
}

testThatAddNoteCanAddANewNoteObject();



function testThatReturnsAllTheNoteObjects(){
  var noteList = new NoteList();
  note1 = new Note("1");
  note2 = new Note("2");
  noteList.addNewNote(note1);
  noteList.addNewNote(note2);
  assert.isTrue(noteList.showNotes()[0] === note1);
  assert.isTrue(noteList.showNotes()[1] === note2);
}

testThatReturnsAllTheNoteObjects();
