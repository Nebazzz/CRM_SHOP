'use strict';

// 1 урок

// const name_product = "Кроссовки NIKE";
// // console.log('Наименование товара: ', name_product);
// const quantity_product = 20;
// // console.log('Количество товара: ', quantity_product);
// const category_product = "Обувь";
// // console.log('Категория товара: ', category_product);
// const price_product = 3999;
// // console.log('Цена товара: ', price_product);

// 2 урок

const answerName = prompt('Наименование товара');
const answerQuantity = +prompt('Количество товара');
const answerCategory = prompt('Категория товара');
const answerPrice = +prompt('Цена товара');
const summaryProduct =  answerQuantity * answerPrice;
console.log(`На складе ${answerQuantity} единицы товара ${answerName} на сумму ${summaryProduct} деревянных`);
