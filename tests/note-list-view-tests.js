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
  assert.isTrue(noteListView.generateHtml().includes('I\'m the first note!'));
}

testThatViewReturnsStringOfHtmlContainingListWithOneItem();

function testThatViewReturnsStringOfHtmlContainingListWithSeveralItems() {
  var noteList = new NoteList();
  noteList.addNewNote("note one");
  noteList.addNewNote("note two");
  noteList.addNewNote("note three");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.generateHtml().includes('note one'));
  assert.isTrue(noteListView.generateHtml().includes('note two'));
  assert.isTrue(noteListView.generateHtml().includes('note three'));
}

testThatViewReturnsStringOfHtmlContainingListWithSeveralItems();

function testThatViewReturnsStringOfHtmlContainingFirst20Character(){
  var noteList = new NoteList();
  noteList.addNewNote("1234567891011121314151617");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.generateHtml().includes('12345678910111213141'));
}

testThatViewReturnsStringOfHtmlContainingFirst20Character();


function testThatLinkEachNoteToAPage(){
  var noteList = new NoteList();
  noteList.addNewNote("note one");
  var noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.generateHtml().includes('#notes/0'));
}
testThatLinkEachNoteToAPage();
