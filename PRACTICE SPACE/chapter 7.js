'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct number🎉';

document.querySelector('.number').textContent = 21;
document.querySelector('.score').textContent = 15;
document.querySelector('.guess').value = 5;


// THE GUESS GAME 
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const getDocument = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    getDocument('No number🎉');
  } else if (secretNumber === guess) {
    document.querySelector('.number').textContent = secretNumber;
    getDocument('you got it right🎇👍');
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'too high 📈' : 'too low 📉';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = 'yellowgreen';
    } else {
      getDocument('you lost the game😊');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  getDocument('Start guessing...');
  document.querySelector('body').style.backgroundColor = 'rgb(44, 49, 43)';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

//   THE REASON WHY I COMMENTED IT OUT WAS SO AS I DON'T HAVE TO REPEAT THE PROCESSES
//    else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'too high😊';
//       score--;
//       document.querySelector('.score').textContent = score;
//       document.querySelector('body').style.backgroundColor = 'yellowgreen';
//     } else {
//       document.querySelector('.message').textContent = 'you lost the game😊';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = 'red';
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'too low😊';
//       score--;
//       document.querySelector('.score').textContent = score;
//       document.querySelector('body').style.backgroundColor = 'yellowgreen';
//     } else {
//       document.querySelector('.message').textContent = 'you lost the game😊';
//       document.querySelector('.score').textContent = 0;
//       document.querySelector('body').style.backgroundColor = 'red';
//     }
//   }


// THE MODAL PROJECT
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");
console.log(btnOpenModal);

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

// btnCloseModal.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });
// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// DO NOT REPEAT YOURSELF PRINCIPLE
const closeAll = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeAll);
overlay.addEventListener("click", closeAll);

document.addEventListener("keydown", function (g) {
  console.log(g.key);
  if (g.key === "Escape" && !modal.classList.contains("hidden")) {
    closeAll();
  }
});

*/

// THE PIG GAME
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const scoreBoard1 = document.getElementById('score--0');
const scoreBoard2 = document.getElementById('score--1');
const scoreBoardDice = document.querySelector('.dice');
const rollingDice = document.querySelector('.btn--roll');
const currentPlayer1 = document.getElementById('current--0');
const currentPlayer2 = document.getElementById('current--1');
const btnHold = document.querySelector('.btn--hold');
const reset = document.querySelector('.btn--new');

scoreBoard1.textContent = 0;
scoreBoard2.textContent = 0;
scoreBoardDice.classList.add('hidden');

const score = [0, 0];
let currentPlayerScore = 0;
let activePlayer = 0;
let playering = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentPlayerScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

rollingDice.addEventListener('click', function () {
  if (playering) {
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    scoreBoardDice.classList.remove('hidden');
    scoreBoardDice.src = `dice-${randomNumber}.png`;

    if (randomNumber !== 1) {
      currentPlayerScore += randomNumber;
      // currentPlayer1.textContent = currentPlayerScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentPlayerScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playering) {
    score[activePlayer] += currentPlayerScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 20) {
      playering = false;
      scoreBoardDice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

reset.addEventListener('click', function () {
  playering = true;
  activePlayer = 0;
  currentPlayerScore = 0;
  score[0] = currentPlayerScore;
  score[1] = currentPlayerScore;
  console.log(currentPlayerScore);

  scoreBoard1.textContent = score[0];
  scoreBoard2.textContent = score[1];
  currentPlayer1.textContent = 0;
  currentPlayer2.textContent = 0;
  console.log(currentPlayerScore);

  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
});

//    BIRTHDAY WISHES

// const julyBorn = {
//   celebrant1: 'LOML',
//   celebrant2: 'LOML 4L',
//   date(day) {
//     if (day === 6) {
//       console.log(
//         `Happy birthday in advance ${this.celebrant1}🥱💖....July${day}`
//       );
//     } else if (day === 7) {
//       console.log(
//         `Happy birthday in advance ${this.celebrant2}🥱💖....July${day}`
//       );
//     }
//   },
// };
// julyBorn.date(6);
// julyBorn.date(7);
