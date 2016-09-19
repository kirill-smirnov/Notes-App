import Element from './containers/element';

export default class NoteList extends Element {
  notes: any[];

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

  getNoteByTitle(_title) {
    for (let note of this.notes) {
      if (_title === note.getTitle()) {
        return note;
      }
    }
    return;
  }

  addNote(note) {
    this.notes.push(note);
  }

  updateList() {
    super.clear();

    var markup;
    
    for (let note of this.notes) {

      super.add(note.getHTML());
    }
  }

  deleteNote(title) {
    var note = this.getNoteByTitle(title);
    var index = note.getIndex();
    
    if (index !== -1) {
      this.notes.splice(index, 1);
      this.updateList();

    } else {
      new Error('Invalid note index.')
    }
  }
}