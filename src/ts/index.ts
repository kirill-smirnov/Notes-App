import addBtnCtrl from './controllers/btn.ctrl';

import { addBtn, titleInput, noteList } from './constants';

addBtnCtrl.init(addBtn, titleInput.el);

noteList.updateList()