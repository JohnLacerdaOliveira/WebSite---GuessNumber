'use strict';

//Initialise variables...
let correctNumber = Math.trunc(Math.random() * 20 + 1);
let tempHighScore = 20;
let absHighScore = 0;

//AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  correctNumber = Math.trunc(Math.random() * 20 + 1);
  tempHighScore = 20;
  document.querySelector('.score').textContent = tempHighScore;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
});

//CHECK BUTTON
document.querySelector('.check').addEventListener('click', function () {
  let guessNumber = Number(document.querySelector('.guess').value);

  //Correct guess...
  if (correctNumber === guessNumber) {
    tempHighScore > absHighScore ? (absHighScore = tempHighScore) : '';
    document.querySelector('.highscore').textContent = absHighScore;
    document.querySelector('.message').textContent = '🎉 correct Number !!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = correctNumber;
    document.querySelector('.number').style.width = '30rem';
    //Wrong guess...
  } else {
    tempHighScore -= 1;
    // Is guessNumber Higher / Empty / Lower...
    if (guessNumber > correctNumber) {
      document.querySelector('.message').textContent = '📈  Too high !';
    } else if (guessNumber == 0) {
      document.querySelector('.message').textContent = '⛔️  No number !';
    } else if (guessNumber < correctNumber) {
      document.querySelector('.message').textContent = '📉  Too low !';
    }
  }

  //Ran out of guesses...
  if (tempHighScore < 1) {
    document.querySelector('.message').textContent = '💥 You ran out of tries!';
    document.querySelector('body').style.backgroundColor = 'rgb(196, 0, 0)';
    tempHighScore = 0;
  }

  document.querySelector('.score').textContent = tempHighScore;

  console.log(correctNumber);
  console.log(guessNumber);
});
