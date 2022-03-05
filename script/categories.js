//get the divs of categories
const newsDiv = document.getElementById('news')
const analysisDiv = document.getElementById('analysis')

//variables to avoid mistakes
const news = "news"
const analysis = "analysis"

//calling general function from API
function renderPage(data) {
    renderSideBar(data)
    renderArticleSleeve(data)
}
//divide into the categories
function renderArticleSleeve(data) {
    data.forEach(e => {
        switch (e.category) {
            case news:
                makeSleeve(e, newsDiv)
                break
            case analysis:
                makeSleeve(e, analysisDiv)
                break
        }
    })
}
//create the sleeve with the article info
function makeSleeve(data, div) {
    let a = document.createElement('a')
    a.classList.add("sleeve", "grid")
    a.href = "article.html"
    a.onclick = function () {
        window.localStorage.setItem('article', JSON.stringify(e))
    }

    let img = document.createElement('img')
    img.className = "sleeve-img"
    img.src = data.img1
    img.alt = data.title

    let title = document.createElement('h3')
    title.className = "sleeve-h3"
    title.textContent = data.title

    let author = document.createElement('p')
    author.className = "sleeve-by"
    author.textContent = "By "

    let span = document.createElement('span')
    span.textContent = data.author

    div.appendChild(a)
    a.appendChild(img)
    a.appendChild(title)
    a.appendChild(author)
    author.appendChild(span)
}