const url = "https://exploreblog.martemoslet.one/wp-json/wp/v2/posts/46?_embed";
const slideContainer = document.querySelector("#slide");


async function getSlider() {

    try {
        const response = await fetch(url);
        const post = await response.json();
        const slideImage = post._embedded['wp:featuredmedia'][0].source_url;

        slideContainer.innerHTML += `
                                <img id="slideimg" class="slide-image" src="${slideImage}" />
                                <h2 class="blog-title">${post.title.rendered}</h2>
                                `;
    }
    catch(error) {
        console.log(error);
    }

}

getSlider();