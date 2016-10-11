export default class Element {
  el: any;

  constructor(el) {
    this.el = el;
  }

  clear() {
    this.el.innerHTML = '';
  }

  addHTML(html) {
    this.el.innerHTML += html;
  }

  addElem(el) {
    this.el.appendChild(el);
  }
}