
var pepe = 0;
function next() {
    if (pepe == 0) { document.getElementById("pepe").style.backgroundColor = "red" }
    if (pepe == 1) { document.getElementById("pepe").style.backgroundColor = "white" }
    if (pepe == 2) { document.getElementById("pepe").style.backgroundColor = "yellow" }
    if (pepe == 3) { document.getElementById("pepe").style.backgroundColor = "orange" }
    if (pepe == 4) { document.getElementById("pepe").style.backgroundColor = "red" }
    if (pepe == 4) { pepe = 0 }
    
}
var main = setInterval(function(){
    next()
    pepe += 1;
}, 1)
