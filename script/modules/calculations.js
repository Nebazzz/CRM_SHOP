import arrGoods from './data.js';
import elements from './elements.js';
const {
  modalSum,
  modalCount,
  modalPrice,
  modalDiscont,
  sumPriceElement,
} = elements;

const updateTotalPrice = () => {
  const sum = arrGoods.reduce((accumulator, item) => accumulator + item.price * item.count, 0);
  sumPriceElement.textContent = sum;
  return sum;
};

const updateSum = () => {
  const count = modalCount.value || 1;
  const price = modalPrice.value;
  let discont = modalDiscont.value;

  if (count > 0 && price > 0) {
    const sum = (count * price) - discont;
    const updatedSum = sum.toString();
    modalSum.textContent = updatedSum;

    return updatedSum;
  } else {
    modalSum.textContent = '0';
  }
};

export default {
  updateTotalPrice,
  updateSum,
};

