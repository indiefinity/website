var text = document.getElementById('joke')
function read() {
    $.ajax({
        url: 'https://icanhazdadjoke.com/',
        beforeSend: function(xhr) {
             xhr.setRequestHeader("Accept", "application/json")
        }, success: function(data){
            console.log(data);
            text.innerHTML = data.joke
            speak(data.joke)
        }
})
 }
function button() {
    read()
}
var ut;
function speak(what) {
    ut = new SpeechSynthesisUtterance(what)
    window.speechSynthesis.cancel(ut)
    window.speechSynthesis.speak(ut)
}