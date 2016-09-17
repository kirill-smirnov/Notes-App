import { noteList } from './constants';

export class Note {
  title: string;
  text: string;

	constructor(title, text = '') {
		this.title = title;
		this.text = text;
	}

  getTitle() {
    return this.title;
  }

  getIndex() {
    return noteList.getNotes().indexOf(this);
  }

  getHTML() {
    return `
      <div class="note">
        <h3 class="note__header">${this.title}</h3>
      </div>
    `;
  }
}