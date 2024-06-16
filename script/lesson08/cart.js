'use strict';

const cart = {
  items: [], // товары
  totalPrice: 0, // общая стоимость корзины
  count: 0, // кол-во товаров

  // возвращает сумму всех товаров
  getTotalPrice() {
    return this.totalPrice
  },
  
  // добавляет товар в корзину
  add(name, quantity, price) {
    const item = {
      name,
      quantity,
      price
    }
    this.items.push(item);
    this.calculateItemPrice();
    this.increaseCount(quantity);
  },

  // увеличивает счетчик кол-ва товаров
  increaseCount(quantity) {
    this.count += quantity;
  },

  // общая сумма товаров
  calculateItemPrice() {
    this.totalPrice = this.items.reduce((sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);
  },

  // очистка корзины
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  // вывод содержимого корзины
  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общая стоимость корзины: ${this.totalPrice}`);
  }
}

cart.add('Носки', 5, 99);
cart.add('Не носки', 15, 999);
cart.add('Носки', 5, 99);
cart.add('Носки', 5, 99);
cart.add('Носки', 5, 99);
cart.add('Носки', 5, 99);
cart.print();