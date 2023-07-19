
//better than using 7, use loop through buttons, and EVEN one better, use the class of buttons (.drum), just in case new buttons are added that have nothing to with this use case -- yeah, confusion originally that drum is versus .w, .a, etc., but I guess the space over on index.html allows for multiple classes to be assigned to same 'class =')
let numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {alert("I got clicked!");});
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