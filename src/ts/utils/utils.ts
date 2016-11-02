import Note from '../note';

export default class Utils {
  constructor() {
    this.store = window["store"];
  }

  getNotes() {
    let notes = this.store.get('notesApp');
    if (!notes) {
      this.store.set('notesApp', []);
      notes = [];
    }
    return notes.map(title => new Note(title))
  }
} 