const blogList = document.getElementById('blog-list');
const searchInput = document.getElementById('search');
const postForm = document.getElementById('post-form');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const categoryInput = document.getElementById('category');

// Initial blog posts
let posts = [
  {
    title: "Embracing JavaScript",
    content: "JavaScript adds life to your web pages. Let's explore its magic...",
    category: "Programming"
  },
  {
    title: "My Design Journey",
    content: "It all began with color palettes and Figma screens...",
    category: "Personal"
  },
  {
    title: "Best Violet Color Schemes",
    content: "If you're obsessed with purple, here's how to design around it...",
    category: "Design"
  }
];

// Display posts
function displayPosts(postArray) {
  blogList.innerHTML = "";
  postArray.forEach(post => {
    const card = document.createElement('div');
    card.className = "card";
    card.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content.slice(0, 100)}...</p>
      <small>Category: ${post.category}</small>
    `;
    blogList.appendChild(card);
  });
}

// Filter posts by search
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = posts.filter(post =>
    post.title.toLowerCase().includes(query) ||
    post.content.toLowerCase().includes(query) ||
    post.category.toLowerCase().includes(query)
  );
  displayPosts(filtered);
});

// Add new post
postForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const newPost = {
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
    category: categoryInput.value.trim()
  };

  if (newPost.title && newPost.content && newPost.category) {
    posts.unshift(newPost); // Add to top
    displayPosts(posts);
    postForm.reset(); // Clear the form
  } else {
    alert("Please fill in all fields.");
  }
});

// Initial render
displayPosts(posts);