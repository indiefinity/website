console.log("8")
var meetvurst = new Audio("jo.mp3");
var ruoka = 0
var money = 20
aasi = document.getElementById('aasi')
maksu = document.getElementById('maksu')
maksu.style.display = "none"
c("ruoka", "ruoka: 0")
function syö() {
    ruoka = ruoka + 1
    if (ruoka > 99) {
        meetvurst.play()
        console.log(":)")
    }
    c("ruoka", "ruoka: " + ruoka)
    c("aasi", "!==!* III")
    setTimeout(function(){
        c("aasi", "&nbsp;!==!o.II")
    }, 500);
    setTimeout(function(){
        c("aasi", "&nbsp;&nbsp;!==!o.I")
    }, 1000);
    setTimeout(function(){
        c("aasi", "&nbsp;&nbsp;&nbsp;!==!o.")
    }, 1500);
    setTimeout(function(){
        c("aasi", "!==!*")
    }, 2000);
}
function juo() {
    alert("juo");
}
function nuku() {
    alert("nuku");
}
function juokse() {
    alert("juokse");
}
function maksa() {
    maksu.style.display = "none"
    setTimeout(function(){
        c("aasi", "!==!*")
    }, 1000);
    money--
}
function perseile() {
    if (Math.round(RanInt(1, 3)) == 1) {
        var N = new Audio("./ovi.mp3")
        N.play()
    }
    if (Math.round(RanInt(1, 3)) == 2) {
        var N = new Audio("./nappi.mp3")
        N.play()
        if (Math.round(RanInt(1, 4)) == 1) or (Math.round(RanInt(1, 4)) == 4) {
            aasi.innerHTML = "woop woop! sait 11.123€";
            setTimeout(function(){
                aasi.innerHTML = "!==!*";
            }, 1000)
        };
    };
    if (Math.round(RanInt(1, 3)) == 3) {
        var N = new Audio("./auto.mp3")
        N.volume = 0.4
        N.play()
        c("aasi", "Rikoit auton. Maksa 10€")
        maksu.style.display = "block"
    }
}
function c(id, text) {
    document.getElementById(id).innerHTML = text;
}
function RanInt (min, max) {
    return Math.random() * (max - min) + min;
}
