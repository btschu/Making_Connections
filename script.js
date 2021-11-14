// console.log("page loaded...");

function changeText(){
    document.getElementById("username").innerHTML = "Junie B. Jones"
}

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