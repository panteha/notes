function testThatViewReturnsStringOfHtmlContainingEmptyList() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.generateHtml() === "<ul></ul>");
}

testThatViewReturnsStringOfHtmlContainingEmptyList();

function testThatViewReturnsStringOfHtmlContainingListWithOneItem() {
  var noteList = new NoteList();
  noteList.addNewNote("I'm the first note!");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.generateHtml() === "<ul><li><div>I'm the first note!</div></li></ul>");
}

testThatViewReturnsStringOfHtmlContainingListWithOneItem();

function testThatViewReturnsStringOfHtmlContainingListWithSeveralItems() {
  var noteList = new NoteList();
  noteList.addNewNote("note one");
  noteList.addNewNote("note two");
  noteList.addNewNote("note three");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.generateHtml() === "<ul><li><div>note one</div></li><li><div>note two</div></li><li><div>note three</div></li></ul>");
}

testThatViewReturnsStringOfHtmlContainingListWithSeveralItems();

function testThatViewReturnsStringOfHtmlContainingFirst20Character(){
  var noteList = new NoteList();
  noteList.addNewNote("1234567891011121314151617");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.generateHtml() === "<ul><li><div>12345678910111213141</div></li></ul>");
}

testThatViewReturnsStringOfHtmlContainingFirst20Character();
