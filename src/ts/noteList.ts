import Element from './containers/element';

import Note from './note';

import { utils } from './constants';

export default class NoteList extends Element {
  notes: any;
  constructor(el) {
    super(el);
    this.notes = utils.store.get('notesApp').map(title => new Note(title)) || [];
    // this.notes = [];
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

  getNoteIndex(note) {
    return this.getNotes().indexOf(note);
  };

  addNote(note) {
    this.notes.push(note);
    // this.updateList();
  }

  updateList() {
    super.clear();
    
    for (let note of this.notes) {
      var noteElem = note.getHTML();     
      super.addHTML(noteElem);
    }

    utils.store.set('notesApp', this.getNotes().map(note => note.getTitle()))
  }

  deleteNote(title) {
    var note = this.getNoteByTitle(title);
    var index = this.getNoteIndex(note);
    
    if (index !== -1) {
      this.notes.splice(index, 1);
      this.updateList();

    } else {
      new Error('Invalid note index.')
    }
  }
}