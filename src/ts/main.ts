import addBtnCtrl from './controllers/btn.ctrl';

import { addBtn, titleInput, noteList } from './constants';

window["noteList"] = noteList;

addBtnCtrl.init(addBtn, titleInput.el);
