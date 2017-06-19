(function(exports) {

  var NoteList = function() {
    this.notes = []
  }

  NoteList.prototype.addNewNote = function(note) {
    this.notes.push(note);
  }

  exports.NoteList = NoteList;
  exports.NoteList.prototype.addNewNote = NoteList.prototype.addNewNote;
})(this);
