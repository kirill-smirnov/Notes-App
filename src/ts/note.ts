import { noteList } from './constants';

export default class Note {
  title: string;
  text: string;

	constructor(title, text='') {
		this.title = title;
	}

  getTitle() {
    return this.title;
  }

  // getElem() {
  //   var noteElem = document.createElement('div');
  //     noteElem.classList.add('note');

  //   var header: HTMLElement = document.createElement('h3');
  //     header.classList.add('note__header');
  //     header.innerText = this.title;

  //   var img: HTMLImageElement = document.createElement('img');
  //     img.classList.add('delete_note');
  //     img.setAttribute('src', 'https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-22-128.png');
  //     img.onclick = () => noteList.deleteNote(this.title);


  //   noteElem.appendChild(header);
  //   noteElem.appendChild(img);

  //   return noteElem;

  // }

  getHTML() {
    return `
      <div class="note">
        <h3 class="note__header">${this.title}</h3>
        <img onclick="noteList.deleteNote('${this.title}')" class="delete_note" src="https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-22-128.png"></img>
      </div>
    `;
  }
}