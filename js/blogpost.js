const blogpost = document.querySelector(".blogpost");
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://exploreblog.martemoslet.one/wp-json/wp/v2/posts/" + id;

async function getData() {
    try {
        const response = await fetch(url);
        const post = await response.json();
        blogpost.innerHTML = "";

        blogpost.innerHTML = `<h1 class="title">${post.title.rendered}</h1>
                            <div class="post">${post.content.rendered}</div>`
    }
    
   catch(error) {
        console.log("An error occorred");
        blogpost.innerHTML = displayError("An error occurred when calling the API");
    }   
}

getData();