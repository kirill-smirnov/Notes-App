import Input from './input';
import NoteList from './noteList';
import Utils from './utils/utils';

export const utils = new Utils();

export const addBtn = document.getElementById('add_form__button');

export const titleInput = new Input( document.getElementById('add_form__input') );
export const noteList = new NoteList( document.querySelector('#notes_section') );

export const ENTER = 13;