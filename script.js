// Declarations
const mobileNav = document.querySelector(".mobile-nav");
const menuBar = document.querySelector(".menubar");
const header = document.querySelector("header");

mobileNav.addEventListener("click", function () {
  if (menuBar.style.display == "" || menuBar.style.display == "none") {
    menuBar.style.display = "flex";
  } else {
    menuBar.style.display = "none";
  }
});

window.onresize = function () {
  if (window.innerWidth > 768) {
    menuBar.style.display = "flex";
  } else {
    menuBar.style.display = "none";
  }
};

// Hide-Unhide feature on Navbar
let initialValue = 0; // Taking initial value on 'scrollY'
window.onscroll = function (e) {
  // if scroll, scroll event will be fired
  if (initialValue < window.scrollY) {
    // Compare the initial and present value
    header.className = "hide"; // add calss to 'header' element
    if (window.scrollY === 0) {
      // User is at the top, fire your event
      header.style.background = "#111a28";
    }
    if (window.innerWidth < 768) {
      menuBar.style.display = "none";
    }
  } else {
    header.className = ""; // remove class if have
    header.className = "compaq"; // add new class
  }
  initialValue = window.scrollY; // store the present value on 'oldscrollY'
};

window.addEventListener("scroll", function () {
  // Check if the user has scrolled to the top
  if (window.scrollY === 0) {
    // User is at the top, fire your event
    header.style.background = "#111a28";
  } else {
    // User is not at the top, hide the indicator
    header.style.background = "#1d293a";
  }
});
