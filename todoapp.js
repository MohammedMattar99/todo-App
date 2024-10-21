const todoValue = document.getElementById("todoText");
listItems = document.getElementById("listItems");
addUpdateClick = document.getElementById("addUpdateClick");
let updateText;

todoValue.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addUpdateClick.click();
    }
});
function createTodoData(e) {
    
    if (todoValue.value === "") {
        alert("Please Enter Your Todo Text :-)");
        e.parentElement.parentElement.parentElement.querySelector("div").remove();
        todoValue.focus();
    }

    let li = document.createElement("li");
    const todoItems = `<div onclick="completeTodoItem(this)">${todoValue.value}</div><div><img class= "edit todoControlsE" onclick="updateTodoItems(this)" src="icons8-edit-30.png"></div><div><img class= "delete todoControlsD" onclick="deleteTodoItems(this)" src="icons8-delete-24.png"></div>`;
    li.innerHTML = todoItems;
    listItems.appendChild(li);
    todoValue.value = "";

}

function completeTodoItem(e) {
    if (e.parentElement.querySelector("div").style.textDecoration === "") {
        e.parentElement.querySelector("div").style.textDecoration = "line-through";

    }
}

function updateOnSelectionItems() {
    updateText.innerText = todoValue.value;
    addUpdateClick.setAttribute("onclick", "completeTodoItem()");
    addUpdateClick.setAttribute("src", "icons8-plus-24.png");
    todoValue.value = "";
}

function updateTodoItems(e) {
    if(e.parentElement.parentElement.querySelector("div").style.textDecoration === ""){
    todoValue.value = e.parentElement.parentElement.querySelector("div").innerText;
    addUpdateClick.setAttribute("onclick", "updateOnSelectionItems()");
    addUpdateClick.setAttribute("src", "icons8-refresh-30.png");
    }

}

function deleteTodoItems (e) {
    deleteValue = e.parentElement.parentElement.querySelector("div").innerText;
    if(confirm(`re you sure?. Do you want to delete this ${deleteValue}!`)){
    e.parentElement.parentElement.parentElement.querySelector("li").remove();
    }
}