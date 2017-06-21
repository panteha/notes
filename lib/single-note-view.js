(function(exports) {

  var NoteView = function(note) {
    this.note = note;
  }

  NoteView.prototype.noteGenerateHtml = function() {
    var note = "<div>";
    note += this.note.text;
    note += "</div>";
    return note;
  }

exports.NoteView = NoteView;
})(this);
