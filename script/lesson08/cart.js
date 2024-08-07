'use strict';

const cart = {
  items: [], // товары
  count: 0,
  discount: 0, // кол-во товаров

  // возвращает сумму всех товаров
  get totalPrice() {
    return this.calculateItemPrice();
  },

  // добавляет товар в корзину
  add(name, quantity, price) {
    const item = {
      name,
      quantity,
      price,
    };
    this.items.push(item);
    this.increaseCount(quantity);
  },

  // увеличивает счетчик кол-ва товаров
  increaseCount(quantity) {
    this.count += quantity;
  },

  // возвращает общую сумму товаров
  calculateItemPrice() {
    const total = this.items.reduce((sum, item) =>
      sum + (item.price * item.quantity), 0);
    return total * (1 - this.discount / 100);
  },

  // очистка корзины
  clear() {
    this.items = [];
    this.count = 0;
    this.discount = 0;
  },

  // вывод содержимого корзины
  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость корзины: ${this.totalPrice}`);
  },

  // добавляем сеттер для расчета скидки
  set setDiscount(promo) {
    if (promo === 'METHED') {
      this.discount = 15;
    } else if (promo === 'NEWYEAR') {
      this.discount = 21;
    } else {
      this.discount = 0;
    }
  },
};

cart.add('Носки', 10, 199);
cart.add('Футболки', 10, 999);
cart.setDiscount = 'METHED';
cart.print();
