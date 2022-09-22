const urltwo = "https://exploreblog.martemoslet.one/wp-json/wp/v2/posts/43?_embed";
const slideContainerTwo = document.querySelector("#slidetwo");


async function getSlider() {

    try {
        const response = await fetch(urltwo);
        const post = await response.json();
        const slideImage = post._embedded['wp:featuredmedia'][0].source_url;

        slideContainerTwo.innerHTML += `
                                <a href="blogpost.html?id=${post.id}">
                                <img id="slideimg" class="slide-image" src="${slideImage}" />
                                <h2 class="blog-title">${post.title.rendered}</h2>
                                </a>`;
    }
    catch(error) {
        console.log(error);
    }

}

getSlider();