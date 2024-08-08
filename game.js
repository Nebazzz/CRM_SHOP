'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };

    const checkFigure = (figure, index = 0) => {
      figure = figure.toLowerCase();
      if (index >= FIGURES_RUS.length) {
        return -1;
      }
      if (FIGURES_RUS[index].startsWith(figure)) {
        return index;
      }
      return checkFigure(figure, index + 1);
    };

    const playGame = () => {
      const playerInput = prompt('Камень, ножницы, бумага?', '').toLowerCase();
      const playerFigureIndex = checkFigure(playerInput);

      if (playerFigureIndex === -1) {
        alert('Неверный ввод. Пожалуйста, выберите камень, ножницы или бумага.');
        if (confirm('Попробовать снова?')) {
          playGame();
        } else {
          alert(`Игра завершена. Итоговые очки - Компьютер: ${result.computer}, Вы: ${result.player}`);
        }
        return;
      }

      const computerFigureIndex = getRandomIntInclusive(0, 2);

      const playerFigure = FIGURES_RUS[playerFigureIndex];
      const computerFigure = FIGURES_RUS[computerFigureIndex];

      if (
        (playerFigure === 'камень' && computerFigure === 'ножницы') ||
        (playerFigure === 'ножницы' && computerFigure === 'бумага') ||
        (playerFigure === 'бумага' && computerFigure === 'камень')
      ) {
        result.player++;
        alert(`Компьютер выбрал ${computerFigure}, вы выбрали ${playerFigure}. Вы победили!`);
      } else if (
        (computerFigure === 'камень' && playerFigure === 'ножницы') ||
        (computerFigure === 'ножницы' && playerFigure === 'бумага') ||
        (computerFigure === 'бумага' && playerFigure === 'камень')
      ) {
        result.computer++;
        alert(`Компьютер выбрал ${computerFigure}, вы выбрали ${playerFigure}. Компьютер победил!`);
      } else {
        alert(`Компьютер выбрал ${computerFigure}, вы выбрали ${playerFigure}. Ничья!`);
      }

      if (confirm('Сыграть еще раз?')) {
        playGame();
      } else {
        alert(`Игра завершена. Итоговые очки - Компьютер: ${result.computer}, Вы: ${result.player}`);
      }
    };

    playGame();
  };

  window.RPS = game;
})();
