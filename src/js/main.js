//@prepros-prepend element.js
//@prepros-prepend noteList.js
//@prepros-prepend note.js
//@prepros-prepend input.js
//@prepros-prepend errorField.js

(function main(window) {

  var addBtn = document.getElementById('add_form__button');

  var titleInput = new Input( document.getElementById('add_form__input') );
  var noteList = new NoteList( document.querySelector('#notes_section') );

  function AddNote() {
    var val = titleInput.getValue();

    if (!val) {
      console.warn('Title is empty');
      return;
    }

    else if (noteList.containsTitle(val)) {
      console.warn('A note with the title already exists');
      return;
    }

    else {
      var note = new Note(val);
      titleInput.clearValue();
      noteList.addNote(note);
    }
  }

  addBtn.onclick = AddNote;

  const ENTER = 13;

  titleInput.el.onkeydown = e => {
    if (e.keyCode === ENTER) {
      AddNote();
    }
  }


})(window);