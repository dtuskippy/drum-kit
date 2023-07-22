
//better than using 7, use loop through buttons, and EVEN one better, use the class of buttons (.drum), just in case new buttons are added that have nothing to with this use case -- yeah, confusion originally that drum is versus .w, .a, etc., but I guess the space over on index.html allows for multiple classes to be assigned to same 'class =')
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
     
  })
}


document.addEventListener("keydown", function(event) {
  
  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio('/sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio('/sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio('/sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio('/sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      let snare = new Audio('/sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      let kick = new Audio('/sounds/kick-bass.mp3');
      kick.play();
      break;

    case "l":
      let crash = new Audio('/sounds/crash.mp3');
      crash.play();
      break;

    default: console.log(buttonInnerHTML);

  }
}


function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100)
}







// below works just using 7, but not as elegant / considering new buttons added, etc.

// for(i = 0; i < 7; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function() {alert("I got clicked!");});
// }

//anonymous function approach (more best practices)
// document.querySelector("button").addEventListener("click", function() {alert("I got clicked!");});

//original approach below
// document.querySelector("button").addEventListener("click", handleClick);


// function handleClick() {
//   alert("I got clicked!");
// }