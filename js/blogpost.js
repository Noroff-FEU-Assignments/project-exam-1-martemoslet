const blogpost = document.querySelector(".blogpost");
const queryString = document.location.search;
const title = document.querySelector(".title")

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = `https://exploreblog.martemoslet.one/wp-json/wp/v2/posts/${id}?_embed`;

async function getData() {
    try {
        const response = await fetch(url);
        const post = await response.json();
        const blogImage = post._embedded['wp:featuredmedia'][0].source_url;
        blogpost.innerHTML = "";
        title.innerHTML = "";

        blogpost.innerHTML = `<h1 class="title">${post.title.rendered}</h1>
                            <img id="blogimg" class="blogpost-image" src="${blogImage}" />
                            <div class="post">${post.content.rendered}</div>`
        title.innerHTML = `${post.title.rendered}`;                  
    }
    
   catch(error) {
        console.log("An error occorred");
        blogpost.innerHTML = displayError("An error occurred when calling the API");
    }   
}

getData();

setTimeout(() => {
    const modalContainer = document.querySelector(".modal-container");
    const modalImage = document.querySelector(".modal-image");
    const postImage = document.querySelector("#blogimg");
  
    postImage.addEventListener("click", function () {
      modalContainer.style.display = "flex";
      modalImage.src = this.src;
    });
  }, "3000");
  
  const modalContainer = document.querySelector(".modal-container");
  
  window.addEventListener("click", function (event) {
    if (event.target == modalContainer) {
      modalContainer.style.display = "none";
    }
  });