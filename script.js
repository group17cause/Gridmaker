function addR(){
    let list = document.querySelectorAll("tr");
    if(list.length === 0){
        let row = document.createElement("TR");
        let column = document.createElement("TD");
        row.appendChild(column);
        document.querySelector("table").appendChild(row);
    }
    else{
        let count = document.querySelector("tr").childElementCount;
        let row = document.createElement("TR");

        for(let i = 0; i <count; i++){
            let column = document.createElement("TD");
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
        row.appendChild(column);
        document.querySelector("table").appendChild(row);
    }
    else{
        let count = list.length;

        for(let i = 0; i < count ; i++){
            let column = document.createElement("TD");
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

//fill uncolored grid elements with selected color
function fillU()
{


}

//fill all grid elements with selected color
function fill()
{

}

//sets global variable for selected color
function selected()
{
	colorSelected = document.getElementById("selectedID").value;
	console.log(colorSelected);

}

//delete the entire grid
function clearAll()
{
	var grid = document.getElementById("grid");
	for(let i = grid.rows.length; i > 0; i--)
	{
		grid.deleteRow(i -1);
	}
}
