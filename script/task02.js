'use strict';
// Вторая задача:

// Напишите функцию, которая принимает строку и возвращает модифицированную строку
// Строка начинается с большой буквы, остальные буквы маленькие

// Пример:  "привет Мир" => "Привет мир"
const getStroke = (stroke) => {
  let resultStroke = stroke;
  let firstLetter = resultStroke.charAt(0);
  let upperLetter = firstLetter.toUpperCase();
  let otherLetter = resultStroke.slice(1);
  resultStroke = upperLetter + otherLetter;
  return resultStroke;
}

console.log(getStroke('привет мир'));