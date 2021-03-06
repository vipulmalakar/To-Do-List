var toDoItems = document.getElementsByClassName("to-do-items")[0];
var input = document.querySelector(".form-control");

$("input").keypress(function(event) {
    if(event.key === "Enter")
        addItem();
})

function addItem(){

    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>'+(input.value).toUpperCase()+'</div>'
    
    checkIcon.className = "fa-solid fa-square-check";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", function(){
        checkIcon.style.color = "limegreen";
    })
    
    divChild.appendChild(checkIcon);
    
    
    trashIcon.className = "fa-solid fa-trash"
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", function(){
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
}