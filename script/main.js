import arrGoods from './modules/data.js';
import { renderGoods } from './modules/createElements.js';
import elements from './modules/elements.js';
import calculations from './modules/calculations.js';
import formControl from './modules/formControl.js';
import { modalControl } from './modules/modalControl.js';

const {
  modalVisible,
  openModalButton,
  modalForm,
  modalFormCheckbox,
  modalInputNumber,
  sumPriceElement,
} = elements;

const { updateTotalPrice, updateSum } = calculations;

const { closeModal } = modalControl(openModalButton, modalVisible);

const init = () => {
  renderGoods(arrGoods);

  updateTotalPrice(arrGoods, sumPriceElement);

  formControl(modalFormCheckbox, updateSum, modalInputNumber, modalForm, closeModal, updateTotalPrice);
};

init();