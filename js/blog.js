const blogContainer = document.querySelector(".blog");

const viewmoreButton = document.querySelector("button");
let page = 0;


async function getPosts(url){
    const response = await fetch(url);
    const posts = await response.json();
    page = page + 1;

    const url = `https://exploreblog.martemoslet.one/wp-json/wp/v2/posts?page=${page}&_embed`;


    posts.forEach(function(post){
        blogContainer.innerHTML += `
                                    <a href="blogpost.html?id=${post.id}" class="card">
                                    <div class="blog-image" style="background-image: url('${post._embedded['wp:featuredmedia']['0'].source_url}')"></div>
                                    <h2 class="blog-title">${post.title.rendered}</h2>
                                    </a>`;

    })
}

viewmoreButton.addEventListener("click", getPosts);

getPosts();