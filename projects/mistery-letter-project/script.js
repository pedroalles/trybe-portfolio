const inputElement = document.getElementById('carta-texto');
const buttonElement = document.getElementById('criar-carta');
const pElement = document.getElementById('carta-gerada');
const pCountElement = document.getElementById('carta-contador');
const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
const sizeGroup = ['medium', 'big', 'reallybig'];
const rotationGroup = ['rotateleft', 'rotateright'];
const inclinationGroup = ['skewleft', 'skewright'];

function setPText(text) {
  pElement.innerText = text;
}

function getWords() {
  const text = inputElement.value;
  if (text.replace(/\s/g, '') === '') {
    setPText('Por favor, digite o conteúdo da carta.');
    return;
  }
  const words = text.split(' ');
  return words;
}

function setWordsCount(words) {
  pCountElement.innerText = words.length;
}

function falseOrTrue() {
  return Math.round(Math.random());
}

function randomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber).toString();
}

function addRandomClass(span) {
  if (falseOrTrue) span.classList.add(styleGroup[randomNumber(styleGroup.length)]);
  if (falseOrTrue) span.classList.add(sizeGroup[randomNumber(sizeGroup.length)]);
  if (falseOrTrue) span.classList.add(rotationGroup[randomNumber(rotationGroup.length)]);
  if (falseOrTrue) span.classList.add(inclinationGroup[randomNumber(inclinationGroup.length)]);
}

function setLetterWords() {
  const words = getWords();
  if (words === undefined) return;
  setPText('');
  setWordsCount(words);
  for (let word = 0; word < words.length; word += 1) {
    const spanElement = document.createElement('span');
    spanElement.innerText = words[word];
    addRandomClass(spanElement);
    pElement.appendChild(spanElement);
  }
}

buttonElement.onclick = setLetterWords;
