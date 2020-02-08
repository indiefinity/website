function decrypt(str) {
    var wheel = 'abcdefghijklmnopqrstuvwxyzåäöabcdefghijklmnopqrstuvwxyzåäö'.split('');
    var result = [];
    var c
    for (c = 0; c < 29; c++) {
        result[c] = " "
    }
    var a = str.toLowerCase().replace(/ /g, "").split('');
    var stringlength = a.length
    var i;
    for (i = 0; i < stringlength; i++) {
        let workingletter = a[i]; // abcd EFGH
        let b
        for (b = 0; b < 29; b++) {
            result[b] += wheel[wheel.indexOf(workingletter) + b]
        }
    }
    let d
    for (d = 0; d < 29; d++) {
        result[d] = "<br>" + result[d]
    }
    document.getElementById("result").innerHTML = result;
}