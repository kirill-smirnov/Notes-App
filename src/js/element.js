class Element {
  constructor(el) {
    this.el = el;
  }

  add(html) {
    this.el.innerHTML += html;
  }
}