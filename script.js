function addR(){
    let list = document.querySelectorAll("tr");
    if(list.length === 0){
        let row = document.createElement("TR");
        let column = document.createElement("TD");
        column.addEventListener("click", changeBackgroundColor);
        row.appendChild(column);
        document.querySelector("table").appendChild(row);
    }
    else{
        let count = document.querySelector("tr").childElementCount;
        let row = document.createElement("tr");
        for(let i = 0; i <count; i++){
            let column = document.createElement("td");
            column.addEventListener("click", changeBackgroundColor);
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
        row.appendChild(column);
        document.querySelector("table").appendChild(row);
    }
    else{
        let count = list.length;
        for(let i = 0; i < count ; i++){
            let column = document.createElement("TD");
            column.addEventListener("click", changeBackgroundColor);
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
function fillU()
{


}

//fill all grid elements with selected color
function fill()
{

}

//remove all color from the grid
function clearAll()
{

}
