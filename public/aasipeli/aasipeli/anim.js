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