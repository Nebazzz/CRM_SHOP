'use strict';

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  const averageValue = sum / arr.length;
  return Math.floor(averageValue)
}

const averageCash = getAverageValue(allCashbox);
console.log(`Среднеарифметическое значение: ${averageCash}`);