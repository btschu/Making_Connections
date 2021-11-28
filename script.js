// console.log("page loaded...");

// change name when "edit profile" is clicked

let nameChange = document.querySelector("#username")

function changeText() {
    nameChange.innerText = "Jacie Schumacher"
}

// increase connections and decrease requests based off which button is clicked. Also removes the line where the button is located.

var count = 2
var remove1 = document.querySelector('.badge1')
var add1 = document.querySelector('.badge')
var connections = 489

function hide(word, user1) {
    var approveDeny=document.querySelector(user1)
    approveDeny.remove();
    count--;
    remove1.innerHTML = count;
    if(word.getAttribute("alt")=="accept"){
        connections++;
        add1.innerHTML = connections;
    }
}