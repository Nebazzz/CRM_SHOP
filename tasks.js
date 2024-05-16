'use strict';

// Вторая задача:

const rain = Math.round(Math.random());
if (rain === 1) {
  alert('Пошёл дождь. Возьмите зонт!')
}
if (rain === 0) {
  alert('Дождя нет!')
}
console.log(rain);

// Третья задача:

const pointsMath = +prompt('Введите кол-во баллов по математике:');
const pointsRus = +prompt('Введите кол-во баллов по русскому языку:');
const pointsInf = +prompt('Введите кол-во баллов по информатике:');
const pointsSummery = pointsMath + pointsRus + pointsInf;
if (pointsSummery >= 265) {
  alert('Поздравляю, вы поступили на бюджет!');
} else {
  alert('Попробуйте пересдать ЕГЭ');
}

// Четвёртая задача:

const moneyAsk = +prompt('Пожалуйста, введите сумму (минимальная сумма 100 руб)');
if (moneyAsk >= 100) {
  console.log('Операция выполняется');
} else {
  console.log('Запрошенная сумма не может быть выдана, т.к. меньше 100 руб.');
}