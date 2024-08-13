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

  const getNoun = (number, one, two, five) => {
    let n = Math.abs(number) % 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  };

  const playerTurn = () => {
    const playerInput = prompt(`Шарики игрока: ${playerMarbles}. Введите, пожалуйста, количество шариков от 1 до ${playerMarbles}`, '');
    const playerGuess = parseInt(playerInput);

    if (isNaN(playerGuess) ||
      playerGuess < 1 ||
      playerGuess > playerMarbles
    ) {
      alert(`Неверный ввод! Введите количество шариков заново!`);
      return playerTurn();
    }

    const computerGuess = getRandomIntInclusive(0, 1);
    const isPlayerGuessEven = playerGuess % 2 === 0;

    alert(`Компьютер ставит на ${computerGuess === 0 ? 'чётное' : 'нечётное'} количество`);

    if ((computerGuess === 0 && isPlayerGuessEven) ||
      (computerGuess === 1 && !isPlayerGuessEven)) {
      computerMarbles += playerGuess;
      playerMarbles -= playerGuess;
      alert(`Компьютер угадал! У вас: ${playerMarbles} ${getNoun(playerMarbles, 'шарик', 'шарика', 'шариков')}, у компьютера: ${computerMarbles} ${getNoun(computerMarbles, 'шарик', 'шарика', 'шариков')}`);
    } else {
      playerMarbles += playerGuess;
      computerMarbles -= playerGuess;
      alert(`Компьютер не угадал! У вас: ${playerMarbles} ${getNoun(playerMarbles, 'шарик', 'шарика', 'шариков')}, у компьютера: ${computerMarbles} ${getNoun(computerMarbles, 'шарик', 'шарика', 'шариков')}`);
    }

    if (playerMarbles <= 0) {
      alert(`Вы проиграли! У вас закончились шарики!`);
      return;
    }

    if (computerMarbles <= 0) {
      alert(`Вы выиграли! У компьютера закончились шарики!`);
      return;
    }

    computerTurn();
  };

  const computerTurn = () => {
    const computerGuess = getRandomIntInclusive(1, computerMarbles);
    const isComputerGuessEven = computerGuess % 2 === 0;

    const playerGuess = confirm(`Компьютер выбрал количество шариков. Это количество чётное?`);

    if ((playerGuess && isComputerGuessEven) ||
      (!playerGuess && !isComputerGuessEven)) {
      playerMarbles += computerGuess;
      computerMarbles -= computerGuess;
      alert(`Вы угадали! У вас: ${playerMarbles} ${getNoun(playerMarbles, 'шарик', 'шарика', 'шариков')}, у компьютера: ${computerMarbles} ${getNoun(computerMarbles, 'шарик', 'шарика', 'шариков')}`);
    } else {
      playerMarbles -= computerGuess;
      computerMarbles += computerGuess;
      alert(`Вы не угадали! У вас: ${playerMarbles} ${getNoun(playerMarbles, 'шарик', 'шарика', 'шариков')}, у компьютера : ${computerMarbles} ${getNoun(computerMarbles, 'шарик', 'шарика', 'шариков')}`);
    }

    if (playerMarbles <= 0) {
      alert(`Вы проиграли! У вас закончились шарики!`);
      return;
    }

    if (computerMarbles <= 0) {
      alert(`Вы выиграли! У компьютера закончились шарики!`);
      return;
    }

    playerTurn();
  };

  const playGame = () => {
    playerTurn();
  };

  const startGame = () => {
    alert(`Игра "Марблы". У вас и компьютера по ${startMarbles} шариков.`);
    playerMarbles = startMarbles;
    computerMarbles = startMarbles;

    playGame();

    const playAgain = confirm('Сыграть еще раз?');
    if (playAgain) {
      startGame();
    } else {
      alert('Хорошо сыграли!');
    }
  };

  startGame();
})();
