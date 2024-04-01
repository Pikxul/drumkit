// using keypress method

//button press
var numberofdrums = document.querySelectorAll(".drum").length;

for (var i=0; i<numberofdrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttoninnerhtml = this.innerHTML;
        makesound(buttoninnerhtml);
    });
}

//keyboard press
document.addEventListener("keypress", function(event){  // "keypress" is used for  capturing a keyboard event, which occurs when the key is pressed .
    makesound(event.key);
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

        default:console.log(buttoninnerhtml);
    }
}