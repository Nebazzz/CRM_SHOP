'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return this.totalPrice;
  },

  calculateItemPrice() {
    this.totalPrice = this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  },

  increaseCount(quantity) {
    this.count += quantity;
  },

  add(name, price, quantity = 1) {
    const newItem = {
      name,
      price,
      quantity
    };
    this.items.push(newItem);
    this.increaseCount(quantity);
    this.calculateItemPrice()
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость корзины: ${this.totalPrice}`);
  }
}

cart.add('Кросссовки', 2999, 5);
cart.add('Бейсболка', 999, 10);
cart.add('Футболка', 1599, 7);
cart.add('Часы', 20000, 1);
cart.add('Пакет', 15, 1);

cart.print();