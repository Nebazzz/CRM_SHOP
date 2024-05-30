'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
const addPrefix = (names, prefix) => {
  const prefixNames = [];
  for (let i = 0; i < names.length; i ++) {
    prefixNames.push(prefix + ' ' + names[i]);
  }
  return prefixNames;
}

const prefixNames = addPrefix(names, 'Mr');
console.log(prefixNames);
