console.log('Laita boxiin "harambe" ja paina "Jatka"')
function muuta(id, teksti) {
    document.getElementById(id).innerHTML = teksti
}
function katso(id) {
    if (document.getElementById(id).value == 'harambe') {
        muuta(teksti, "Hyvä, olet paras!")
    }
    else {
        muuta(teksti, "Buu, olet nolla!")
    }
}