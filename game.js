'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = (lang) => {
    if (lang === 'ENG' || lang === 'EN') {
      return FIGURES_ENG;
    } else {
      return FIGURES_RUS;
    }
  };

  const game = (language = '') => {
    const arrFigure = getFigure(language);

    const result = {
      player: 0,
      computer: 0,
    };

    const checkFigure = (figure, index = 0) => {
      figure = figure.toLowerCase();
      if (index >= arrFigure.length) {
        return -1;
      }
      if (arrFigure[index].startsWith(figure)) {
        return index;
      }
      return checkFigure(figure, index + 1);
    };

    const playGame = () => {
      const promptMessage = (language === 'ENG' || language === 'EN') ?
      'Rock, scissors, paper?' :
      'Камень, ножницы, бумага?';
      const invalidInputAlert = (language === 'ENG' || language === 'EN') ?
      'Invalid input! Please choose rock, scissors, or paper.' :
      'Неверный ввод. Пожалуйста, выберите камень, ножницы или бумага';
      const playerInput = prompt(promptMessage, '').toLowerCase();
      const playerFigureIndex = checkFigure(playerInput);

      if (playerFigureIndex === -1) {
        alert(invalidInputAlert);
        if (confirm(language === 'ENG' || language === 'EN' ? 'Try again?' : 'Попробовать снова?')) {
          playGame();
        } else {
          alert((language === 'ENG' || language === 'EN' ?
            `Game over. Final score - Computer: ${result.computer}, You: ${result.player}` :
            `Игра завершена. Итоговые очки - Компьютер: ${result.computer}, Вы: ${result.player}`));
        }
        return;
      }

      const computerFigureIndex = getRandomIntInclusive(0, 2);
      const playerFigure = arrFigure[playerFigureIndex];
      const computerFigure = arrFigure[computerFigureIndex];

      if (
        (playerFigure === arrFigure[0] && computerFigure === arrFigure[1]) ||
        (playerFigure === arrFigure[1] && computerFigure === arrFigure[2]) ||
        (playerFigure === arrFigure[2] && computerFigure === arrFigure[0])
      ) {
        result.player++;
        alert((language === 'ENG' || language === 'EN' ?
          `Computer chose ${computerFigure}, you chose ${playerFigure}. You win!` :
          `Компьютер выбрал ${computerFigure}, вы выбрали ${playerFigure}. Вы победили!`));
      } else if (
        (computerFigure === arrFigure[0] && playerFigure === arrFigure[1]) ||
        (computerFigure === arrFigure[1] && playerFigure === arrFigure[2]) ||
        (computerFigure === arrFigure[2] && playerFigure === arrFigure[0])
      ) {
        result.computer++;
        alert((language === 'ENG' || language === 'EN' ?
          `Computer chose ${computerFigure}, you chose ${playerFigure}. Computer wins!` :
          `Компьютер выбрал ${computerFigure}, вы выбрали ${playerFigure}. Компьютер победил!`));
      } else {
        alert((language === 'ENG' || language === 'EN' ? `Computer chose ${computerFigure}, you chose ${playerFigure}. It's a draw!` :
          `Компьютер выбрал ${computerFigure}, вы выбрали ${playerFigure}. Ничья!`));
      }

      if (confirm(language === 'ENG' || language === 'EN' ?
        'Play again?' :
        'Сыграть еще раз?')) {

        playGame();

      } else {
        alert((language === 'ENG' || language === 'EN' ?
          `Game over. Final score - Computer: ${result.computer}, You: ${result.player}` :
          `Игра завершена. Итоговые очки - Компьютер: ${result.computer}, Вы: ${result.player}`));
      }
    };

    playGame();
  };

  const startGame = prompt('Выберите язык / choose the language: ENG / RU', '').toLowerCase();
  if (startGame.startsWith('en')) {
    game('ENG');
  } else {
    game();
  }
  // window.RPS = game;

})();
