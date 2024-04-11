function attachEvents() {
    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    const loadPostsButtonElement = document.getElementById('btnLoadPosts');
    loadPostsButtonElement.addEventListener('click', loadPosts);

    const viewPostButtonElement = document.getElementById('btnViewPost');
    viewPostButtonElement.addEventListener('click', viewPost);

    let posts = {};

    async function loadPosts() {
        const selectPostsElement = document.getElementById('posts');
        const response = await fetch(postsUrl);
        posts = await response.json();
    
        Object.entries(posts).forEach(([postKey, postValue]) => {
            const postOptionElement = document.createElement('option');
            postOptionElement.textContent = postValue.title;
            postOptionElement.value = postKey;
            selectPostsElement.appendChild(postOptionElement);
        });
    }
    
    async function viewPost() {
        const selectPostsElement = document.getElementById('posts');
        const selectedPostId = selectPostsElement.value;
        let commentsList = [];

        const commentsResponse = await fetch(commentsUrl);
        const comments = await commentsResponse.json();

        for (const comment of Object.entries(comments)) {
            if (comment[1].postId === selectedPostId) {
                commentsList.push(comment[1].text);
            }
        }
        
        const selectedPost = posts[selectedPostId];
        const postTitleElement = document.getElementById('post-title');
        postTitleElement.textContent = selectedPost.title;

        const postBodyElement = document.getElementById('post-body');
        postBodyElement.textContent = selectedPost.body;

        let commentsUlElement = document.getElementById('post-comments');
        commentsUlElement.innerHTML = '';

        commentsList.forEach(comment => {
            const liElement = document.createElement('li');
            liElement.textContent = comment;
            commentsUlElement.appendChild(liElement);
        });
    }
}

attachEvents();