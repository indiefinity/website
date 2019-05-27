var red = 255
var blue = 0
var green = 0
var red2 = 0
var blue2 = 255
var green2 = 0
function lol() {
    if (red > 0 && blue == 0) {
        red--;
        green++;
    }
    else if (green > 0) {
        green--;
        blue++;
    }
    else if (blue > 0) {
        blue--;
        red++;
    }
    document.body.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue +")";
    setTimeout(function(){
        lol();
    }, 5);
}
lol()
function rainbows() {
    if (red2 > 0 && blue2 == 0) {
        red2--;
        green2++;
    }
    else if (green2 > 0) {
        green2--;
        blue2++;
    }
    else if (blue2 > 0) {
        blue2--;
        red2++;
    }
    document.getElementById("rainbow").style.color = "rgb(" + red2 + ", " + green2 + ", " + blue2 +")";
    setTimeout(function(){
        rainbows();
    }, 5);
}
rainbows()