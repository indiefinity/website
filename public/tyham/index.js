var bg = document.getElementById("pepe");
var pepe = 0;
function next() {
    if (pepe == 0) { bg.style.backgroundColor = "red" }
    if (pepe == 1) { bg.style.backgroundColor = "white" }
    if (pepe == 2) { bg.style.backgroundColor = "yellow" }
    if (pepe == 3) { bg.style.backgroundColor = "orange" }
    if (pepe == 4) { bg.style.backgroundColor = "gray" }
    if (pepe == 4) { pepe = 0 }
    
}
var main = setInterval(function(){
    next()
    pepe += 1;
}, 125)
