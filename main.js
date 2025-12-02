const GRID_SIZE = 16;

const container = document.getElementById('container');

for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const square = document.createElement('square_grid');
    square.className = 'square';

    square.addEventListener('click', function() {
        square.style.backgroundColor = 'black';
    });

    container.appendChild(square);
}