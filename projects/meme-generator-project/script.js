const inputTextElement = document.getElementById('text-input');
const inputFileElement = document.getElementById('meme-insert');
const inputUrlElement = document.getElementById('meme-url-insert');
const memeContainer = document.getElementById('meme-image-container');
const memeImage = document.getElementById('meme-image');
const memeTextElement = document.getElementById('meme-text');
const startImages = document.getElementById('start-images').children;

const fireBt = document.getElementById('fire');
const waterBt = document.getElementById('water');
const earthBt = document.getElementById('earth');

function getAndSetText() {
  const inputText = inputTextElement.value;
  memeTextElement.innerText = inputText;
  console.log(inputText);
}

function loadFile() {
  if (this.files && this.files[0]) {
    const imageUrl = URL.createObjectURL(this.files[0]);
    memeImage.src = imageUrl;
  }
}

function loadUrl() {
  memeImage.src = this.value;;
}

function configInput() {
  inputTextElement.addEventListener('input', getAndSetText);
  inputFileElement.addEventListener('change', loadFile);
  inputUrlElement.addEventListener('input', loadUrl);
}

function resetStyle(btClicked, buttons) {
  for (let bt = 0; bt < buttons.length; bt += 1) {
    if (buttons[bt] !== btClicked) {
      const btn = buttons[bt];
      btn.style.border = '';
    }
  }
}

function changeBorder(event) {
  const buttons = document.getElementById('style-buttons').children;
  const btClicked = event.target;
  const typeBorder = btClicked.innerText;
  resetStyle(btClicked, buttons);
  if (typeBorder === 'Fire') {
    memeContainer.style.border = '3px dashed red';
    btClicked.style.border = '3px dashed red';
  } else if (typeBorder === 'Water') {
    memeContainer.style.border = '5px double blue';
    btClicked.style.border = '5px double blue';
  } else if (typeBorder === 'Earth') {
    memeContainer.style.border = '6px groove green';
    btClicked.style.border = '6px groove green';
  }
}

function configButtons() {
  fireBt.addEventListener('click', changeBorder);
  waterBt.addEventListener('click', changeBorder);
  earthBt.addEventListener('click', changeBorder);
}

function setImage(event) {
  memeImage.src = event.target.src;
}

function configImages() {
  for (let startImg = 0; startImg < startImages.length; startImg += 1) {
    startImages[startImg].addEventListener('click', setImage);
  }
}

window.onload = function initialSetup() {
  configInput();
  configButtons();
  configImages();
};
