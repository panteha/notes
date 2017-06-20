function testThatControllerAddsNotesToView() {
  function ElementDouble() {}
  function NoteListDouble() {}
  NoteListDouble.prototype.notes = [{'text': 'Note 1'}];
  var noteList = new NoteListDouble();

  var controller = new NoteController(noteList);
  var elementDouble = new ElementDouble();
  controller.createView(elementDouble);
  assert.isTrue(elementDouble.innerHTML.includes('Note 1'));
}
testThatControllerAddsNotesToView();
