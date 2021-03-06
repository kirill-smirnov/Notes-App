import Element from './containers/element';


export default class ErrorField extends Element {
  constructor(el) {
    super(el);
  }

  static addError(error) {
    var template = `<p>${error}</p>`
    super.addHTML(template);
  }
}