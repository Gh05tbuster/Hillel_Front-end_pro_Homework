const postId = document.getElementById('postId');
const getPost = document.getElementById('getPost');
const content = document.querySelector('.content');
const comments = document.querySelector('.comments');
let currPost;
getPost.addEventListener('click', findPost);


function findPost() {
    comments.innerHTML = '';
    currPost = '';
    if (postId.value === '') {
        content.innerHTML = `<h2 class='title h2'>Enter the post number</h2>`;
        return;
    }

    const fp = new Promise(async (resolve, reject) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId.value}`);
        if (response.ok)
            resolve(response);
        else reject(`<h2 class='title h2'>Something went wrong or post does not exist</h2>`);
    });

    fp.then((response) => response.json())
        .then((json) => printPost(json.title, json.body))
        .then(() => {
            const getComments = document.getElementById('getComments');
            getComments.addEventListener('click', findComments)
        })
        .then(() => { currPost = +postId.value; })
        .catch((e) => content.innerHTML = e);
}

function findComments() {
    const fc = new Promise(async (resolve) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${currPost}`);
        if (response.ok)
            resolve(response);
        else reject(`<h2 class='title h2'>Something went wrong or post does not exist</h2>`);
    });

    fc.then((response) => response.json())
        .then((json) => printComments(json))
        .catch((e) => comments.innerHTML = e);
}

function printPost(title, text) {
    content.innerHTML = `
    <h3 class='title h3'>${title}</h3>
    <p class='text'>${text}</p>
    <button type="button" class="btn" id="getComments">Get comments</button>`;
}

function printComments(arr) {
    comments.innerHTML = `
    <h2 class='title h2'>Comments</h2>`;
    arr.forEach(comment => {
        comments.innerHTML += `
        <h3 class='title h3'>${comment.name}</h3>
        <p class='text'>${comment.body}</p>`;
    });
}