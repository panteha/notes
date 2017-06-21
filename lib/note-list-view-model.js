(function(exports) {

  var NoteListView = function(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.generateHtml = function() {
    var list = "<ul>";
    this.noteList.notes.forEach(function(note) {
      list += "<li><a href=\"#notes/" + note.id + "\">";
      list += note.text.substring(0,20) + "</a></li>";
    });
    list += "</ul>"
    return list;
  }

exports.NoteListView = NoteListView;
})(this);
