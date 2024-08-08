'use strict';

// ================ Lesson 11.3 ==================


const rectangle = {
  width: 5,
  height: 5,


  set rectangleWidth(value) {
    if (typeof value === 'number') {
      this.width = value;
    } else {
      console.log(`Ошибка - ${value} не число!`);
    }
  },

  set rectangleHeight(value) {
    if (typeof value === 'number') {
      this.height = value;
    } else {
      console.log(`Ошибка - ${value} не число!`);
    }
  },

  get perimeter() {
    const perimeter = 2 * (this.width + this.height);
    return perimeter + ' см.';
  },

  get area() {
    const area = this.width * this.height;
    return area + ' см.';
  },
};

rectangle.width = 2;
rectangle.height = 3;

console.log(rectangle.perimeter);
console.log(rectangle.area);
