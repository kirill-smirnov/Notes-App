import Input from './input';
import NoteList from './noteList';


export const addBtn = document.getElementById('add_form__button');

export const titleInput = new Input( document.getElementById('add_form__input') );
export const noteList = new NoteList( document.querySelector('#notes_section') );

export const ENTER = 13;