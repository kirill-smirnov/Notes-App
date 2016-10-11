import Element from './containers/element';

import Note from './note'

export default class NoteList extends Element {
  notes: any[];

  constructor(el) {
    super(el);
    this.notes = JSON.parse(localStorage.getItem('notesApp')) || [];
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

  updateList() { console.log(this.notes);
    super.clear();
    
    for (let noteName of this.notes) {
      var note = new Note(noteName);
      var noteElem = note.getElem();     

      super.addElem(noteElem);
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