(function(exports) {

  var NoteListView = function(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.generateHtml = function() {
    var list = "<ul>";
    this.noteList.notes.forEach(function(note) {
      list += ("<li><div>" + note.text.substring(0,20) + "</div></li>");
    });
    list += "</ul>"
    return list;
  }

exports.NoteListView = NoteListView;
})(this);
