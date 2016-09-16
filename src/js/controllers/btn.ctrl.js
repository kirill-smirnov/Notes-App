class addBtnCtrl extends Ctrl {
  static handleOn() {
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
      noteList.updateList()
    }
  }

  static init(addBtn, titleInput) {
    addBtn.onclick = addBtnCtrl.handleOn;

    titleInput.onkeydown = e => {
      if (e.keyCode === ENTER) {
        addBtnCtrl.handleOn();
      }
    }
  }
}