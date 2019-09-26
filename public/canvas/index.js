const c = document.getElementById('canvas');
const g = c.getContext("2d");
const c2 = document.getElementById('pipes')
const g2 = c2.getContext('2d');
const c3 = document.getElementById('bg')
const bg = c3.getContext('2d');
var bird
var highscore = getCookie("highscore")
var failed = false
var score = 0
var img = new Image();
img.onload = function(){
    bird = img
    //ctx.drawImage(img,0,0);
};
img.src = "./bird.png";
img.width = 200
img.height = 200
console.log("start!")
pipe()
var char = {"x":100,"y":200}
var main = setInterval(function() {
    c.width = c.width
    bg.fillStyle = "#8fddff";
    bg.fillRect(0, 0, canvas.width, canvas.height);
    g.fillStyle = "#000000"
    g.drawImage(bird, char.x, c.height - char.y,);
    g.fillStyle = "#40b320"
    g.fillRect(0, 550, c.width, 50); 
    document.getElementById('score').innerHTML = Math.floor(score / 6) + " (Highscore: " + highscore + ")"
}, 10)
var timer2 = setInterval(function() {
    pipe()
}, 1000)

var gravity = setInterval(function() {
    if (char.y < 100) {
        char.y = 100
    }
        if (char.y > 100) {
        char.y *= 0.98
        }
}, 10)

//keymush land
window.addEventListener( "keypress", doKeyDown, false);
c.addEventListener( "keydown", doKeyDown, true);
function doKeyDown(e) {
    switch(e.keyCode) {
        case 32:
            //sump ylöspäin saatanan homo
                jump();
        break;
        case 65:
            console.log("a")
            char.x -= 2
        break;
        case 68:
            console.log("d")
            char.x += 20
        break;
    };
};
//cool shit land
function jump() {
    if (failed) {
        window.location = window.location
    }
    let velocity = 10
    var jump = setInterval(function() {
        char.y += velocity;
        velocity *= 0.96;
        if (velocity < 0.1) {
            clearInterval(jump);
        }
}, 10)
}
function pipe() {
    if (r(0,1) == 0) {
        //normal boring pipe
    let pipe = {"x": 860, "y":r(100,450)}
    let pipes = setInterval(function() {
        c2.width = c2.width
        g2.fillStyle = "#0d7a23"
        g2.fillRect(pipe.x,0, 80, c.height)
        g2.clearRect(pipe.x, c2.height - pipe.y, 80, -150)
        if (getCookie("god") != 1) {
        if (char.x > pipe.x && char.x < pipe.x + 50 && char.y > pipe.y + 150) {fail()}
        if (char.x > pipe.x && char.x < pipe.x + 50 && char.y < pipe.y) {fail()}
        if (char.x > pipe.x && char.x < pipe.x + 50 && char.y - 10 > pipe.y + 150) {fail()}
        if (char.x > pipe.x && char.x < pipe.x + 50 && char.y - 10 < pipe.y) {fail()}
        if (char.x - 10 > pipe.x && char.x - 10 < pipe.x + 50 && char.y > pipe.y + 150) {fail()}
        if (char.x - 10 > pipe.x && char.x - 10 < pipe.x + 50 && char.y < pipe.y) {fail()}
        if (char.x - 10 > pipe.x && char.x - 10 < pipe.x + 50 && char.y - 10 > pipe.y + 150) {fail()}
        if (char.x - 10 > pipe.x && char.x - 10 < pipe.x + 50 && char.y - 10 < pipe.y) {fail()}
        }
        if (char.x > pipe.x && char.x < pipe.x + 50) {
            score++
        }
        pipe.x -= 8
        if (pipe.x < 0) {
            clearInterval(pipes)
        }
    }, 10)
} else {
    // COOL PIPE // COOL PIPE // COOL PIPE
    let pipe = {"x": 860, "y":r(100,452)}
    let down = true
    let pipes = setInterval(function() {
        c2.width = c2.width
        g2.fillStyle = "#0d7a23"
        g2.fillRect(pipe.x,0, 80, c.height)
        g2.clearRect(pipe.x, c2.height - pipe.y, 80, -150)
        if (pipe.y < 104) {
            pipe.y = 100
            down = false
        }
        if (pipe.y > 448) {
            pipe.y = 452
            down = true
        }
        switch(down) {
            case true:
                pipe.y -= 4
                break;
            case false:
                pipe.y += 4
                break;
        }
        //to flood console, and debug i guess =>  console.log(pipe.y)'
        if (getCookie("god") != 1) {
        if (char.x > pipe.x && char.x < pipe.x + 50 && char.y > pipe.y + 150) {fail()} //Start scan
        if (char.x > pipe.x && char.x < pipe.x + 50 && char.y < pipe.y) {fail()}
        if (char.x > pipe.x && char.x < pipe.x + 50 && char.y - 10 > pipe.y + 150) {fail()}
        if (char.x > pipe.x && char.x < pipe.x + 50 && char.y - 10 < pipe.y) {fail()}
        if (char.x - 10 > pipe.x && char.x - 10 < pipe.x + 50 && char.y > pipe.y + 150) {fail()}
        if (char.x - 10 > pipe.x && char.x - 10 < pipe.x + 50 && char.y < pipe.y) {fail()}
        if (char.x - 10 > pipe.x && char.x - 10 < pipe.x + 50 && char.y - 10 > pipe.y + 150) {fail()}
        if (char.x - 10 > pipe.x && char.x - 10 < pipe.x + 50 && char.y - 10 < pipe.y) {fail()}
        }
        if (char.x > pipe.x && char.x < pipe.x + 50) {
            score++
        } //End scan
        pipe.x -= 8 //Move speed
        if (pipe.x < 0) { //delete function
            clearInterval(pipes)
        }
    }, 10)
}
}
function r(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function fail() {
    clearInterval(main)
    clearInterval(gravity)
    clearInterval(pipes)
    clearInterval(timer2)
    c.width = c.width
    c2.width = c2.width
    g.fillStyle = "red"
    g.fillRect(0, 0, c.width, c.height)
    failed = true
    if (getCookie("god") != 1) {
    if (Math.floor(score / 6) > highscore) {
        setCookie("highscore", Math.floor(score / 6 - 0.5), 9999)
    }
    }
}

//copypaste land
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
