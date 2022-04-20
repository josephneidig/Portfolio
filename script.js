let navFlag = 0; // Flag for navigation; 0 = hidden, 1 = visible
let navInput = document.getElementById("nav-btn"); // We need to parse inputs to our nav toggle

// Toggle navigation visibility
function toggleNav()
{
  if (navFlag == 0)
  {
    document.getElementById("nav").style.display = "block";
    // For some reason, the transition property from the CSS won't work unless
    // we wrap the code changing the height and padding in a setTimeout. Even
    // if we're only waiting 1 millisecond. Should investigate further but
    // functional for now. I'm losing my mind
    setTimeout(function (){
      document.getElementById("nav").style.height = "100%";
      document.getElementById("nav").style.padding = "4.5em 0 0 0";
      // If the viewport is small enough that the dropdown navigation would
      // overlap with page content, move the page content over so that there's
      // no overlap between the navigation and content
      if (window.innerWidth <= 700)
      {
        document.getElementById("notnav-wrapper").style.padding = "4em 0 0 700px";
        document.getElementById("nav").style.padding = "4.5em 700px 0 0";
        document.getElementById("overflow-fix").style.overflowY = "hidden";
      }
      else if (window.innerWidth <= 1250)
      {
        document.getElementById("notnav-wrapper").style.padding = "4em 0 0 0";
        document.getElementById("notnav-wrapper").style.margin = "0 0 0 250px";
        document.getElementById("nav").style.padding = "4.5em 0 0 0";
      }
    }, 1);
    navFlag = 1;
  }
  else
  {
    document.getElementById("nav").style.height = "0%";
    document.getElementById("nav").style.padding = "0";
    // In case we changed it earlier, reset the content margin
    document.getElementById("notnav-wrapper").style.padding = "4em 0 0 0";
    document.getElementById("notnav-wrapper").style.margin = "0";
    document.getElementById("nav").style.padding = "4.5em 0 0 0";
    document.getElementById("overflow-fix").style.overflowY = "visible";
    // Delay setting the display type to none so that the transition animation
    // still plays; it takes place over 1s, so we need to wait 1000 milliseconds
    setTimeout(function (){
      document.getElementById("nav").style.display = "none";
    }, 1000);
    navFlag = 0;
  }
}

// We add a margin to our page content if it would overlap with the navigation
// whenever we toggle the navigation, but we should also do the same thing
// if the viewport is resized (since we want this to act kind of like a media
// query). This function resizes the content if the viewport is small enough
// AND the navigation is up
function resizeContentListener() {
  if (window.innerWidth <= 700 && navFlag == 1)
  {
    document.getElementById("notnav-wrapper").style.padding = "4em 0 0 700px";
    document.getElementById("nav").style.padding = "4.5em 700px 0 0";
    document.getElementById("overflow-fix").style.overflowY = "hidden";
  }
  else if (window.innerWidth <= 1250 && navFlag == 1)
  {
    document.getElementById("notnav-wrapper").style.padding = "4em 0 0 0";
    document.getElementById("notnav-wrapper").style.margin = "0 0 0 250px";
    document.getElementById("nav").style.padding = "4.5em 0 0 0";
    document.getElementById("overflow-fix").style.overflowY = "visible";
  }
  else
  {
    document.getElementById("notnav-wrapper").style.padding = "4em 0 0 0";
    document.getElementById("notnav-wrapper").style.margin = "0";
    document.getElementById("nav").style.padding = "4.5em 0 0 0";
    document.getElementById("overflow-fix").style.overflowY = "visible";
  }
}

// Run our function whenever the viewport is resized
window.addEventListener('resize', resizeContentListener);

// Our nav toggle does not natively have functionality with the enter key, so
// this adds it to accomodate users who navigate via tabs & enter
navInput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    document.getElementById("nav-btn").click();
  }
});
