const columns = document.querySelectorAll('.column');

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  if (e.code === 'Space') {
    setRandomColors();
  }
});

document.addEventListener('click', (e) => {
  const type = e.target.dataset.type;
  if (type === 'lock') {
    const node =
      e.target.tagName.toLowerCase() === 'i' ? e.target : e.target.children[0];

    node.classList.toggle('fa-lock-open');
    node.classList.toggle('fa-lock');
  } else if (type === 'name') {
    copyToClickboard(e.target.textContent);
  }
});

function generateRandomColor() {
  const values = '1234567890abcdef';
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

function copyToClickboard(text) {
  return navigator.clipboard.writeText(text);
}

function setRandomColors() {
  columns.forEach((col) => {
    const isLocked = col.querySelector('i').classList.contains('fa-lock');
    const color = generateRandomColor();
    const text = col.querySelector('h2');
    const button = col.querySelector('button');

    if (isLocked) {
      return;
    }

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
