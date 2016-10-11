/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var btn_ctrl_1 = __webpack_require__(1);
	var constants_1 = __webpack_require__(4);
	btn_ctrl_1.default.init(constants_1.addBtn, constants_1.titleInput.el);
	constants_1.noteList.updateList();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var ctrl_1 = __webpack_require__(2);
	var note_1 = __webpack_require__(3);
	var constants_1 = __webpack_require__(4);
	var addBtnCtrl = (function (_super) {
	    __extends(addBtnCtrl, _super);
	    function addBtnCtrl() {
	        _super.apply(this, arguments);
	    }
	    addBtnCtrl.handleOn = function () {
	        var val = constants_1.titleInput.getValue();
	        if (!val) {
	            console.warn('Title is empty');
	            return;
	        }
	        else if (constants_1.noteList.containsTitle(val)) {
	            console.warn('A note with the title already exists');
	            return;
	        }
	        else {
	            var note = new note_1.default(val);
	            constants_1.titleInput.clearValue();
	            constants_1.noteList.addNote(note);
	            constants_1.noteList.updateList();
	        }
	    };
	    addBtnCtrl.init = function (addBtn, titleInput) {
	        addBtn.onclick = addBtnCtrl.handleOn;
	        titleInput.onkeydown = function (e) {
	            if (e.keyCode === constants_1.ENTER) {
	                addBtnCtrl.handleOn();
	            }
	        };
	    };
	    return addBtnCtrl;
	}(ctrl_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = addBtnCtrl;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var Ctrl = (function () {
	    function Ctrl() {
	    }
	    return Ctrl;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Ctrl;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var constants_1 = __webpack_require__(4);
	var Note = (function () {
	    function Note(title, text) {
	        if (text === void 0) { text = ''; }
	        this.title = title;
	        this.text = text;
	    }
	    Note.prototype.getTitle = function () {
	        return this.title;
	    };
	    Note.prototype.getIndex = function () {
	        return constants_1.noteList.getNotes().indexOf(this);
	    };
	    Note.prototype.getElem = function () {
	        var _this = this;
	        var noteElem = document.createElement('div');
	        noteElem.classList.add('note');
	        var header = document.createElement('h3');
	        header.classList.add('note__header');
	        header.innerText = this.title;
	        var img = document.createElement('img');
	        img.classList.add('delete_note');
	        img.setAttribute('src', 'https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-22-128.png');
	        img.onclick = function () { return constants_1.noteList.deleteNote(_this.title); };
	        noteElem.appendChild(header);
	        noteElem.appendChild(img);
	        return noteElem;
	    };
	    return Note;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Note;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var input_1 = __webpack_require__(5);
	var noteList_1 = __webpack_require__(7);
	exports.addBtn = document.getElementById('add_form__button');
	exports.titleInput = new input_1.default(document.getElementById('add_form__input'));
	exports.noteList = new noteList_1.default(document.querySelector('#notes_section'));
	exports.ENTER = 13;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var element_1 = __webpack_require__(6);
	var Input = (function (_super) {
	    __extends(Input, _super);
	    function Input(el) {
	        _super.call(this, el);
	    }
	    Input.prototype.getValue = function () {
	        return this.el.value;
	    };
	    Input.prototype.clearValue = function () {
	        return this.el.value = '';
	    };
	    return Input;
	}(element_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Input;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	var Element = (function () {
	    function Element(el) {
	        this.el = el;
	    }
	    Element.prototype.clear = function () {
	        this.el.innerHTML = '';
	    };
	    Element.prototype.addHTML = function (html) {
	        this.el.innerHTML += html;
	    };
	    Element.prototype.addElem = function (el) {
	        this.el.appendChild(el);
	    };
	    return Element;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Element;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var element_1 = __webpack_require__(6);
	var note_1 = __webpack_require__(3);
	var NoteList = (function (_super) {
	    __extends(NoteList, _super);
	    function NoteList(el) {
	        _super.call(this, el);
	        this.notes = JSON.parse(localStorage.getItem('notesApp')) || [];
	    }
	    NoteList.prototype.getNotes = function () {
	        return this.notes;
	    };
	    NoteList.prototype.containsTitle = function (_title) {
	        for (var _i = 0, _a = this.notes; _i < _a.length; _i++) {
	            var note = _a[_i];
	            if (_title === note.getTitle()) {
	                return true;
	            }
	        }
	        return false;
	    };
	    NoteList.prototype.getNoteByTitle = function (_title) {
	        for (var _i = 0, _a = this.notes; _i < _a.length; _i++) {
	            var note = _a[_i];
	            if (_title === note.getTitle()) {
	                return note;
	            }
	        }
	        return;
	    };
	    NoteList.prototype.addNote = function (note) {
	        this.notes.push(note);
	    };
	    NoteList.prototype.updateList = function () {
	        console.log(this.notes);
	        _super.prototype.clear.call(this);
	        for (var _i = 0, _a = this.notes; _i < _a.length; _i++) {
	            var noteName = _a[_i];
	            var note = new note_1.default(noteName);
	            var noteElem = note.getElem();
	            _super.prototype.addElem.call(this, noteElem);
	        }
	    };
	    NoteList.prototype.deleteNote = function (title) {
	        var note = this.getNoteByTitle(title);
	        var index = note.getIndex();
	        if (index !== -1) {
	            this.notes.splice(index, 1);
	            this.updateList();
	        }
	        else {
	            new Error('Invalid note index.');
	        }
	    };
	    return NoteList;
	}(element_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = NoteList;


/***/ }
/******/ ]);