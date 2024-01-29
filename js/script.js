const postId = document.getElementById('postId');
const getPost = document.getElementById('getPost');
let currPost;
const getComments = document.getElementById('getComments');
const content = document.querySelector('.content');

getPost.addEventListener('click', findPost);
getComments.addEventListener('click', findComments);

function findPost() {
    currPost = '';
    const fp = new Promise((resolve, reject) => {
        if (postId.value >= 1 && postId.value <= 100)
            resolve(fetch(`https://jsonplaceholder.typicode.com/posts/${postId.value}`));
        else
            reject(postId.value);
    });

    fp.then((response) => response.json())
        .then((json) => printPost(json.title, json.body))
        .then(() => { currPost = +postId.value; })
        .catch((error) => console.error(`Something went wrong (${error})`));
}

function findComments() {
    const fc = new Promise((resolve, reject) => {
        if (currPost >= 1 && currPost <= 100)
            resolve(fetch(`https://jsonplaceholder.typicode.com/comments?postId=${currPost}`));
    });

    fc.then((response) => response.json())
        .then((json) => printComments(json))
        .catch((error) => console.log(`Something went wrong (${error})`));
}

function printPost(title, text) {
    content.innerHTML = `
    <h3 class='title h3'>${title}</h3>
    <p class='text'>${text}</p>`;
}

function printComments(arr) {
    const comments = document.createElement('div');
    comments.className = 'commentSection';
    comments.innerHTML = `
    <h2 class='title h2'>Comments</h2>`;
    arr.forEach(comment => {
        comments.innerHTML += `
        <h3 class='title h3'>${comment.name}</h3>
        <p class='text'>${comment.body}</p>`;
    });
    content.append(comments);
}