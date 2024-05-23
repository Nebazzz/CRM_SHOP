'use strict';

// Третья задача:

// Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
// В качестве аргументов функция принимает 3 параметра:
// Общая сумма корзины
// Количество товаров в корзине
// Промокод
// Правила и порядок (порядок важен!) начисления скидок:
// Если товаров больше 10, то ко всей сумме применяется скидка 3% ко всей сумме;
// При сумме, превышающей 30 000, применяется скидка 15% к сумме превышения
// Если промокод равен "METHED", то скидка 10%
// Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р

// Порядок применения скидок должен соблюдаться


const calculate = (total, products, promo) => {
  let sumCart = total;
  let quantityProduct = products;
  let amountDiscount = promo; {
    if (quantityProduct > 10) {
      let discontThree = sumCart * 3 / 100;
      sumCart -= discontThree;
      console.log('Больше 10 товаров', sumCart)
    }
    if (sumCart > 30000) {
      let discontFifteen = (sumCart - 30000) * 15 / 100;
      sumCart -= discontFifteen;
      console.log('Сумма больше 30к', sumCart);
    }
    if (amountDiscount === 'METHED') {
      let discontTen = sumCart * 10 / 100;
      sumCart -= discontTen;
      console.log('промо METHED', sumCart);
    }
    if (amountDiscount === 'G3H2Z1' && sumCart > 2000) {
      sumCart -= 500;
      console.log('промо G3H2Z1', sumCart);
    }
  }
  return sumCart;
}

console.log(calculate(50000, 20, 'G3H2Z1'));