var startingDegree = r(0,360)
var startingSpeed = r(0,100)
var currentSpeed = startingSpeed
var currentDegree = startingDegree
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
    
    if (currentSpeed < 1) {
    setTimeout(function() {
      reset();
    }, 5000);
    }
}
