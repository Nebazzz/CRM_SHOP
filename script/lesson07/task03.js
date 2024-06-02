'use srtict';

const generateRandomArray = (length, n, m, str) => {
  let randomArray = [];
  let min = Math.min(n, m);
  let max = Math.max(n, m);
  
  if (str === 'even') {
    for (let i = 0; i < length; i ++) {
      randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
      if (randomArray[i] % 2 !== 0) {
        randomArray.splice(i, 1);
        i--;
      }
    }
  } else if (str === 'odd') {
    for (let i = 0; i < length; i ++) {
      randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
      if (randomArray[i] % 2 === 0) {
        randomArray.splice(i, 1);
        i--;
      }
    }
  }
  return randomArray;
}

const newArrayLength = prompt('Введите количество элементов');
const newArrayStart = prompt('Введите начало диапазона');
const newArrayEnd = prompt('Введите конец диапазона');
const str = prompt('Выберете "even", если четное число или "odd", если не четное');

const newArray = generateRandomArray(newArrayLength, newArrayStart, newArrayEnd, str);
console.log(newArray);