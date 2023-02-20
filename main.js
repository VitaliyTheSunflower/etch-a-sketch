const resBtn = document.createElement("button");
const colorPicker = document.createElement("input");
const navbar = document.createElement("nav");
const rowDivs = document.querySelectorAll(".row");
const container = document.querySelector(".container");
let rows = 16;
let columns = 16;

resBtn.textContent = "Reset";
navbar.appendChild(resBtn);

colorPicker.setAttribute("type","color");
navbar.appendChild(colorPicker);

navbar.className = "navbar";
container.appendChild(navbar);

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


rowDivs.forEach(rowDiv => rowDiv.addEventListener('mouseenter',(e) =>{
    e.target.className
    getHoverEffect();
}))

