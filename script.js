function addR(){
    let list = document.querySelectorAll("tr");
    if(list.length === 0){
        let row = document.createElement("TR");
        let column = document.createElement("TD");
        column.addEventListener("click", changeBackgroundColor);
        column.style.backgroundColor = "transparent";              // The default value for a table cell is transparent, 
        row.appendChild(column);                                   // However, the fillU() function did not work without this initial value set to transparent  
        document.querySelector("table").appendChild(row);
    }
    else{ 
        let count = document.querySelector("tr").childElementCount;
        let row = document.createElement("tr");
        for(let i = 0; i <count; i++){
            let column = document.createElement("td");
            column.addEventListener("click", changeBackgroundColor);
            column.style.backgroundColor = "transparent";       // Default value didn't work so manually assigned transparent to each td
            row.appendChild(column);
            document.querySelector("table").appendChild(row);
        }
    }
}

function addC(){
    let list = document.querySelectorAll("tr");
    if(list.length === 0){
        let row = document.createElement("TR");
        let column = document.createElement("TD");
        column.addEventListener("click", changeBackgroundColor);
        column.style.backgroundColor = "transparent"; 
        row.appendChild(column);
        document.querySelector("table").appendChild(row);
    }
    else{
        let count = list.length;
        for(let i = 0; i < count ; i++){
            let column = document.createElement("TD");
            column.addEventListener("click", changeBackgroundColor);
            column.style.backgroundColor = "transparent"; 
            document.querySelectorAll("tr")[i].appendChild(column);
        }
    }
}

function removeR(){
    let list = document.querySelectorAll("tr");
    if(list.length > 0){
        list[list.length-1].remove();
    }
}

function removeC(){
    let list = document.querySelectorAll("tr");
    if(list.length > 0){
        for(let i = 0; i < list.length; i++){
            let count = list[i].querySelectorAll("td").length-1;
            list[i].querySelectorAll("td")[count].remove();
        }
        if(list[0].childElementCount == 0){
            for(let i = 0; i < list.length; i++){
                list[i].remove();
            }
        } 
    }
}

function changeBackgroundColor() {
  let color = document.getElementById('selectedID').value;
  this.style.backgroundColor = color;
}

//fill uncolored grid elements with selected color
function fillU() {
  let cells = document.querySelectorAll("td");
  let color = document.getElementById('selectedID').value;
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].style.backgroundColor == 'transparent') {
      cells[i].style.backgroundColor = color;
    }
  }
}

//fill all grid elements with selected color
function fill() {
    let cells = document.querySelectorAll("td");
    let color = document.getElementById('selectedID').value;
    for (let i = 0; i < cells.length; i++) {
      cells[i].style.backgroundColor = color;
    }
}

//remove all color from the grid
function clearAll() {
  let cells = document.querySelectorAll("td");
  for (let i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "transparent";
  }
}
