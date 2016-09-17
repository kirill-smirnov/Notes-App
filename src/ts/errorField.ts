import { Element } from './containers/element';


export class ErrorField extends Element {
  constructor(el) {
    super(el);
  }

  static addError(error) {
    var template = `<p>${error}</p>`
    super.add(template);
  }
}