'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // const getFigure = lang => {

  // };

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const playGame = () => {
      const choiceWeapon = prompt('Камень, ножницы, бумага?', '').toLocaleLowerCase();
    }

    return function start() {

    };
  };

  window.RPS = game;
})();