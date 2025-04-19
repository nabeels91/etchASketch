const inputTag = document.querySelector("input");
const button = document.querySelector("button");

const containerS = document.querySelector(".container");
let userInput ="";

function gridSize(n){
    let gSize=parseInt(n);
    for(let i=0; i<gSize; i++){
        let rows = document.createElement("div"); 
        rows.classList.add("rows");
        containerS.append(rows);
        
        for(let j=0; j<gSize; j++){
            let columns = document.createElement("div");
            columns.classList.add("columns");
            columns.style.height= "30px";
            columns.style.width= "30px";
            columns.style.border="black 2px solid";
            rows.append(columns);
        }  
    }
}

button.addEventListener("click", ()=>{
    containerS.innerHTML ="";
    userInput = inputTag.value || 10;
    if(userInput > 100 || userInput <0){
        userInput = 10;
        alert(`too big, defaults to 10`);

    }
    inputTag.value = "";
    alert(`you chose the grid to be ${userInput} x ${userInput}`);
    gridSize(userInput);

});

inputTag.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
    containerS.innerHTML ="";
    userInput = inputTag.value || 10;
    if(userInput > 100 || userInput <0){
        userInput = 10;
        alert(`too big, defaults to 10`);

    }
    inputTag.value = "";
    alert(`you chose the grid to be ${userInput} x ${userInput}`);
    gridSize(userInput);
    }
});


