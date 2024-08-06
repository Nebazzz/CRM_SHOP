'use strict';

// ================ GAME ==================

// const guessNumber = Math.floor(Math.random() * 100 + 1);

// const guessNumb = () => {
//   let userNumber = prompt('Введите число от 1 до 100');

//   if (userNumber === null) {
//     alert('GAME OVER!');
//     return;
//   } else if (userNumber.trim() === '') {
//     alert('GAME OVER!');
//     return;
//   } else if (isNaN(userNumber)) {
//     alert('Введи число!');
//     guessNumb();
//   } else {
//     userNumber = parseInt(userNumber);
//     if (userNumber > guessNumber) {
//       alert('Меньше!');
//       guessNumb();
//     } else if (userNumber < guessNumber) {
//       alert('Больше!');
//       guessNumb();
//     } else {
//       alert('Правильно!');
//     }
//   }
// };

// guessNumb();

// ================ Lesson 11 ==================

// const getNumber = (arr) => {
//   const randomNumber = Math.floor(Math.random() * 11);
//   arr.push(randomNumber);
//   const summary = arr.reduce((sum, current) => sum + current, 0);
//   if (summary < 50) {
//     return getNumber(arr);
//   } else {
//     return arr;
//   }
// };

// console.log(getNumber([]));

const rectangle = {
  width: 5,
  height: 5,


set width(value) {
    if (typeof value === 'number') {
      this.width = value;
    } else {
      console.log(`Ошибка - ${value} не число!`);
    }
  },

  set height(value) {
    if (typeof value === 'number') {
      this.height = value;
    } else {
      console.log(`Ошибка - ${value} не число!`);
    }
  },

  get perimeter() {
    const perimeter = 2 * (this.width + this.height);
    return perimeter + 'см.';
  },

  get area() {
    const area = this.width * this.height;
    return area + 'см.';
  },
};

rectangle.width = 2;
rectangle.height = 3;

console.log(rectangle.perimeter);
console.log(rectangle.area);