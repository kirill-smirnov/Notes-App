class Note {
	constructor(title, text = '') {
		this.title = title;
		this.text = text;
	}

  getTitle() {
    return this.title;
  }

  getHTML() {
    var template = `
      <div class="note">
        <h3 class="note__header">${this.title}</h3>
      </div>
    `;

    return template;
  }
}