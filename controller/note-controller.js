'use strict';

(function(exports){

  var NoteController = function(appElement, createNoteButton, notelist){
    this.appElement = appElement;
    this.notelist = notelist;
    this.notelistview = new NoteListView(notelist);
    this.noteId = null;
    var note_controller = this;
    window.onhashchange = function() {
      note_controller.onHashChange();
    };
    createNoteButton.onclick = function (event) {
      note_controller.onSubmit(event);
    };
  };

  NoteController.prototype.createView = function(){
    if (this.noteId == null) {
      this.appElement.innerHTML = this.notelistview.generateHtml();
    } else {
      var note = this.notelist.notes[this.noteId]
      var noteView = new NoteView(note);
      this.appElement.innerHTML = noteView.noteGenerateHtml();
    }
  };

  NoteController.prototype.onHashChange = function() {
    // console.log(location.hash);
    // console.log(location.hash.substring(7,8));
    this.noteId = location.hash.substring(7,8);
    this.createView(document.getElementById('app'));
  };

  NoteController.prototype.onSubmit = function(){
    var newNote = event.path[1]["0"].value;
    this.notelist.addNewNote(newNote);
    this.createView();
    event.path[1]["0"].value = "";
    event.preventDefault();
  }

  exports.NoteController = NoteController;

})(this);
