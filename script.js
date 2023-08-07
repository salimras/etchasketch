// Grab the container element
const container = document.getElementById('gridContainer');

// Create the grid
for (let i = 0; i < 256; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
}

const divs = document.querySelectorAll('.grid-item');

divs.forEach(div => {
    div.addEventListener('mouseover', function() {
        this.style.backgroundColor = 'blue';
    });
});

document.getElementById('resetGrid').addEventListener('click', function() {
    let gridSize;
    
    while (true) { // This will keep prompting until valid input or cancelled
        gridSize = prompt("Enter the number of squares per side (max 100):", "16");
        gridSize = parseInt(gridSize);
        
        if (gridSize === null) { // User pressed Cancel on prompt
            return;
        }

        if (!isNaN(gridSize) && gridSize >= 1 && gridSize <= 100) {
            break; // Exit the loop when valid input is given
        } else {
            alert("Please enter a valid number between 1 and 100!");
        }
    }

    const totalGapWidth = (gridSize - 1) * 2;
    const squareSize = (960 - totalGapWidth) / gridSize;
    
    // Clear the existing grid
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Adjust grid styles based on the new input
    container.style.width = `${960}px`;
    container.style.height = `${squareSize * gridSize + totalGapWidth}px`;

    // Adjust grid styles based on the new input:
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    // Generate the new grid
    for (let i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        div.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'blue';
        });
        container.appendChild(div);
    }
});
