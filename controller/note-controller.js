'use strict';

(function(exports){

  var NoteController = function(notelist){
    this.notelist = notelist;
  }

  NoteController.prototype.insertHtml = function(){
  }

  NoteController.prototype.createView = function(var notelistview = new NoteListView(notelist)){
    notelistview.generateHtml();
  }

  exports.NoteController = NoteController;

})(this);


var elem = document.getElementById("app");
notelist = new NoteList
notecontroller = new NoteController(notelist)
elem.innerHTML = notecontroller.insertHtml();
