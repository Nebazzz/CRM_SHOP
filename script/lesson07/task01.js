'use srtict';

const generateRandomArray = (length) => {
  let randomArray = [];
  for (let i=0; i < length; i ++) {
    randomArray.push(Math.floor(Math.random() * 100 +1))
  }
  return randomArray;
}

const newArrayLength = prompt('Введите количество элементов');
const newArray = generateRandomArray(newArrayLength);
console.log(newArray);