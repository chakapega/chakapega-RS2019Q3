import { matrix4x4, matrix32x32 } from './matrices.js';

const mainSwitcherContainer = document.querySelector('.main__switcher-container');

const fillingCanvasFromArrayOfColors = arr => {
  const mainCanvas = document.querySelector('#main__canvas'),
  ctx = mainCanvas.getContext('2d'),
  width = arr[0].length,
  height = arr.length,
  scale = mainCanvas.width / width;

  mainCanvas.width = width * scale;
  mainCanvas.height = height * scale;

  if (typeof arr[0][0] === 'string') {
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        ctx.fillStyle = '#' + arr[row][col];
        ctx.fillRect(col * scale, row * scale, scale, scale);
      }
    }
  } else {
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        ctx.fillStyle = `rgba(${arr[row][col].join(',')})`;
        ctx.fillRect(col * scale, row * scale, scale, scale);
      }
    }
  }
};

const fillingCanvasFromImage = () => {
  const mainCanvas = document.querySelector('#main__canvas'),
  ctx = mainCanvas.getContext('2d');

  const image = new Image();

  image.onload = () => {
    image.height = 512;
    image.width = 512;

    ctx.drawImage(image, 0, 0, image.height, image.width);
  };

  image.src = '../codejam-canvas/assets/images/image.png';
};

const canvasClearing = () => {
  const mainCanvas = document.querySelector('#main__canvas'),
  ctx = mainCanvas.getContext('2d');

  ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
};

mainSwitcherContainer.addEventListener('click', event => {
  console.dir(event.target.textContent);

  switch (event.target.textContent) {
    case '4x4':
      canvasClearing();

      fillingCanvasFromArrayOfColors(matrix4x4);

      break;
    case '32x32':
      canvasClearing();

      fillingCanvasFromArrayOfColors(matrix32x32);

      break;
    case 'image':
      canvasClearing();

      fillingCanvasFromImage();

      break;

    default:
      break;
  }
});
