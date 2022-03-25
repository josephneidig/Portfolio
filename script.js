var i = 0; // Flag for navigation; 0 = hidden, 1 = visible

// Toggle navigation visibility
function toggleNav()
{
  if (i == 0)
  {
    document.getElementById("nav").style.height = "100%";
    document.getElementById("nav").style.padding = "5em 0 0 0";
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
