function syö() {
    alert("syö")
    sleep(2)
    document.getElementById('aasi').innerHTML = "one eternity later"
}
function juo() {
    alert("juo")
}
function nuku() {
    alert("nuku")
}
function juokse() {
    alert("juokse")
}
function perseile() {
    alert("paskanna")
}
function sleep(seconds){
    var waitUntil = new Date().getTime() + seconds*1000;
    while(new Date().getTime() < waitUntil) true;
}