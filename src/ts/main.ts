import Input from './input';
import NoteList from './noteList';

import addBtnCtrl from './controllers/btn.ctrl';

export var addBtn = document.getElementById('add_form__button');

export var titleInput = new Input( document.getElementById('add_form__input') );
export var noteList = new NoteList( document.querySelector('#notes_section') );

export const ENTER = 13;

addBtnCtrl.init(addBtn, titleInput.el);
