'use strict';
// Вторая задача:

// Напишите функцию, которая принимает строку и возвращает модифицированную строку
// Строка начинается с большой буквы, остальные буквы маленькие

// Пример:  "привет Мир" => "Привет мир"
const getStroke = (stroke) => {
  let resultStroke = stroke;
  const firstLetter = resultStroke.charAt(0);
  const upperLetter = firstLetter.toUpperCase();
  const otherLetter = resultStroke.slice(1);
  resultStroke = upperLetter + otherLetter;
  return resultStroke;
};

console.log(getStroke('привет мир'));
