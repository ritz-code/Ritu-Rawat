/* When the user scrolls the page, executes stickyNav function */
window.onscroll = function() {stickyNav()};

var navbar = document.querySelector("#navbar");

/* Get the offset position of the navbar */
var sticky = navbar.offsetTop;

/* Adds the sticky class to the navbar when we reach it's scroll position */
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


