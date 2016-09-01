"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),Element=function(){function Element(el){_classCallCheck(this,Element),this.el=el}return _createClass(Element,[{key:"add",value:function(html){this.el.innerHTML+=html}}]),Element}();
"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function(_x,_x2,_x3){for(var _again=!0;_again;){var object=_x,property=_x2,receiver=_x3;desc=parent=getter=void 0,_again=!1,null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0!==desc){if("value"in desc)return desc.value;var getter=desc.get;if(void 0===getter)return;return getter.call(receiver)}var parent=Object.getPrototypeOf(object);if(null===parent)return;_x=parent,_x2=property,_x3=receiver,_again=!0}},NoteList=function(_Element){function NoteList(el){_classCallCheck(this,NoteList),_get(Object.getPrototypeOf(NoteList.prototype),"constructor",this).call(this,el),this.notes=[]}return _inherits(NoteList,_Element),_createClass(NoteList,[{key:"containsTitle",value:function(_title){var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=this.notes[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var note=_step.value;if(_title===note.getTitle())return!0}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{!_iteratorNormalCompletion&&_iterator["return"]&&_iterator["return"]()}finally{if(_didIteratorError)throw _iteratorError}}return!1}},{key:"addNote",value:function(note){_get(Object.getPrototypeOf(NoteList.prototype),"add",this).call(this,note.getHTML()),this.notes.push(note)}},{key:"deleteNote",value:function(){}}]),NoteList}(Element);
"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),Note=function(){function Note(title){var text=arguments.length<=1||void 0===arguments[1]?"":arguments[1];_classCallCheck(this,Note),this.title=title,this.text=text}return _createClass(Note,[{key:"getTitle",value:function(){return this.title}},{key:"getHTML",value:function(){var template='\n      <div class="note">\n        <h3 class="note__header">'+this.title+"</h3>\n      </div>\n    ";return template}}]),Note}();
"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function(_x,_x2,_x3){for(var _again=!0;_again;){var object=_x,property=_x2,receiver=_x3;desc=parent=getter=void 0,_again=!1,null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0!==desc){if("value"in desc)return desc.value;var getter=desc.get;if(void 0===getter)return;return getter.call(receiver)}var parent=Object.getPrototypeOf(object);if(null===parent)return;_x=parent,_x2=property,_x3=receiver,_again=!0}},Input=function(_Element){function Input(el){_classCallCheck(this,Input),_get(Object.getPrototypeOf(Input.prototype),"constructor",this).call(this,el)}return _inherits(Input,_Element),_createClass(Input,[{key:"getValue",value:function(){return this.el.value}},{key:"clearValue",value:function(){return this.value=""}}]),Input}(Element);
"use strict";function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_get=function(_x,_x2,_x3){for(var _again=!0;_again;){var object=_x,property=_x2,receiver=_x3;desc=parent=getter=void 0,_again=!1,null===object&&(object=Function.prototype);var desc=Object.getOwnPropertyDescriptor(object,property);if(void 0!==desc){if("value"in desc)return desc.value;var getter=desc.get;if(void 0===getter)return;return getter.call(receiver)}var parent=Object.getPrototypeOf(object);if(null===parent)return;_x=parent,_x2=property,_x3=receiver,_again=!0}},ErrorField=function(_Element){function ErrorField(el){_classCallCheck(this,ErrorField),_get(Object.getPrototypeOf(ErrorField.prototype),"constructor",this).call(this,el)}return _inherits(ErrorField,_Element),_createClass(ErrorField,null,[{key:"addError",value:function(error){var template="<p>"+error+"</p>";_get(Object.getPrototypeOf(ErrorField),"add",this).call(this,template)}}]),ErrorField}(Element);
"use strict";!function(){function AddNote(){var val=titleInput.getValue();if(!val)return void console.warn("Title is empty");if(noteList.containsTitle(val))return void console.warn("A note with the title already exists");var note=new Note(val);titleInput.clearValue(),noteList.addNote(note)}var addBtn=document.getElementById("add_form__button"),titleInput=new Input(document.getElementById("add_form__input")),noteList=new NoteList(document.querySelector("#notes_section"));addBtn.onclick=AddNote;var ENTER=13;titleInput.el.onkeydown=function(e){e.keyCode===ENTER&&AddNote()}}(window);
