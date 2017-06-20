'use strict';

(function(exports){

  var NoteController = function(notelist){
    this.notelist = notelist;
    this.notelistview = new NoteListView(notelist);
  }

  NoteController.prototype.createView = function(element){
    element.innerHTML = this.notelistview.generateHtml();
  }

  exports.NoteController = NoteController;

})(this);

