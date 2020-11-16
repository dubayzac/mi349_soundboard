

var buttonElement1 = document.getElementById('button_1');
var buttonElement2 = document.getElementById('button_2');
var buttonElement3 = document.getElementById('button_3');

var audio1 = new Audio("Snare2.wav")
var audio2 = new Audio("Kick4.wav")
var audio3 = new Audio("HiHat6.wav")

buttonElement1.onclick = function() {
    audio1.play();
}


buttonElement2.addEventListener('click', function() {

    console.log('Button 2 was clicked!')
})


buttonElement3.addEventListener('click', function() {

    console.log('Button 3 was clicked!')
})
