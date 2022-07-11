'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 8;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// const secretNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = secretNumber;

// let score = 20;

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(typeof guess);

//   // When there is no input
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number⛔';

//     // When player wins
//   } else if (guess === secretNumber) {
//     document.querySelector(
//       '.message'
//     ).textContent = `Nice guessing the correct number (${secretNumber}) 👯‍♂️🎶`;
//     document.querySelector('body').style.backgroundColor = '#60b347';

//     document.querySelector('.number').style.width = '30rem';

//     // When guess is too high
//   } else if (guess > secretNumber && guess <= 20) {
//     if (score <= 1) {
//       document.querySelector('.message').textContent = `You lost the game!!`;
//       document.querySelector('.score').textContent = 0;
//     } else {
//       document.querySelector('.message').textContent = `Number too high📈`;
//       score--;
//       document.querySelector('.score').textContent = score;
//     }
//     // When guess is too low
//   } else if (guess < secretNumber && guess >= 1) {
//     if (score <= 1) {
//       document.querySelector('.message').textContent = `You lost the game!!`;
//       document.querySelector('.score').textContent = 0;
//     } else {
//       document.querySelector(
//         '.message'
//       ).textContent = `Number you guessed is too low📉`;
//       score--;
//       document.querySelector('.score').textContent = score;
//     }
//   } else if (guess > 20 || guess < 1) {
//     document.querySelector('.message').textContent = `Choose between .......`;
//   }
// });

let secretNumber = Math.trunc(Math.random() * 20 + 1);
// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highScore = 0;
let play = true;
const popupMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// const guessValue = function (guess) {
//   document.querySelector('.guess').value = guess;
// };
const scoreNumber = function (score) {
  document.querySelector('.score').textContent = score;
};
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing... ';
  document.querySelector('.score').textContent = score;
  //   document.querySelector('.highscore').textContent = 0;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  play = true;
});

document.querySelector('.check').addEventListener('click', function () {
  if (play) {
    //   console.log(document.querySelector('.guess').value);
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    // When there is no input
    if (!guess) {
      popupMessage('No number⛔');

      // When player wins
    } else if (guess === secretNumber) {
      popupMessage(`Nice guessing the correct number (${secretNumber}) 👯‍♂️🎶`);
      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      // document.getElementById('.check').disabled = true;
      play = false;

      if (highScore === 0) {
        highScore = score;
        document.querySelector('.highscore').textContent = score;
      } else {
        if (highScore >= score) {
          document.querySelector('.highscore').textContent = highScore;
        } else {
          document.querySelector('.highscore').textContent = score;
        }
      }

      // When gues = wrong
    } else if (guess !== secretNumber && guess >= 1 && guess <= 20) {
      if (score <= 1) {
        popupMessage(`You lost the game!!`);
        document.querySelector('.score').textContent = 0;
      } else {
        if (guess > secretNumber && guess >= 1 && guess <= 20) {
          popupMessage(`Number too high📈`);
        } else if (guess < secretNumber && guess >= 1 && guess <= 20) {
          popupMessage(`Number you guessed is too low📉`);
        }
        score--;
        document.querySelector('.score').textContent = score;
      }
    } else if (guess > 20 || guess < 1) {
      popupMessage(`Choose between 1 and 20.......`);
    }
  }
});

// let secretNumber = Math.trunc(Math.random() * 20 + 1);
// // document.querySelector('.number').textContent = secretNumber;

// let score = 20;
// let highScore = 0;
// // document.querySelector('.guess').value = '';
// const popupMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };
// // const guessValue = function (guess) {
// //   document.querySelector('.guess').value = guess;
// // };
// const scoreNumber = function (score) {
//   document.querySelector('.score').textContent = score;
// };
// document.querySelector('.again').addEventListener('click', function () {
//   secretNumber = Math.trunc(Math.random() * 20 + 1);
//   document.querySelector('.number').textContent = '?';
//   score = 20;
//   document.querySelector('.guess').value = '';
//   document.querySelector('.message').textContent = 'Start guessing... ';
//   document.querySelector('.score').textContent = score;
//   //   document.querySelector('.highscore').textContent = 0;
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

// document.querySelector('.check').addEventListener('click', function () {
//   //   console.log(document.querySelector('.guess').value);
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(typeof guess);
//   if (guess === secretNumber) {
//     continue
//   } else {
//     // When there is no input
//     if (!guess) {
//       popupMessage('No number⛔');

//       // When player wins
//     } else if (guess === secretNumber) {
//       popupMessage(`Nice guessing the correct number (${secretNumber}) 👯‍♂️🎶`);
//       document.querySelector('body').style.backgroundColor = '#60b347';

//       document.querySelector('.number').style.width = '30rem';
//       document.querySelector('.number').textContent = secretNumber;
//       document.getElementById('.check').disabled = true;

//       if (highScore === 0) {
//         highScore = score;
//         document.querySelector('.highscore').textContent = score;
//       } else {
//         if (highScore >= score) {
//           document.querySelector('.highscore').textContent = highScore;
//         } else {
//           document.querySelector('.highscore').textContent = score;
//         }
//       }

//       // When gues = wrong
//     } else if (guess !== secretNumber && guess >= 1 && guess <= 20) {
//       if (score <= 1) {
//         popupMessage(`You lost the game!!`);
//         document.querySelector('.score').textContent = 0;
//       } else {
//         if (guess > secretNumber && guess >= 1 && guess <= 20) {
//           popupMessage(`Number too high📈`);
//         } else if (guess < secretNumber && guess >= 1 && guess <= 20) {
//           popupMessage(`Number you guessed is too low📉`);
//         }
//         score--;
//         document.querySelector('.score').textContent = score;
//       }
//     } else if (guess > 20 || guess < 1) {
//       popupMessage(`Choose between 1 and 20.......`);
//     }}

// });
