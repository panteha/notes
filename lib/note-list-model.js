(function(exports) {

  var NoteList = function() {
    this.notes = []
    this.noteId = 0;
  }

  NoteList.prototype.addNewNote = function(text, id) {
    this.notes.push(new Note(text, this.noteId));
    this.noteId += 1;
  }

  NoteList.prototype.showNotes = function(){
    return this.notes;
  }

  exports.NoteList = NoteList;
})(this);
