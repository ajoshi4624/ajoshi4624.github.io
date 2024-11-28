document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".testimonial-slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let currentIndex = 0;

    const updateSlide = () => {
        slides.forEach((slide, index) => {
            slide.setAttribute("data-active", index === currentIndex ? "true" : "false");
        });
    };

    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        updateSlide();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        updateSlide();
    });

    
    updateSlide();
});
