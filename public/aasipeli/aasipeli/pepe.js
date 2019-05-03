console.log("18")
var meetvurst = new Audio("jo.mp3");
var ruoka = 0
var money = 20
var exec = false
var lose = true
aasi = document.getElementById('aasi')
maksu = document.getElementById('maksu')
raha = document.getElementById("raha");
maksu.style.display = "none"
c("ruoka", "ruoka: 0")
function lost() {
    if (lose == false) {
    if (money < 0) {
        alert("FUCKIN LOST THE GAME YOU PSYCHO!")
    }
    lose = true
}
}
raha.innerHTML = "raha: " + money;
function maksa() {
    maksu.style.display = "none"
    setTimeout(function(){
        c("aasi", "!==!*")
    }, 1000);
    money = money - 50
    raha.innerHTML = ("raha: " + money + "€");
    exec = false
    lost()
}
function perseile() {
    lost()
    if (exec == false) {
        if (Math.round(RanInt(1, 3)) == 1) {
            var N = new Audio("./ovi.mp3")
            N.play()
            console.log("...")
        }
        if (Math.round(RanInt(1, 3)) == 2) {
            var N = new Audio("./nappi.mp3")
            N.play()
            if (Math.round(RanInt(1, 4)) == 1); {
                aasi.innerHTML = "woop woop! Sait 20€ palkkaa.";
                money = money + 20
                raha.innerHTML = ("raha: " + money + "€");
                setTimeout(function(){
                aasi.innerHTML = "!==!*";
                }, 1000)
                lost()
            };
        };
        if (Math.round(RanInt(1, 3)) == 3) {
            lost()
            exec = true
            var N = new Audio("./kurkku.mp3")
            N.volume = 0.4
            N.play()
            c("aasi", "Sait flunssan. Maksa 50€ lääkärille.")
            maksu.style.display = "block"
        }
        }
    }
function c(id, text) {
    document.getElementById(id).innerHTML = text;
    lost()
}
function RanInt (min, max) {
    return Math.random() * (max - min) + min;
    lost()
};
