let i = 0; // Flag for navigation; 0 = hidden, 1 = visible
let navInput = document.getElementById("nav-btn"); // We need to parse inputs to our nav toggle

// Toggle navigation visibility
function toggleNav()
{
  if (i == 0)
  {
    document.getElementById("nav").style.display = "block";
    // For some reason, the transition property from the CSS won't work unless
    // we wrap the code changing the height and padding in a setTimeout. Even
    // if we're only waiting 1 millisecond. Should investigate further but
    // functional for now. I'm losing my mind
    setTimeout(function (){
      document.getElementById("nav").style.height = "100%";
      document.getElementById("nav").style.padding = "4.5em 0 0 0";
    }, 1);
    i = 1;
  }
  else
  {
    document.getElementById("nav").style.height = "0%";
    document.getElementById("nav").style.padding = "0";
    // Delay setting the display type to none so that the transition animation
    // still plays; it takes place over 1s, so we need to wait 1000 milliseconds
    setTimeout(function (){
      document.getElementById("nav").style.display = "none";
    }, 1000);
    i = 0;
  }
}

// Our nav toggle does not natively have functionality with the enter key, so
// this adds it to accomodate users who navigate via tabs & enter
navInput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    document.getElementById("nav-btn").click();
  }
});
