const slideshow = document.querySelector('.slideshow');
const mainSlide = document.querySelector('.main-slide');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;


const updateSlide = () => {
    mainSlide.src = thumbnails[currentIndex].src;

    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('thumbnail-active', index === currentIndex);
    });
};


const showNextSlide = () => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    updateSlide();
};


const showPrevSlide = () => {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updateSlide();
};


thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateSlide();
    });
});


nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);
