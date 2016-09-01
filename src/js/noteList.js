class NoteList extends Element {
  constructor(el) {
    super(el);
    this.notes = [];
  }

  containsTitle(_title) {
    for (let note of this.notes) {
      if (_title === note.getTitle()) {
        return true;
      }
    }
    return false;
  }

  addNote(note) {
    super.add(note.getHTML());
    this.notes.push(note);
  }

  deleteNote(note) {

  }
}