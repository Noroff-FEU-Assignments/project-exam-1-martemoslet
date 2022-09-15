const blogpost = document.querySelector(".blogpost");
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = `https://exploreblog.martemoslet.one/wp-json/wp/v2/posts/${id}?_embed`;

async function getData() {
    try {
        const response = await fetch(url);
        const post = await response.json();
        blogpost.innerHTML = "";

        blogpost.innerHTML = `<h1 class="title">${post.title.rendered}</h1>
                            <div id="blogimg" class="blogpost-image" style="background-image: url('${post._embedded['wp:featuredmedia'][0].source_url}')"></div
                            <div class="post">${post.content.rendered}</div>`
    }
    
   catch(error) {
        console.log("An error occorred");
        blogpost.innerHTML = displayError("An error occurred when calling the API");
    }   
}

getData();

const originalImage = document.querySelector("#blogimg");

  originalImage.addEventListener("click", function () {
    modalImage.src = this.src;
  });


setTimeout(() => {
    const modalContainer = document.querySelector(".modal");
    const modalContent = document.querySelector(".modalContent");
    const postImage = document.querySelector("#modalImage");

    postImage.addEventListener("click", function () {
        modalContainer.style.display = "flex";
        modalContent.src = this.src;
    });
}, 1000);

