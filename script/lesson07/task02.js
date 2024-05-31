'use srtict';

const generateRandomArray = (length, n, m) => {
  let randomArray = [];
  let min = Math.min(n, m);
  let max = Math.max(n, m);
  for (let i=0; i < length; i ++) {
    randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return randomArray;
}

const newArrayLength = prompt('Введите количество элементов');
const newArrayStart = prompt('Введите начало диапазона');
const newArrayEnd = prompt('Введите конец диапазона');

const newArray = generateRandomArray(newArrayLength, newArrayStart, newArrayEnd);
console.log(newArray);