'use strict';

let guessNumber = Math.floor(Math.random() * 100 +1);
let userNumber;

while (true) {
  userNumber = prompt('Введите число от 1 до 100');
    if (userNumber === null) {
      alert('Game over');
      break;
  } else if (isNaN(userNumber)) {
      alert('Введи число!');
  } else {
    userNumber = parseInt(userNumber);
    if (userNumber > guessNumber) {
      alert('Меньше!');
    } else if (userNumber < guessNumber) {
      alert('Больше!');
    } else {
      alert('Правильно!');
      break;
    }
  }
}