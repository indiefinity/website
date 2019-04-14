console.log('harambe"');

function katso(id) {
    if (document.getElementById(id).value == 'harambe') {
        document.getElementById(teksti).innerHTML = 'guud';
    }
    else {
        document.getElementById(teksti).innerHTML = 'baad';
    }
}