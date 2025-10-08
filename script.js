// Load posts from localStorage and show on homepage
document.addEventListener("DOMContentLoaded", () => {
  const postSection = document.getElementById("blog");
  if (!postSection) return;

  const posts = JSON.parse(localStorage.getItem("posts") || "[]");

  posts.forEach(post => {
    const card = document.createElement("div");
    card.className = "blog-card";
    card.innerHTML = `
      <img src="${post.media[0]?.url || 'assets/sample-photo.jpg'}" alt="Thumbnail" />
      <div>
        <h3>${post.title}</h3>
        <a href="blog1.html">Read More</a>
        <div>
          <button onclick="likePost(${post.id})">👍 Like</button>
          <span id="like-${post.id}">0</span>
          <button onclick="sharePost('${post.title}')">🔗 Share</button>
        </div>
      </div>
    `;
    postSection.appendChild(card);
  });
});

// Like counter
function likePost(id) {
  const countSpan = document.getElementById(`like-${id}`);
  let count = parseInt(countSpan.innerText);
  countSpan.innerText = count + 1;
}

// Share button
function sharePost(title) {
  const shareText = `Check out this post: ${title}`;
  navigator.clipboard.writeText(shareText);
  alert("Post link copied to clipboard!");
}
