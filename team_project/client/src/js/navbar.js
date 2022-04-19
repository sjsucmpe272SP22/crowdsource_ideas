// Get the container element
var navbar = document.getElementById("navbar");

// Get all buttons inside the container
var btns = navbar.getElementsByTagName("li");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current.classList.remove('active')
    this.className += "active";
  });
}