var startingDegree = r(0,360)
var startingSpeed = r(100,1000)
var currentSpeed = startingSpeed
var currentDegree = startingDegree
var timeout = 0
function reset() {
    startingDegree = r(0,360)
    startingSpeed = r(0,100)
    currentSpeed = startingSpeed
    currentDegree = startingDegree
    console.log(startingDegree)
    document.getElementById('text').style.transform = "rotate(" + startingDegree + "deg)"
}
function r(min, max) {
  return Math.floor(min + Math.random()*(max + 1 - min))
}
reset()
spin()
function spin() {
  setTimeout(function() {
    spin();
  }, 20);
    currentDegree = currentDegree * currentSpeed
    document.getElementById('text').style.transform = "rotate(" + currentDegree + "deg)"
    currentSpeed = currentSpeed * 0.95
    
    if (currentSpeed < 1 && timeout == 0) {
    setTimeout(function() {
      reset();
      timeout = 5
    }, 5000);
    } else {
      if (currentSpeed < 1 && !timeout == 0) {
        setTimeout(function() {
          timeout -= 1
        }, 1000)
      }
    }
}
