var createNoteButton = document.getElementById("button");
var appElement = document.getElementById(id='app');

var list = new NoteList
var controller = new NoteController(createNoteButton, list);
list.addNewNote("Note 1");
list.addNewNote("Note 2");
controller.createView(appElement);
