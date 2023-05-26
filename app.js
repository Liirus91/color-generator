const columns = document.querySelectorAll('.column');

function generateRandomColor() {
  const values = '1234567890ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += values[Math.floor(Math.random() * values.length)];
  }

  return color;
}

function isLight(color) {
  const r = parseInt(color.substring(0, 2), 16) / 255;
  const g = parseInt(color.substring(2, 4), 16) / 255;
  const b = parseInt(color.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let l = (max + min) / 2;

  return l >= 0.5 ? true : false;
}

function setRandomColors() {
  columns.forEach((col) => {
    const color = generateRandomColor();
    const text = col.querySelector('h2');
    const button = col.querySelector('button');

    text.textContent = color;
    col.style.background = color;

    setTextColor(text, color);
    setTextColor(button, color);
  });
}

function setTextColor(text, color) {
  const colorIsLight = isLight(color.substring(1));
  let textColor = '#FFFFFF';
  if (colorIsLight) {
    textColor = '#000000';
  }

  text.style.color = textColor;
}

setRandomColors();
