var main = setInterval(function(){
    if (document.getElementById("pepe").style.backgroundColor == "white") {
        document.getElementById("pepe").style.backgroundColor = "red"
    } else {
        document.getElementById("pepe").style.backgroundColor = "white"
    }
}, 250)