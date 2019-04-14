function syö() {
    c("aasi", "!==!* |||")
    sleep(0.5);
    c("aasi", " !==!o.||")
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
function sleep(seconds){
    var waitUntil = new Date().getTime() + seconds*1000;
    while(new Date().getTime() < waitUntil) true;
}
function c(id, text) {
    document.getElementById(id).innerHTML = text;
}