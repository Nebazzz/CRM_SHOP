const modal = document.querySelector('.modal');
const modalVisible = document.querySelector('.overlay-visible');
const openModalButton = document.querySelector('.table__header-btn');
const closeModalButton = document.querySelector('.modal__button-close');
const modalForm = document.getElementById('product-window');
const modalFormCheckbox = document.querySelector('.form__input-checkbox');
const modalFormInput = document.querySelector('.form__input-number');
const modalInputNumber = document.querySelector('.input__number');
const modalSum = document.querySelector('.summary-number');
const modalCount = modalForm.querySelector('#qty');
const modalPrice = modalForm.querySelector('#price');
const modalDiscont = modalForm.querySelector('#discont-numb');
const tbodyElement = document.querySelector('.style-table__body');
const sumPriceElement = document.querySelector('.summary-price');

export default {
  modal,
  modalVisible,
  openModalButton,
  closeModalButton,
  modalForm,
  modalFormCheckbox,
  modalFormInput,
  modalInputNumber,
  modalSum,
  modalCount,
  modalPrice,
  modalDiscont,
  tbodyElement,
  sumPriceElement,
};