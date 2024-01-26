const emotes = document.querySelector('#rateBox .emotes');
emotes.addEventListener('click', vote);

function vote(event) {
    const target = event.target;
    if (target.tagName !== 'IMG') return;
    const count = document.querySelector(`#rateBox .emotes #${target.id} + .count`);
    count.innerHTML = +count.innerHTML + 1;
}