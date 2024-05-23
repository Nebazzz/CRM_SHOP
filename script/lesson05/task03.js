'use strict';

const stroke = prompt('Введите текст');
const strokeReturn = (stroke) => {
  let newStroke = '';
  for (let i = stroke.length - 1; i >= 0; i--) {
    newStroke = newStroke + stroke[i];
  }
  return newStroke;
}

alert(strokeReturn(stroke));