const container = document.querySelector(".container");
let rows = 16;
let columns = 16;

const grid = document.createElement("div");
grid.className = 'grid';
    for(let i = 0; i < columns; i++){
        let column = document.createElement("div");
        column.className = 'column';
        for(let i = 0; i < rows; i++){
            let row = document.createElement("div");
            row.className = 'row';
            column.appendChild(row);
        }
        grid.appendChild(column);
    }
container.appendChild(grid);
