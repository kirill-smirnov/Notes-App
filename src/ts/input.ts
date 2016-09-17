import { Element } from './containers/element';

export class Input extends Element {
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