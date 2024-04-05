// using keypress method //

var username = prompt("Please enter your name!");
alert ("Welcome " + username + " to DRUM machine"); 
document.querySelector(".userName").innerHTML = username;

//button press
var numberofdrums = document.querySelectorAll(".drum").length;

for (var i=0; i<numberofdrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttoninnerhtml = this.innerHTML;

        makesound(buttoninnerhtml);
        buttonanimation(buttoninnerhtml);
    });
}

//keyboard press
document.addEventListener("keypress", function(event){  // "keypress" is used for  capturing a keyboard event, which occurs when the key is pressed .
    
    makesound(event.key);
    buttonanimation(event.key);
});

function makesound (key) { // ("key") -> MDN : A string representing the name of a keyboard key

    switch (key) {
        case "w":
            var audio = new Audio("crash.mp3");
            audio.play();                 
            break;
        case "a":
            var audio = new Audio("kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("tom-2.mp3");
            audio.play();
            break; 
        case "k":
            var audio = new Audio("tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("tom-4.mp3");
            audio.play();
            break; 

        default:alert("wrong key pressed");
    }
}



function buttonanimation (key) {
    var activebutton = document.querySelector("."+key);
    activebutton.classList.add("pressed");

    setTimeout (function() {
        activebutton.classList.remove("pressed");
    }, 50);
}
