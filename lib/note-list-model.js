(function(exports) {

  var NoteList = function() {
    this.notes = []
    this.noteId = 0;
  }

  NoteList.prototype.addNewNote = function(text, id) {
    this.notes.push(new Note(text, id = this.noteId));
    this.noteId += 1;
    // console.log(this.notes[1].id);
    this.notes.forEach(function(note) {
      console.log(note.id);
    });
  }

  NoteList.prototype.showNotes = function(){
    return this.notes;
  }

  NoteList.prototype.returnUniqueID = function(text){
    var noteIndex = this.notes.indexOf(note)
  }

  exports.NoteList = NoteList;
})(this);
