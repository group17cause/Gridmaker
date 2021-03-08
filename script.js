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


