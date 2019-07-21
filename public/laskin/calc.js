const disp = document.getElementById('display')

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

//begin button
function input(input) {

}

function result() {

}

function reset() {

}

function backspace() {
    disp.innerHTML = disp.innerHTML.substring(0, disp.innerHTML.length - 1)
}