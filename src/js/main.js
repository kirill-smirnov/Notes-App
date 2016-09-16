//@prepros-prepend containers/element.js
//@prepros-prepend containers/ctrl.js
//@prepros-prepend noteList.js
//@prepros-prepend note.js
//@prepros-prepend input.js
//@prepros-prepend errorField.js
//@prepros-prepend controllers/btn.ctrl.js

// (function main(window) {

  var addBtn = document.getElementById('add_form__button');

  var titleInput = new Input( document.getElementById('add_form__input') );
  var noteList = new NoteList( document.querySelector('#notes_section') );

  const ENTER = 13;

  addBtnCtrl.init(addBtn, titleInput.el);


// })(window);