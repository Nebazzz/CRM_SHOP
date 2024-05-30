'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];
const filter = (allStudents, failedStudents) => {
  const passStudents = [];
  for (let i = 0; i < allStudents.length; i ++) {
    if (!failedStudents.includes(allStudents[i])) {
      passStudents.push(allStudents[i]);
    }
  }
  return passStudents;
}

const result = filter(allStudents, failedStudents);
console.log(`Экзамен сдали: ${result}`);