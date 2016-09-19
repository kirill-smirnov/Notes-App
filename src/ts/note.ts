import { noteList } from './constants';

export default class Note {
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
        <img onclick="noteList.deleteNote('${this.title}')" class="delete_note" src="https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-22-128.png"></img>
      </div>
    `;
  }
}