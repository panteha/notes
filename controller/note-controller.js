'use strict';

(function(exports){

  var NoteController = function(createNoteButton, notelist){
    this.notelist = notelist;
    this.notelistview = new NoteListView(notelist);
    this.noteId = null;
    var note_controller = this;
    window.onhashchange = function() {
      note_controller.onHashChange();
    };
    createNoteButton.onclick = function (event) {
      console.log(event);
      console.log(event.path[1]["0"].value);
      note_controller.onSubmit();
      event.preventDefault();
    };
  };

  NoteController.prototype.createView = function(element){
    if (this.noteId == null) {
      element.innerHTML = this.notelistview.generateHtml();
    } else {
      var note = this.notelist.notes[this.noteId]
      var noteView = new NoteView(note);
      element.innerHTML = noteView.noteGenerateHtml();
    }
  };

  NoteController.prototype.onHashChange = function() {
    // console.log(location.hash);
    // console.log(location.hash.substring(7,8));
    this.noteId = location.hash.substring(7,8);
    this.createView(document.getElementById(id='app'));
  };

  NoteController.prototype.onSubmit = function(){
    console.log('submit');
  }

  exports.NoteController = NoteController;

})(this);
