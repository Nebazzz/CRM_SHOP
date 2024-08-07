'use strict';

// ================ Lesson 11.2 ==================

const getNumber = (arr) => {
  const randomNumber = Math.floor(Math.random() * 11);
  arr.push(randomNumber);
  const summary = arr.reduce((sum, current) => sum + current, 0);
  if (summary < 50) {
    return getNumber(arr);
  } else {
    return arr;
  }
};

console.log(getNumber([]));