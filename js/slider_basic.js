const numberOfImages = 7;
const imageBox = document.querySelector('.basic-image-slider .image-box');
const dots = document.querySelector('.basic-image-slider .basic-slider-dots');
dots.addEventListener('click', (event) => {
    const classes = event.target.classList;
    if (!classes.contains('dot')) return;
    const dotId = event.target.id.split('_')[1];
    swipeOn(dotId - 1);
})

createCarousel(numberOfImages);
const carouselImages = document.querySelectorAll('.basic-image-slider .image-box .carousel-image');
let activeImg = 0;
let activeDot = document.getElementById(`dot_${activeImg + 1}`);
activeDot.classList.add('active');

const prevBtn = document.querySelector('.basic-image-slider .prev');
prevBtn.addEventListener('click', () => swipeOn(activeImg - 1));
const nextBtn = document.querySelector('.basic-image-slider .next');
nextBtn.addEventListener('click', () => swipeOn(activeImg + 1));
showAndHideArrows();

function createCarousel(n) {
    for (let i = 1; i <= n; i++) {
        imageBox.innerHTML += `
        <img src="./img/laptop/${i}.webp" alt="" class="carousel-image" id="ci_${i - 1}">`;
        dots.innerHTML += `
        <div class="dot" id="dot_${i}"></div>`;
    }
}

function swipeOn(pos) {
    activeImg = pos;
    carouselImages.forEach(image => {
        image.style.transform = `translateX(calc(-100% * ${activeImg} - 30px * ${activeImg}))`;
    });
    showAndHideArrows();
    swapActiveDot();
}

function showAndHideArrows() {
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

function swapActiveDot() {
    activeDot.classList.remove('active');
    activeDot = document.getElementById(`dot_${activeImg + 1}`);
    activeDot.classList.add('active');
}