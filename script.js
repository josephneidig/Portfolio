let i = 0; // Flag for navigation; 0 = hidden, 1 = visible
let navInput = document.getElementById("nav-btn"); // We need to parse inputs to our nav toggle

// Toggle navigation visibility
function toggleNav()
{
  if (i == 0)
  {
    document.getElementById("nav").style.height = "100%";
    document.getElementById("nav").style.padding = "4.5em 0 0 0";
    //document.getElementById("notnav-wrapper").style.marginLeft = "250px";
    i = 1;
  }
  else
  {
    document.getElementById("nav").style.height = "0%";
    document.getElementById("nav").style.padding = "0";
    //document.getElementById("notnav-wrapper").style.marginLeft= "0";
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
