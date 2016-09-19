import Element from './containers/element';

export default class Input extends Element {
  constructor(el) {
    super(el);
  }

  getValue() {
    return this.el.value;
  }

  clearValue() {
    return this.el.value = '';
  }
}