//Navbar amnimation
window.onscroll = function()
{myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction(){
  if(window.pageYOffset >= sticky){
    navbar.classList.add("sticky")
  } else{
    navbar.classList.remove("sticky");
  }
  if(window.pageYOffset >= sticky){
    navbar.classList.add("inView")
  } else{
    navbar.classList.remove("inView");
  }
}

//Progress animation
