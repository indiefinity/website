console.log("8")
var meetvurst = new Audio("jo.mp3");
var ruoka = 0
c("ruoka", "ruoka: 0")
function syö() {
    ruoka = ruoka + 1
    if (ruoka > 99) {
        meetvurst.play()
        console.log(":)")
    }
    c("ruoka", "ruoka: " + ruoka)
    c("aasi", "!==!* |||")
    setTimeout(function(){
        c("aasi", "&nbsp;!==!o.||")
    }, 500);
    setTimeout(function(){
        c("aasi", "&nbsp;&nbsp;!==!o.|")
    }, 1000);
    setTimeout(function(){
        c("aasi", "&nbsp;&nbsp;&nbsp;!==!o.")
    }, 1500);
    setTimeout(function(){
        c("aasi", "!==!*")
    }, 2000);
    setTimeout(function(){
        c("aasi", "")
    }, 2500);
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
function perseile() {
    alert("paskanna");
}
function c(id, text) {
    document.getElementById(id).innerHTML = text;
}