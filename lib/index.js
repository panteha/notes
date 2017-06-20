list = new NoteList
controller = new NoteController(list);
list.addNewNote("Note 1");
list.addNewNote("Note 2");
controller.createView(app);
