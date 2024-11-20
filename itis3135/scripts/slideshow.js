// Declare the slideIndex variable at the top before it's used
let slideIndex = 1;

// Function to show the slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let thumbnails = document.getElementsByClassName("thumbnail");
    let captionText = document.getElementById("caption");

    // If the slideIndex is out of bounds, reset it
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove "active" class from all thumbnails
    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("active");
    }

    // Show the selected slide
    slides[slideIndex - 1].style.display = "block";
    
    // Set the caption text for the current slide
    captionText.innerHTML = slides[slideIndex - 1].getElementsByClassName("caption")[0].innerHTML;

    // Highlight the corresponding thumbnail
    thumbnails[slideIndex - 1].classList.add("active");
}

// Initialize slideIndex and call showSlides to display the first slide
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
