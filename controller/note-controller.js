// var NoteList = require("./lib/note-list-model.js").NoteList;
'use strict';

(function(exports){

  var NoteController = function(notelist){
    this.notelist = notelist;
    this.notelist.addNewNote("Favourite drink: seltzer");
    // notelistview = new NoteListView(notelist)
  }

  NoteController.prototype.insertHtml = function(){
    notelistview.generateHtml()
  }

  NoteController.prototype.createView = function(notelist){
    (new NoteListView(notelist)).noteList;
  }

  exports.NoteController = NoteController;

})(this);


var elem = document.getElementById("app");
notelist = new NoteList
notecontroller = new NoteController(notelist)
elem.innerHTML = notecontroller.insertHtml();
