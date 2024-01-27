const postId = document.getElementById('postId');
const getPost = document.getElementById('getPost');
let currPost;
const getComments = document.getElementById('getComments');
const content = document.querySelector('.content');

getPost.addEventListener('click', findPost);
getComments.addEventListener('click', findComments);

function findPost() {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId.value}`)
        .then((response) => response.json())
        .then((json) => printPost(json.title, json.body))
        .catch((error) => console.log(`Something went wrong (${error})`));
    currPost = postId.value;
}

function findComments() {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${currPost}`)
        .then((response) => response.json())
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
    arr.forEach(comment => {
        comments.innerHTML += `
        <h3 class='title h3'>${comment.name}</h3>
        <p class='text'>${comment.body}</p>`;
    });
    content.append(comments);
}