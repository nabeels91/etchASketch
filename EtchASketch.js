const inputTag = document.querySelector("input");
const button = document.querySelector("button");

const containerS = document.querySelector(".container");
let userInput ="";
let columns = '';
function gridSize(n){
    let gSize=parseInt(n);
    containerS.innerHTML ="";
    
    for(let i=0; i<gSize; i++){
        let rows = document.createElement("div"); 
        rows.classList.add("rows");
        containerS.append(rows);
        
        for(let j=0; j<gSize; j++){
            columns = document.createElement("div");
            columns.classList.add("columns");
            columns.style.height= "30px";
            columns.style.width= "30px";
            columns.style.border="black 2px solid";
            rows.append(columns);

            columns.addEventListener("mouseover", function() {
                let currentOpac = parseFloat(this.getAttribute('data-opacity')) || 0;
                currentOpac = Math.min(currentOpac + 0.1, 1);
                this.setAttribute('data-opacity', currentOpac);
                

                this.style.backgroundColor = `rgba(255, 0, 0, ${currentOpac})`;
            });
        }  
    }
    
}

function colourCells(){
   

}


button.addEventListener("click", ()=>{
    
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
    // containerS.innerHTML ="";
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

