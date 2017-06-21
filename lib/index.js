var createNoteButton = document.getElementById("button");
var appElement = document.getElementById('app');

var list = new NoteList
var controller = new NoteController(appElement, createNoteButton, list);
list.addNewNote("Note 1");
list.addNewNote("Note 2");
controller.createView();
