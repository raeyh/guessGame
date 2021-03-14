'use strict';
/*
console.log(document.querySelector('.message').textContent);
console.log(
  (document.querySelector('.message').textContent = 'Correct Number!')
);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 100;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 19;
*/

let secNumb = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
//document.querySelector('.number').textContent = secNumb;
const eventHandle = function () {
  const num = Number(document.querySelector('.guess').value);

  if (!num) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (num === secNumb) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.number').textContent = secNumb;
  } else if (num > secNumb) {
    document.querySelector('.message').textContent = 'Too High, Keep Guessing!';
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'black';
  } else if (num < secNumb) {
    document.querySelector('.message').textContent = 'Too Low, Keep Guessing!';
    score--;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'black';
  }
  while (score == 0) {
    document.querySelector('.message').textContent = 'Game Over!';
    score++;
    break;
  }
};
const again = function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.guess').value = '';
  score = 20;
  secNumb = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.again').addEventListener('click', again);
document.querySelector('.check').addEventListener('click', eventHandle);
