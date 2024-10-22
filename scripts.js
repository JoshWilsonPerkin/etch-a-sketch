const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");
container.appendChild(gridContainer);

const grid = document.createElement("div");
grid.classList.add("grid");
gridContainer.appendChild(grid);

const clickMe = document.querySelector("button");
clickMe.addEventListener('click', function getInput() {
    userInput = prompt("What size of grid would you like?");
    if (userInput > 100 || userInput < 1) {
        alert("This number is out of range. Enter a value between 1-100.");
        getInput();
    }
    let oldGrid = document.getElementsByClassName('col');
    while (oldGrid[0]) {
        oldGrid[0].parentNode.removeChild(oldGrid[0]);
    }
    makeGrid(userInput);
});

makeGrid(16);

function makeGrid(size) {
    
    for (i=0; i<size; i++) {
        let col = document.createElement("div");
        col.classList.add("col");

        for (j=0; j<size; j++) {
            let row = document.createElement("div");
            row.classList.add("row");
            col.appendChild(row);
        }
    grid.appendChild(col);  
    }
}