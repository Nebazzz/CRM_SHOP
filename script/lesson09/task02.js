'use strict';

function countUniqueIp(arrIp) {
  const uniqueIp = new Set(arrIp);
  return uniqueIp.size;
}

console.log(countUniqueIp(listIPv4));