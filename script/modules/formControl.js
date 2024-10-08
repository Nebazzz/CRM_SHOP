import arrGoods from './data.js';
import elements from './elements.js';
import calculations from './calculations.js';
import { createRow } from './createElements.js';
const { updateTotalPrice } = calculations;

const {
  modalFormInput,
  modalCount,
  modalPrice,
  tbodyElement,
  sumPriceElement,
} = elements;

const deleteRow = (tbodyElement, arrGoods, sumPriceElement) => {
  tbodyElement.addEventListener('click', e => {
    if (e.target.closest('.td__btn-delete')) {
      const productElement = e.target.closest('.product');
      const productIndex = Array.from(tbodyElement.children).indexOf(productElement);

      productElement.remove();

      arrGoods.splice(productIndex, 1);
      updateTotalPrice();
    }
  });
};

export default function formControl(modalFormCheckbox, updateSum, modalInputNumber, modalForm, closeModal, updateTotalPrice) {
  modalFormCheckbox.addEventListener('change', () => {
    if (modalFormCheckbox.checked) {
      modalFormInput.removeAttribute('disabled');
    } else {
      modalFormInput.setAttribute('disabled', 'disabled');
      modalFormInput.value = '';
    }
  });

  modalInputNumber.addEventListener('blur', (e) => {
    if (e.target.id === 'qty' || e.target.id === 'price' || e.target.id === 'discont-numb') {
      updateSum();
    }
  });

  modalCount.addEventListener('blur', updateSum);
  modalPrice.addEventListener('blur', updateSum);

  modalForm.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newObject = Object.fromEntries(formData);

    const newProduct = {
      id: '',
      title: newObject.title,
      price: newObject.price,
      description: newObject.description || '',
      category: newObject.category,
      discont: newObject.discont,
      count: newObject.count,
      units: newObject.units,
      images: {
        small: newObject.images_small,
        big: newObject.images_big,
      },
    };

    arrGoods.push(newProduct);

    const newRow = createRow(newProduct);
    tbodyElement.appendChild(newRow);

    modalForm.reset();
    closeModal();
    updateTotalPrice(arrGoods, sumPriceElement);
  });

  deleteRow(tbodyElement, arrGoods, sumPriceElement);
};