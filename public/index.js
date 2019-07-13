var startingDegree = r(0,180)
var startingSpeed = Math.random() * 5
var currentSpeed = startingSpeed
var currentDegree = startingDegree
function reset() {
    startingDegree = r(0,180)
    startingSpeed = Math.random()
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
  if (startingSpeed < 0.2) {startingSpeed = Math.random();currentSpeed = startingSpeed} else {
    currentDegree = currentDegree * currentSpeed
    document.getElementById('text').style.transform = "rotate(" + currentDegree + "deg)"
    currentSpeed = currentSpeed / 1.01
    if (currentSpeed < 0.1) {reset()}
  }
}