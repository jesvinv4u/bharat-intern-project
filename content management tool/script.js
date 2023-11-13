// Sample data structure for posts
let posts = [];

// Function to display posts
function displayPosts() {
    const postsSection = document.getElementById('posts');
    postsSection.innerHTML = '';

    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <button onclick="editPost(${index})">Edit</button>
            <button onclick="deletePost(${index})">Delete</button>
        `;
        postsSection.appendChild(postDiv);
    });
}

// Function to add a new post
function addPost() {
    const titleInput = document.getElementById('postTitle');
    const contentInput = document.getElementById('postContent');

    const title = titleInput.value;
    const content = contentInput.value;

    if (title && content) {
        const newPost = { title, content };
        posts.push(newPost);
        displayPosts();
        
        // Clear form inputs
        titleInput.value = '';
        contentInput.value = '';
    } else {
        alert('Please enter both title and content.');
    }
}

// Function to edit a post
function editPost(index) {
    // For simplicity, you can implement a prompt or use a form to edit the post.
    const newTitle = prompt('Enter new title:', posts[index].title);
    const newContent = prompt('Enter new content:', posts[index].content);

    if (newTitle !== null && newContent !== null) {
        posts[index].title = newTitle;
        posts[index].content = newContent;
        displayPosts();
    }
}

// Function to delete a post
function deletePost(index) {
    const confirmDelete = confirm('Are you sure you want to delete this post?');

    if (confirmDelete) {
        posts.splice(index, 1);
        displayPosts();
    }
}

// Initial display of posts
displayPosts();
