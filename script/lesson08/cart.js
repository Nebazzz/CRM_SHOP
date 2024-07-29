'use strict';

const cart = {
  items: [], // товары
  count: 0, // кол-во товаров

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
    return this.items.reduce((sum, item) =>
      sum + (item.price * item.quantity), 0);
  },

  // очистка корзины
  clear() {
    this.items = [];
    this.count = 0;
  },

  // вывод содержимого корзины
  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость корзины: ${this.totalPrice}`);
  },
};

cart.add('Носки', 10, 199);
cart.add('Футболки', 10, 999);
cart.print();
