// JavaScript for Portfolio Slideshow with Auto-Switching

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

// Function to show a specific slide
function showSlide(index) {
  // Hide all slides and deactivate all dots
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });

  // Show the selected slide and activate the corresponding dot
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

// Function to move to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length; // Loop back to start after the last slide
  showSlide(currentIndex);
}

// Set up dot navigation
function currentSlide(index) {
  currentIndex = index - 1; // Offset for array index
  showSlide(currentIndex);
}

// Initialize the first slide as visible
showSlide(currentIndex);

// Set up an interval to automatically switch slides every 5 seconds (5000 milliseconds)
setInterval(nextSlide, 5000);
