const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write somenthing!");
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span"); //creates a cross icon to delete the tasks
        span.innerHTML = "\u00d7" //cross icon
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData(); //whenever we add any task, we call saveData() and the data will be saved in the browser
}

//adding event listener to the click: once we have clicked somewhere inside the listContainer, it will check if we clicked in:
//LI - mark it as "checked". if it's already "checked", it will remove the "checked" (toggle)
//SPAN - remove it
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//store the tasks in the browser to be displayed as it was before closing the browser:
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);//whatever is contained in the listContainer will be stored in the browser under "data"
}

//display the data whenever we open the browser again:
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();