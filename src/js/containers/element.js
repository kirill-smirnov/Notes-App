class Element {
  constructor(el) {
    this.el = el;
  }

  clear() {
    this.el.innerHTML = '';
  }

  add(html) {
    this.el.innerHTML += html;
  }
}