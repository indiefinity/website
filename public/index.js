var startingDegree = r(0,180)
function reset()
    startingDegree = r(0,180)
    console.log(startingDegree)
    document.getElementById('text').style.rotate(startingDegree)
function r(min, max) {
  return Math.floor(min + Math.random()*(max + 1 - min))
}
reset()