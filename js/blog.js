const baseUrl = "https://exploreblog.martemoslet.one/wp-json/wp/v2/posts?_embed";
const blogContainer = document.querySelector(".blog");

async function getBlog(url){
    const response = await fetch(url);
    const posts = await response.json();
    posts.forEach(function(post){
        blogContainer.innerHTML += `
        <a href="blogpost.html?id=${post.id}" class="card">
        <div class="blog-image" style="background-image: url('${post._embedded['wp:featuredmedia']['0'].source_url}')"></div>
        <h2 class="blog-title">${post.title.rendered}</h2>
        </a>`;
    })
}

getBlog(baseUrl);