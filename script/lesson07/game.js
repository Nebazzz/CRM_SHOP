'use strict';

const guessNumber = Math.floor(Math.random() * 100 + 1);

const guessNumb = () => {
  let userNumber = prompt('Введите число от 1 до 100');

  if (userNumber === null) {
    alert('GAME OVER!');
    return;
  } else if (userNumber.trim() === '') {
    alert('GAME OVER!');
    return;
  } else if (isNaN(userNumber)) {
    alert('Введи число!');
    guessNumb();
  } else {
    userNumber = parseInt(userNumber);
    if (userNumber > guessNumber) {
      alert('Меньше!');
      guessNumb();
    } else if (userNumber < guessNumber) {
      alert('Больше!');
      guessNumb();
    } else {
      alert('Правильно!');
    }
  }
};

guessNumb();