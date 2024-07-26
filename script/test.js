'use strict';

// ------------ Массивы --------------

// const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];
// console.log(autoBrands); // Выводим массив
// console.log(autoBrands[1]); // Выводим объект массива через его индекс 
// console.log(autoBrands.length); // Выводим длинну массива

// ------------ Массивы (МЕТОДЫ) --------------

// arr.push(...items) – добавляет элементы в конец,
// arr.pop() – извлекает элемент из конца,
// arr.shift() – извлекает элемент из начала,
// arr.unshift(...items) – добавляет элементы в начало.
// arr.splice(start[, deleteCount, elem1, ..., elemN]) - удаляет элемент и сдвигает жлементы за ними

// console.log(autoBrands);

// autoBrands.splice(2, 1); // начинай с индекса 2, удали 1 элемент
// console.log(autoBrands);

// ------------ Циклы --------------

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// ------------ Обход массива циклом for --------------

const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyota'];

// for (let i = 0; i < autoBrands.length; i++) {
//   console.log(autoBrands[i]);
// }

// ------------ Обход массива циклом for of --------------

// for (let brand of autoBrands) {
//   console.log(brand);
// }

// ------------ Обход массива методом forEach() --------------

// autoBrands.forEach(function (brand, i) {
//   console.log(`${brand} => ${i}`);
// })

// autoBrands.forEach(printBrand); // передадим функцию как аргумент

// function printBrand (brand, i) {
//   console.log(`${brand} => ${i}`);
// }

// autoBrands.forEach((brand, i) => { // можно записать через стрелочную функцию
//   console.log(`${brand} => ${i}`);
// })

// ------------ Объекты --------------

// const userName = 'Евген';
// const age = 34;
// const isMarried = true;

// const person = {
//   userName: 'Евген',
//   age: 34,
//   isMarried: true,
//   profession: 'Frontend'
// }

// console.log(person);
// console.log(person.userName); // выводим свойство

// let propertyName = 'profession';
// console.log(person[propertyName]); // выводим свойство, через переменную

// person.profession = 'JS developer'; // добавляем свойства объекту
// console.log(person);

// delete person.age;
// console.log(person); // удаляем свойство объекта

// ------------ Методы в Объектах --------------

// const person = { 
//   userName: 'Евген',
//   age: 34,
//   isMarried: true,
//   sayHi: function (name) { // функция, которая принадлежит объекту - это метод объетка
//     console.log(`Привет ${name}`);
//   }
// }

// person.sayHi('Евген')

// ------------ Ключевое слово this --------------

// const person = { 
//   userName: 'Евген',
//   age: 34,
//   isMarried: true,
//   sayHi: function (name) { 
//     console.log(`Привет ${name}, меня зовут ${this.userName}!`); // this ссылается на свойство этого объекта
//   },
// };

// person.sayHi('Леха')

// ------------ Обход объекта циклом for in --------------

// for (let key in person) {
//   // console.log(key);
//   console.log(key, ':', person[key]);
// }

// ------------ Конструкторы объектов --------------

// const person = { 
//   userName: 'Евген',
//   age: 34,
//   isMarried: true,
//   sayHi: function (name) { 
//     console.log(`Привет ${name}, меня зовут ${this.userName}!`); // this ссылается на свойство этого объекта
//   },
// };

// Класс - это как чертеж для всех будущих объектов person, которые будут создаваться на его основе

// class Person { // создаем класс Person
//   constructor (userName, age, isMarried) {
//     this.userName = userName;
//     this.age = age;
//     this.isMarried = isMarried
//   }
// };

// const person1 = new Person('Иван', 35, false); // в константу person1 будет записан новый объект класса Person
// const person2 = new Person('Павел', 25, true);
// console.log(person1);
// console.log(person2);

//Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях

// 1 евро = 1.2 доллара,

// 1 доллар = 73 рубля.

// const convertMoney = (money) => {
//   const moneyParse = parseInt(money);
//   const convertRub = moneyParse * 73 * 1.2;
//   return convertRub;
// }

// const userInput = prompt("Введите сумму денег:");

// const result = convertMoney(userInput);

// alert(result);

// const stringMod = (string) => {
//   const lowCase = string.toLowerCase();
//   const firstChar = lowCase[0].toUpperCase();
//   const restOfString = lowCase.slice(1);
//   return firstChar + restOfString;
// }

// const userInput = prompt('Введите строку')
// const result = stringMod(userInput);
// alert(result);



// const calculate = (sum, quantity, promo) => {
//   let discount = sum;
//   if (quantity > 10) {
//     discount *= 0.97;
//   }
//   if (sum > 30000) {
//     discount -= (sum - 30000) * 0.15;
//   }
//   if (promo === 'METHED') {
//     discount *= 0.9;
//   }
//   if (promo === "G3H2Z1" && discount > 2000) {
//     discount -= 500;
//   }

//   return discount;
// }

// const result = calculate(20000, 9, 'METHED');
// console.log(result);

// const factorial = (n) => {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// }
// const result = factorial(5);
// console.log(result);

// const getMin = (a, b) => {
//   return (a + b - Math.abs(a - b)) / 2;
// }

// const a = parseFloat(prompt("Введите первое число:"));
// const b = parseFloat(prompt("Введите второе число:"));

// const min = getMin(a, b);
// console.log(`Минимальное число: ${min}`);

// const reverseString = (str) => {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed
// }

// const input = prompt('Введите текст');
// const reversed = reverseString(input);
// alert(reversed);