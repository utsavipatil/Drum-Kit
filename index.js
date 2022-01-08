//                                  Detecing Button Press

// Do something when all button which as class= "drum" (more specific so that it won't affect other buttons)
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

}

//                                   Detecting Keyboard Press
document.addEventListener("keydown", function(event) {
    var keyBoard = event.key;
    makeSound(keyBoard);
    buttonAnimation(keyBoard);
});


function makeSound (key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom_1 = new Audio("sounds/tom-1.mp3");
      tom_1.play();
      break;

    case "j":
      var tom_2 = new Audio("sounds/tom-2.mp3");
      tom_2.play();
      break;

    case "k":
      var tom_3 = new Audio("sounds/tom-3.mp3");
      tom_3.play();
      break;

    case "l":
      var tom_4 = new Audio("sounds/tom-4.mp3");
      tom_4.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}

function buttonAnimation (currentKey){
  var add = document.querySelector("." + currentKey).classList.add("pressed");
    // Delay
    setTimeout (function () {
      document.querySelector("." + currentKey).classList.remove("pressed");
    },100);
}
