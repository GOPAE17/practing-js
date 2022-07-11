// Guess a number game

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing... ';
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number⛔';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(
      '.message'
    ).textContent = `Nice guessing the correct number (${secretNumber}) 👯‍♂️🎶`;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

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

    // When gues is wrong
  } else if (guess !== secretNumber && guess >= 1 && guess <= 20) {
    if (score <= 1) {
      document.querySelector('.message').textContent = `You lost the game!!`;
      document.querySelector('.score').textContent = 0;
    } else {
      if (guess > secretNumber && guess >= 1 && guess <= 20) {
        document.querySelector('.message').textContent = `Number too high📈`;
      } else if (guess < secretNumber && guess >= 1 && guess <= 20) {
        document.querySelector(
          '.message'
        ).textContent = `Number you guessed is too low📉`;
        score--;
        document.querySelector('.score').textContent = score;
      }
    }
  } else if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent = `Choose between .......`;
  }
});
