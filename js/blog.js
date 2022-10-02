const blogContainer = document.querySelector(".blog");
const blogPosts = document.querySelector(".blogposts");

const viewmoreButton = document.querySelector("button");
let page = 0;

async function getPosts() {
	page = page + 1;

	if (page === 1) {
		blogContainer.innerHTML = "";
	}

	try {
		const url = `https://exploreblog.martemoslet.one/wp-json/wp/v2/posts?page=${page}&_embed`;

		const response = await fetch(url);
		const posts = await response.json();

		posts.forEach(function (post) {
			blogContainer.innerHTML += `
                                    <a href="blogpost.html?id=${post.id}" class="card">
                                    <div class="blog-image" style="background-image: url('${post._embedded["wp:featuredmedia"]["0"].source_url}')"></div>
                                    <h2 class="blog-title">${post.title.rendered}</h2>
                                    </a>`;
		});
	} catch (error) {
		blogContainer.innerHTML = "An error occurred when calling the API";
	}
}

viewmoreButton.addEventListener("click", getPosts);

getPosts();
