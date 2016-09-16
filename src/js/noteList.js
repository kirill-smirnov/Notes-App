class NoteList extends Element {
  constructor(el) {
    super(el);
    this.notes = [];
  }

  getNotes() {
    return this.notes;
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
    this.notes.push(note);
  }

  updateList() {
    this.clear();

    for (let note of this.notes) {
      super.add(note.getHTML());
    }
  }

  deleteNote(note) {
    
  }
}