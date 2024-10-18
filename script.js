// russian Roulette function for picture
let currentSlide = 0;
const slideshow = document.getElementById("slideshow");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Clone the first slide and append it to the end
const firstSlideClone = slides[0].cloneNode(true);
slideshow.appendChild(firstSlideClone);

// Function to move the slides
function moveSlide(TimeInterval) {
  currentSlide++;

  slideshow.style.transition = "transform 0.5s ease"; // Enable transition for sliding effect
  slideshow.style.transform = `translateX(-${currentSlide * 100}%)`;

  // If we've reached the end (the clone), reset to the real first slide without animation
  if (currentSlide === totalSlides) {
    setTimeout(() => {
      slideshow.style.transition = "none"; // Disable transition to avoid visual jump
      slideshow.style.transform = `translateX(0)`; // Jump back to the first real slide
      currentSlide = 0;
    }, 500); // Wait for the transition to finish (500ms)
  }
}

// Auto slide every 3 seconds
setInterval(() => {
  moveSlide(1);
}, 100000);

/*
 *************** SCROLLING ANIMATION ***************
 */
document.querySelectorAll(".sticky-nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetID = this.getAttribute("href");
    const targetSection = document.querySelector(targetID);
    const targetPosition = targetSection.offsetTop;

    slowScrollTo(targetPosition, 500); // 2000ms = 2 seconds
  });
});

function slowScrollTo(targetPosition, duration) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);

    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
const links = document.querySelectorAll(".nav-link");

// Add click event listener to each link
links.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all links
    links.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the clicked link
    this.classList.add("active");
  });
});
// change background color navigation
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");

  // Check scroll position
  if (window.scrollY > 50) {
    // Add a class to change background color and add a smooth transition effect
    navbar.style.backgroundColor = "#4e7966"; // New background color
    navbar.style.transition =
      "background-color 0.5s ease, box-shadow 0.5s ease"; // Smooth effect
    navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"; // Adding a shadow for extra effect
  } else {
    // Revert the background to transparent and remove shadow
    navbar.style.backgroundColor = "transparent"; // Original background
    navbar.style.boxShadow = "none"; // No shadow
  }
});

/*
 *************** BUTTON CLICKING SCROLLING ANIMATION ***************
 */
document.getElementById("what").addEventListener("click", function () {
  document.getElementById("section2").scrollIntoView({ behavior: "smooth" });
});
/*
 *************** VIEW MORE INFO ABOUT FREQUENTLY ASKED QUESTIONS ***************
 */
function toggleContent(element) {
  const content = element.querySelector(".cell-content");
  content.style.display = content.style.display === "block" ? "none" : "block";
}
/*
 *************** VIEW MORE INFO ABOUT FREQUENTLY ASKED QUESTIONS ***************
 */
function openanotherfile() {
  window.open("Login.html", "_blank");
}

function openanotherfile2() {
  window.open("admin-dashboard.html", "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
  // Get modal element
  var modal = document.getElementById("myModal");

  // Get button that opens the modal
  var btn = document.getElementById("openPopup");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
/*
 *************** ADMIN DASHBOARD ***************
 */
function showDiv(divId, element) {
  // Hide all divs
  var contentDivs = document.getElementsByClassName("content-div");
  for (var i = 0; i < contentDivs.length; i++) {
    contentDivs[i].style.display = "none";
  }

  // Show the selected div
  document.getElementById(divId).style.display = "block";

  // Remove active class from all links
  var links = document
    .getElementsByClassName("sidenav")[0]
    .getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
  }

  // Add active class to the clicked link
  element.classList.add("active");
}
