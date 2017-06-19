function testThatAddNoteCanAddANewNoteObject() {
  var noteList = new NoteList();
  noteList.addNewNote("First note!");
  assert.isTrue(noteList.notes.length === 1);
  noteList.addNewNote("Second note!");
  assert.isTrue(noteList.notes.length === 2);
}

testThatAddNoteCanAddANewNoteObject();



function testThatReturnsAllTheNoteObjects(){
  var noteList = new NoteList();
  noteList.addNewNote("1");
  noteList.addNewNote("2");
  assert.isTrue(noteList.showNotes()[0].text === "1");
  assert.isTrue(noteList.showNotes()[1].text === "2");
}

testThatReturnsAllTheNoteObjects();
