(function(exports) {

  var NoteList = function() {
    this.notes = []
  }

  NoteList.prototype.addNewNote = function(text) {
    this.notes.push(new Note(text));
  }

  NoteList.prototype.showNotes = function(){
    return this.notes;
  }

  exports.NoteList = NoteList;
})(this);
