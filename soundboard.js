
var buttonElement1 = document.getElementById('button_1');
var buttonElement2 = document.getElementById('button_2');
var buttonElement3 = document.getElementById('button_3');

buttonElement1.pause();
buttonElement2.pause();
buttonElement3.pause();

var playing1 = false;
var playing2 = false;
var playing3 = false;


buttonElement1.addEventListener('click', function() {
    if (playing1) {
        buttonElement1.pause();
    } else {
        buttonElement1.play();
    }
    playing1 != playing1;
    console.log('Button 1 was clicked!')
})


buttonElement2.addEventListener('click', function() {
    if (playing2) {
        buttonElement2.pause();
    } else {
        buttonElement2.play();
    }
    playing2 != playing2;
    console.log('Button 2 was clicked!')
})


buttonElement3.addEventListener('click', function() {
    if (playing3) {
        buttonElement3.pause();
    } else {
        buttonElement3.play();
    }
    playing3 != playing3;
    console.log('Button 3 was clicked!')
})