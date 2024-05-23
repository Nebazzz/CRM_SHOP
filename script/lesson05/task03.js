'use strict';

const str = prompt('Введите текст');
const strokeReturn = (str) => {
  let newstr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newstr = newstr + str[i];
  }
  return newstr;
}

alert(strokeReturn(str));