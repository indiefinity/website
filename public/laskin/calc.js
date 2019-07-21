const disp = document.getElementById('display')
var done = true

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
    if (!done) {disp.innerHTML = disp.innerHTML + input} else {
        disp.innerHTML = input
        done = false
    }
}

function result() {
    if (!disp.innerHTML == "1+1" && !done) {
        disp.innerHTML = disp.innerHTML + "=" + eval(disp.innerHTML)
    } else {
        disp.innerHTML = disp.innerHTML + "=" + "3"
    }
    done = true
}

function reset() {disp.innerHTML = ""}

function backspace() {
    if (!done) {
        disp.innerHTML = disp.innerHTML.substring(0, disp.innerHTML.length - 1)
    } else {
        disp.innerHTML = ""
        done = false
    }
}