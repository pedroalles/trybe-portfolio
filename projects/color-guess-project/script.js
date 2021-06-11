const ballsElements = document.getElementsByClassName('ball');
const guessColor = document.getElementById('rgb-color');
const answerElement = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');
const scoreElement = document.getElementById('score');

function randomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber).toString();
}

function randomRGB() {
  return `rgb(${randomNumber(256)}, ${randomNumber(256)}, ${randomNumber(256)})`;
}

function setColors() {
  for (let ball = 0; ball < ballsElements.length; ball += 1) {
    ballsElements[ball].style.backgroundColor = randomRGB();
  }
}

function choseRandomColor() {
  const chosedColor = ballsElements[randomNumber(6)].style.backgroundColor;
  return chosedColor;
}

function setGuessColor() {
  const splitedText = choseRandomColor().split('rgb')[1];
  guessColor.innerText = splitedText;
}

function setAnswerText(text) {
  answerElement.innerText = text;
}

function incrementScore() {
  const score = Number(scoreElement.innerText);
  console.log(score);
  scoreElement.innerText = score + 3;
}

function verifyChose(event) {
  if (answerElement.innerText === 'Acertou!') return;
  const clicked = event.target;
  const clickedColor = clicked.style.backgroundColor;
  console.log(clickedColor);
  if (clickedColor === `rgb${guessColor.innerText}`) {
    setAnswerText('Acertou!');
    incrementScore();
  } else {
    setAnswerText('Errou! Tente novamente!');
  }
}

function configCircleClicks() {
  for (let ball = 0; ball < ballsElements.length; ball += 1) {
    ballsElements[ball].addEventListener('click', verifyChose);
  }
}

function configResetButton() {
  resetButton.onclick = () => {
    setColors();
    setGuessColor();
    setAnswerText('Escolha uma cor');
  };
}

window.onload = () => {
  setColors();
  setGuessColor();
  configCircleClicks();
  configResetButton();
};
