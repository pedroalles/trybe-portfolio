let currentColor = '#000';
function setCurrentColor(event) {
  const el = event.target;
  const selectedColor = document.getElementsByClassName('selected')[0];
  el.classList.toggle('selected');
  selectedColor.classList.toggle('selected');
  currentColor = event.target.innerText;
}

function setColors() {
  const colors = document.getElementsByClassName('color');
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', setCurrentColor);
    if (i > 0) {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      colors[i].style.backgroundColor = randomColor;
      colors[i].innerText = randomColor;
    } else {
      colors[i].style.backgroundColor = colors[i].innerText;
    }
  }
}

function applyColor(event) {
  const el = event.target;
  el.style.backgroundColor = currentColor;
}

function createPixels(width) {
  const pixelLines = document.getElementsByClassName('pixel-line');
  for (let line = 0; line < pixelLines.length; line += 1) {
    for (let i = 0; i < width; i += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixel.addEventListener('click', applyColor);
      pixelLines[line].appendChild(pixel);
    }
  }
}

function createPixelLines(lines, pixelBoard) {
  for (let line = 0; line < lines; line += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.classList.add('pixel-line');
    pixelBoard.appendChild(pixelLine);
  }
}

function validateInput(boardSize, boardInput) {
  let bS = boardSize;
  const bI = boardInput;
  if (boardSize < 5) {
    bS = 5;
    bI.value = bS;
  } else if (boardSize > 50) {
    bS = 50;
    bI.value = bS;
  }
  return bS;
}

let first = true;
function getInputValue() {
  const boardInput = document.getElementById('board-size');
  let boardSize = boardInput.value;
  if (boardSize === '' && first) {
    boardSize = 5;
    first = false;
  } else if (boardSize === '' && !first) {
    alert('Board inválido!');
  }
  boardSize = validateInput(boardSize, boardInput);
  return boardSize;
}

function createPixelBord() {
  const width = getInputValue();
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.innerHTML = '';
  createPixelLines(width, pixelBoard);
  createPixels(width);
}

function clearPixelBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let pixel = 0; pixel < pixels.length; pixel += 1) {
    pixels[pixel].style.backgroundColor = '#fff';
  }
}

function setupButtonClear() {
  const bt = document.getElementById('clear-board');
  bt.addEventListener('click', clearPixelBoard);
}

function setupButtonGenerate() {
  const bt = document.getElementById('generate-board');
  bt.addEventListener('click', createPixelBord);
}

window.onload = function startPage() {
  setColors();
  createPixelBord();
  setupButtonClear();
  setupButtonGenerate();
};
