const GRID_SIZE = 16;

const container = document.getElementById('container');
const newGrid = document.getElementById('newGrid');
const resetGrid = document.getElementById('resetGrid')

let isDrawing = false;

container.addEventListener('mousedown', function(e) {
    if (e.button === 0) { 
        isDrawing = true;
    }
});

container.addEventListener('mouseup', function(e) {
    if (e.button === 0) { 
        isDrawing = false;
    }
});

container.addEventListener('mouseleave', function() {
    isDrawing = false;
});

function drawGrid(size) {
    container.innerHTML = "";

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.className = 'square';

        square.style.width = `calc(100% / ${size})`;
        square.style.height = `calc(100% / ${size})`;

        square.addEventListener('mouseenter', function() {
            if (isDrawing) {
                square.style.backgroundColor = 'black';
            }
        });

        square.addEventListener('mousedown', function() {
            square.style.backgroundColor = 'black';
        });

        container.appendChild(square);
    }
}

if (newGrid) {
    newGrid.addEventListener('click', function () {
        const sizeInput = document.getElementById('gridSizeInput');
        let size = GRID_SIZE;

        if (sizeInput) {
            size = parseInt(sizeInput.value, 10);
        }

        if (isNaN(size) || size < 1) {
            size = GRID_SIZE;
        }

        if (size > 100) {
            size = 100;
        }

        drawGrid(size);
    });
}

if (resetGrid) {
    resetGrid.addEventListener('click', function() {
        const squares = document.querySelectorAll('.square');

        squares.forEach(function(square) {
            square.style.backgroundColor = 'white';
        });

    });
}

drawGrid(GRID_SIZE);