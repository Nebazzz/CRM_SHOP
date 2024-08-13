'use strict';

(() => {
  const startMarbles = 5;
  let playerMarbles = startMarbles;
  let computerMarbles = startMarbles;

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const playGame = () => {
    const playerInput = prompt(`Шарики игрока: ${playerMarbles}. Введите, пожалуйста, количество шариков от 1 до ${playerMarbles}`, '');
    const playerGuess = parseInt(playerInput);

    if (isNaN(playerGuess) ||
      playerGuess < 1 ||
      playerGuess > playerMarbles
    ) {
      alert(`Неверный ввод! Введите количество шариков заново!`);
      return true; // Продолжаем игру при неверном вводе
    }

    const computerGuess = getRandomIntInclusive(0, 1);
    const isPlayerGuessEven = playerGuess % 2 === 0;

    alert(`Компьютер ставит на ${computerGuess === 0 ? 'чётное' : 'нечётное'} количество`);

    if ((computerGuess === 0 && isPlayerGuessEven) ||
      (computerGuess === 1 && !isPlayerGuessEven)) {
      computerMarbles += playerGuess;
      playerMarbles -= playerGuess;
      alert(`Компьютер угадал! У вас осталось: ${playerMarbles} шариков, у компьютера: ${computerMarbles}`);
    } else {
      playerMarbles += playerGuess;
      computerMarbles -= playerGuess;
      alert(`Компьютер не угадал! У вас: ${playerMarbles} шариков, у компьютера осталось: ${computerMarbles}`);
    }

    if (playerMarbles <= 0) {
      alert(`Вы проиграли! У вас закончились шарики!`);
      return false;
    }

    if (computerMarbles <= 0) {
      alert(`Вы выиграли! У компьютера закончились шарики!`);
      return false;
    }

    return true;
  };

  const startGame = () => {
    alert(`Игра "Марблы". У вас и компьютера по ${startMarbles} шариков.`);

    let continueGame = true;

    while (continueGame) {
      continueGame = playGame();
    }

    const playAgain = confirm('Сыграть еще раз?');
    if (playAgain) {
      startGame();
    } else {
      alert('Хорошо сыграли!');
    }
  };

  startGame();
})();
