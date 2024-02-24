const numberOfImages = 7;

const imageBox = document.querySelector('.basic-image-slider .image-box');
for (let i = 1; i <= numberOfImages; i++) {
    imageBox.innerHTML += `
    <img src="./img/laptop/${i}.webp" alt="" class="carousel-image" id="ci_${i}">`;
}

const carouselImages = document.querySelectorAll('.basic-image-slider .image-box .carousel-image');
carouselImages.forEach(image => image.classList.add('invisible'));
let activeImg = 0;
showRelevantImages(carouselImages);

const prevBtn = document.querySelector('.basic-image-slider .prev');
prevBtn.addEventListener('click', swipeBackward);
const nextBtn = document.querySelector('.basic-image-slider .next');
nextBtn.addEventListener('click', swipeForward);
showHideButtons();

function swipeForward() {
    activeImg++;
    carouselImages.forEach(image => {
        image.style.transform = `translateX(calc(-100% * ${activeImg}))`;
    });
    showRelevantImages(carouselImages);
    showHideButtons();
}

function swipeBackward() {
    activeImg--;
    carouselImages.forEach(image => {
        image.style.transform = `translateX(calc(-100% * ${activeImg}))`;
    });
    showRelevantImages(carouselImages);
    showHideButtons();
}

function showRelevantImages(carouselImages) {
    carouselImages.forEach(image => image.classList.add('invisible'));
    if (activeImg > 0)
        carouselImages[activeImg - 1].classList.remove('invisible');
    carouselImages[activeImg].classList.remove('invisible');
    if (activeImg < numberOfImages - 1)
        carouselImages[activeImg + 1].classList.remove('invisible');
}

function showHideButtons() {
    if (activeImg === 0) {
        prevBtn.classList.add('invisible');
        prevBtn.style.pointerEvents = 'none';
    } else {
        prevBtn.classList.remove('invisible');
        prevBtn.style.pointerEvents = 'auto';
    }

    if (activeImg === numberOfImages - 1) {
        nextBtn.classList.add('invisible');
        nextBtn.style.pointerEvents = 'none';
    } else {
        nextBtn.classList.remove('invisible');
        nextBtn.style.pointerEvents = 'auto';
    }
}

console.log('');
