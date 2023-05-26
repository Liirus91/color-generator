const columns = document.querySelectorAll('.column');

function generateRandomColor() {
  const values = '1234567890ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += values[Math.floor(Math.random() * values.length)];
  }

  return color;
}

function setRandomColors() {
  columns.forEach((col) => {
    const color = generateRandomColor();
    const text = col.querySelector('h2');

    text.textContent = color;
    col.style.background = color;
  });
}

setRandomColors();
