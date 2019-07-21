function selector(sel) {
    document.getElementById('selector').style.display = "none"
    document.getElementById(sel).style.display = "block"
}
function back() {
    document.getElementById('selector').style.display = "block"
    document.getElementById('button').style.display = "none"
    document.getElementById('text').style.display = "none"
}
function textEval() {
    document.getElementById('tresult').innerHTML = eval(document.getElementById('textInput').value)
}