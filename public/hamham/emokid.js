console.log('Laita boxiin "harambe" ja paina "Jatka"')
function muuta(id, teksti) {
    document.getElementById(id).innerHTML = teksti
}
function katso(id) {
    if (document.getElementById(id).value == 'harambe') {
        muuta(id, "Hyvä, olet paras!")
    }
    else {
        muuta(id, "Buu, olet nolla!")
    }
}