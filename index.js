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

const answer_name = prompt('Наименование товара');
const answer_quantity = +prompt('Количество товара');
const answer_category = prompt('Категория товара');
const answer_price = +prompt('Цена товара');
const summary_product =  answer_quantity * answer_price;
console.log(`На складе ${answer_quantity} единицы товара ${answer_name} на сумму ${summary_product} деревянных`);
