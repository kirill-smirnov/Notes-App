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
	btn_ctrl_1.addBtnCtrl.init(constants_1.addBtn, constants_1.titleInput.el);


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
	            var note = new note_1.Note(val);
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
	}(ctrl_1.Ctrl));
	exports.addBtnCtrl = addBtnCtrl;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var Ctrl = (function () {
	    function Ctrl() {
	    }
	    return Ctrl;
	}());
	exports.Ctrl = Ctrl;


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
	    Note.prototype.getHTML = function () {
	        return "\n      <div class=\"note\">\n        <h3 class=\"note__header\">" + this.title + "</h3>\n      </div>\n    ";
	    };
	    return Note;
	}());
	exports.Note = Note;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var input_1 = __webpack_require__(5);
	var noteList_1 = __webpack_require__(7);
	exports.addBtn = document.getElementById('add_form__button');
	exports.titleInput = new input_1.Input(document.getElementById('add_form__input'));
	exports.noteList = new noteList_1.NoteList(document.querySelector('#notes_section'));
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
	}(element_1.Element));
	exports.Input = Input;


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
	    Element.prototype.add = function (html) {
	        this.el.innerHTML += html;
	    };
	    return Element;
	}());
	exports.Element = Element;


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
	var NoteList = (function (_super) {
	    __extends(NoteList, _super);
	    function NoteList(el) {
	        _super.call(this, el);
	        this.notes = [];
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
	    NoteList.prototype.addNote = function (note) {
	        this.notes.push(note);
	    };
	    NoteList.prototype.updateList = function () {
	        _super.prototype.clear.call(this);
	        for (var _i = 0, _a = this.notes; _i < _a.length; _i++) {
	            var note = _a[_i];
	            _super.prototype.add.call(this, note.getHTML());
	        }
	    };
	    NoteList.prototype.deleteNote = function (note) {
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
	}(element_1.Element));
	exports.NoteList = NoteList;


/***/ }
/******/ ]);