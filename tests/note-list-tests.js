function testThatAddNoteCanAddANewNoteObject() {
  var noteList = new NoteList();
  noteList.addNewNote(new Note("First note!"));
  assert.isTrue(noteList.notes.length === 1);
  noteList.addNewNote(new Note("Second note!"));
  assert.isTrue(noteList.notes.length === 2);
}

testThatAddNoteCanAddANewNoteObject();
