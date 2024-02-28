const images = [
    '1.webp',
    '2.webp',
    '3.webp',
    '4.webp',
    '5.webp',
    '6.webp',
    '7.webp',
];
const imageBox = document.querySelector('.basic-image-slider .image-box');
const dots = document.querySelector('.basic-image-slider .basic-slider-dots');
dots.addEventListener('click', (event) => {
    const classes = event.target.classList;
    if (!classes.contains('dot')) return;
    const dotId = +event.target.id.split('_')[1];
    swipeOn(dotId);
})

createCarousel(images);
const carouselImages = document.querySelectorAll('.basic-image-slider .image-box .carousel-image');
let activeImg = 0;
let activeDot = document.getElementById(`dot_${activeImg}`);
activeDot.classList.add('active');

const prevBtn = document.querySelector('.basic-image-slider .prev');
prevBtn.addEventListener('click', () => swipeOn(activeImg - 1));
const nextBtn = document.querySelector('.basic-image-slider .next');
nextBtn.addEventListener('click', () => swipeOn(activeImg + 1));
showAndHideArrows(activeImg);

function createCarousel(arr) {
    arr.forEach((img, i) => {
        imageBox.innerHTML += `
        <img src="./img/laptop/${img}" alt="" class="carousel-image" id="ci_${i}">`;
        dots.innerHTML += `
        <div class="dot" id="dot_${i}"></div>`;
    });
}

function swipeOn(pos) {
    activeImg = pos;
    carouselImages.forEach(image => {
        image.style.transform = `translateX(calc(-100% * ${activeImg} - 30px * ${activeImg}))`;
    });
    showAndHideArrows(pos);
    swapActiveDot();
}

function showAndHideArrows(pos) {
    if (pos === 0) {
        prevBtn.classList.add('invisible');
        prevBtn.style.pointerEvents = 'none';
    } else {
        prevBtn.classList.remove('invisible');
        prevBtn.style.pointerEvents = 'auto';
    }

    if (pos === images.length - 1) {
        nextBtn.classList.add('invisible');
        nextBtn.style.pointerEvents = 'none';
    } else {
        nextBtn.classList.remove('invisible');
        nextBtn.style.pointerEvents = 'auto';
    }
}

function swapActiveDot() {
    activeDot.classList.remove('active');
    activeDot = document.getElementById(`dot_${activeImg}`);
    activeDot.classList.add('active');
}