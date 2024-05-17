'use strict';

// Первая задача:

// Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях

// 1 евро = 1.2 доллара,

// 1 доллар = 73 рубля.

const getRuble = (money) => {
  let resultMoney = money;
  resultMoney *= 73;
  resultMoney *= 1.2;
  return resultMoney;
}

console.log(getRuble(1000));