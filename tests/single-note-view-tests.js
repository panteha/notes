function testThatSingleViewReturnsStringOfHtmlContainingOneNote() {
  var note = new Note("single note");
  var noteview = new NoteView(note);
  assert.isTrue(noteview.noteGenerateHtml() === "<div>single note</div>");
}

testThatSingleViewReturnsStringOfHtmlContainingOneNote();
