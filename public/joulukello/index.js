var text = document.getElementById('time')
var goal = new Date("24 December 2019")
text.innerHTML = goal.toDateString + " " + Date.now()