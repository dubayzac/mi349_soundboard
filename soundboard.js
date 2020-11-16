

var buttonElement1 = document.getElementById('button_1');
var buttonElement2 = document.getElementById('button_2');
var buttonElement3 = document.getElementById('button_3');

var audio1 = new Audio("Snare2.wav")
var audio2 = new Audio("Kick4.wav")
var audio3 = new Audio("HiHat6.wav")

buttonElement1.onclick = function() {
    audio1.play();
}

buttonElement2.onclick = function() {
    audio2.play();
}

buttonElement3.onclick = function() {
    audio3.play();
}