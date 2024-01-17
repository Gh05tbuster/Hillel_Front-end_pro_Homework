const reviews = [{
    id: 473947,
    name: 'John Deere',
    text: 'Bought my CAT three months ago. And damn it\'s awesome! We have a lot of fun together.',
    photoURL: 'https://ru.xchyexcavators.com/uploads/202237676/caterpillar-cat349-excavator56186791431.jpg',
},
{
    id: 474032,
    name: 'Dan Red',
    text: 'Кіт чудовий, дуже ласкавий, але жере, падлюка, як лев!',
    photoURL: 'https://static.boredpanda.com/blog/wp-content/uploads/2015/11/maine-coon-cats-24__605.jpg',
},
{
    id: 474184,
    name: 'Max  Payne',
    text: 'Кажуть, що у нас із Ґремліном є щось спільне. Це правда. Ми обидва бомбезні!',
    photoURL: 'https://images.squarespace-cdn.com/content/v1/5401104ae4b04c639f3ff489/c5c933e7-63b8-4ae0-9c6d-8fc9abb17363/Maurice+Hines+Photo+small.jpg',
}];

let testimonials = document.querySelector('#testimonials');

reviews.forEach(r => {
    let review = document.createElement('div');
    review.className = 'review';
    review.id = `review${r.id}`;
    review.innerHTML = `
    <h3 class='title'>${r.name}</h3>
    <p class='text'>${r.text}</p> 
    <img src='${r.photoURL}' alt=''>`;
    testimonials.prepend(review);
});
