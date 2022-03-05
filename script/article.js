//article tag where the article will be rendered
let article = document.getElementById('article')
//article taken from localStorage
const articleObj = JSON.parse(window.localStorage.getItem('article'))
// link for font increase & decrease
const fontIncreaseLink = document.getElementById('font-increase')
const fontDecreaseLink = document.getElementById('font-decrease')

//calling general function from API
function renderPage(data) {
    renderSideBar(data)
    renderArticlePage(articleObj)
}

function renderArticlePage(art) {
    // title of the page
    document.title = art.title
    //
    let h1 = document.createElement('h1')
    h1.textContent = art.title

    let img = document.createElement('img')
    img.className = 'article-img'
    img.src = art.img1

    let content = document.createElement('article')
    content.innerHTML = art.content
    content.className = 'article-content'

    let author = document.createElement('div')
    author.className = 'article-author'
    author.innerText = "By " + art.author


    article.appendChild(h1)
    article.appendChild(img)
    article.appendChild(content)
    article.appendChild(author)
    //replace article.html with the article title in the browser address line, replace spaces with hyphens
    let newUrl = art.title.replace(/ /g, '-')
    window.history.pushState("object or string", "Title", newUrl);

    //font increase

    fontIncreaseLink.addEventListener("click", () => {
        content.style.fontSize = '2rem';
    })
    fontDecreaseLink.addEventListener("click", () => {
        content.style.fontSize = '1rem';
    })
}

// restore history
document.addEventListener('beforeunload', () => {
    window.history.pushState("object or string", "Title", 'article.html');
})