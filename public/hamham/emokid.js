function check(id) {
    if (document.getElementById(id).value == 'egg') {
        document.getElementById('pepe').innerHTML = 'EEEEEGGGGGGGGG';
    }
    else {
        document.getElementById('pepe').innerHTML = '';
    }
}