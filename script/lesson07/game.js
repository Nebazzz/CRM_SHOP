'use strict';

let guessNumber = Math.floor(Math.random() * 100 +1);

for (let i = 0; i < Infinity; i++) {
  let userNumber = prompt('Введите число от 1 до 100');
    if (userNumber === null) {
    console.log('Game over');
    break;
  } else if (isNaN(userNumber)) {
    console.log('Введи число!');
  } else {
    userNumber = parseInt(userNumber);
    if (userNumber > guessNumber) {
      console.log('Меньше!');
    } else if (userNumber < guessNumber) {
      console.log('Больше!');
    } else {
      console.log('Правильно!');
      break;
    }
  }
}