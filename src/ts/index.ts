import addBtnCtrl from './controllers/btn.ctrl';

import { addBtn, titleInput, noteList } from './constants';

import '../sass/main.sass';

window["noteList"] = noteList;

addBtnCtrl.init(addBtn, titleInput.el);

noteList.updateList();