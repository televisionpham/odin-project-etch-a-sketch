let currentSize;

document.querySelector("#btn-prompt").addEventListener("click", () => {
  promptGridSize();
});

document.querySelector("#btn-clear").addEventListener("click", () => {
  const cells = document.querySelectorAll(".div-cell");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "transparent";
  });
});

function promptGridSize() {
  const input = prompt("Enter grid size (less than 200):");
  const size = parseInt(input, 10);
  if (size && size <= 200) {
    createGrid(size);
  }
}

let isMouseDown = false;

function createGrid(size) {
  currentSize = size;
  const gridSize = 1000;
  const cellSize = Math.floor(gridSize / size);
  const sketchContainer = document.querySelector("#sketch-container");
  sketchContainer.innerHTML = "";

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const divCell = document.createElement("div");
      divCell.classList.add("div-cell");
      divCell.style.backgroundColor = "transparent";
      divCell.style.width = cellSize + "px";
      divCell.style.height = cellSize + "px";
      divCell.style.flex = `1 0 ${100 / size}%`;

      divCell.addEventListener("mouseover", () => {
        if (isMouseDown) {
          divCell.style.backgroundColor = "blue";
        }
      });

      divCell.addEventListener("mousedown", () => {
        isMouseDown = true;
      });

      divCell.addEventListener("mouseup", () => {
        isMouseDown = false;
      });

      divCell.addEventListener("click", () => {
        divCell.style.backgroundColor = "blue";
      });

      sketchContainer.appendChild(divCell);
    }
  }
}
