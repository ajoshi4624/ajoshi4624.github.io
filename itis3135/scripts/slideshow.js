// Initialize the slide index
let slideIndex = 0;

// Function to show slides
function showSlides(index) {
    const slides = document.querySelectorAll(".slides");

    // Wrap around logic for index
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    // Hide all slides and show the current one
    slides.forEach((slide) => (slide.style.display = "none"));
    slides[slideIndex].style.display = "block";
}

// Function to change slides on button click
function changeSlide(step) {
    showSlides(slideIndex + step);
}

// Event listeners for navigation buttons
document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
document.querySelector(".next").addEventListener("click", () => changeSlide(1));

// Initialize the slideshow
showSlides(slideIndex);
