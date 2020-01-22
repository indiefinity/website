var bg = document.getElementById("pepe").style.backgroundColor;
var pepe = 0;
function next() {
    if (pepe == 0) { bg = "red" }
    if (pepe == 1) { bg = "white" }
    if (pepe == 2) { bg = "yellow" }
    if (pepe == 3) { bg = "orange" }
    if (pepe == 4) { bg = "gray" }
    if (pepe == 4) { pepe = 0 }
    
}
var main = setInterval(function(){
    next()
    pepe += 1;
}, 125)
