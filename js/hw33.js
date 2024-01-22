const header = document.querySelector('.title.h2');
const gift = document.querySelector('#gift');
const btn = document.querySelector('#openBox');

btn.addEventListener('click', openBox);

function openBox() {
    const rnd_1_9 = Math.floor(Math.random() * 8 + 1);
    const newMessage = rnd_1_9 % 3 === 0 ? `Congratulations! You've got a cat!` : 'Better luck next time!'
    header.innerHTML = 'Opening...'
    gift.setAttribute('src', './images/0.gif')
    setTimeout(() => {
        gift.setAttribute('src', `./images/${rnd_1_9}.jpg`);
        header.innerHTML = newMessage;
    }, 3000);
}