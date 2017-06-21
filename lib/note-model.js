(function(exports){

  var Note = function(text, id){
    this.text = text;
    this.id = id;
  }

  Note.prototype.returnText = function(){
    return this.text;
  }

  exports.Note = Note;
  exports.Note.prototype.returnText = Note.prototype.returnText;
})(this);
