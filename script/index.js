//select divs for articles
const newsDiv = document.getElementById('news')
const analysisDiv = document.getElementById('analysis')
const categoryLayoutDivs = document.querySelectorAll('.category-layout')

//variables to avoid mistakes
const news = "news"
const analysis = "analysis"
//array used later for link "show more"
let categories = []

//calling general function from API
function renderPage(data){
    renderArticleCard(data)
    renderSideBar(data)
}

// loop through the data and allocate cards accordingly
function renderArticleCard(data) {
    data.forEach(e => {
        switch (e.category) {
            case news:
                makeCard(e, newsDiv)
                break
            case analysis:
                makeCard(e, analysisDiv)
                break
        }
        if (!categories.includes(e.category)) {
            categories.push(e.category)
        }
    })
    createShowMoreLink()
}

// create card layout
function makeCard(e, div) {
    let card = document.createElement('div')
    card.className = "article-card"

    let cardLink = document.createElement('a')
    cardLink.href = 'article.html'
    cardLink.setAttribute('pageLink',  e.title);
    //pass the article object to localStorage, where it will be then taken for rendering on article.html
    cardLink.onclick = function () {
        window.localStorage.setItem('article', JSON.stringify(e))
    }

    let cardImg = document.createElement('img')
    cardImg.setAttribute('alt', 'news-picture')
    cardImg.src = e.img1

    let cardCategory = document.createElement('div')
    cardCategory.id = 'card-category'
    cardCategory.className = 'card-category'
    cardCategory.textContent = e.category

    let cardText = document.createElement('div')
    cardText.className = 'card-shorts'

    let cardTitle = document.createElement('h2')
    cardTitle.textContent = e.title

    let cardIntro = document.createElement('p')
    cardIntro.className = 'intro'
    cardIntro.innerHTML = e.content.toString().substr(0, 150) + '...'

    let cardAuthor = document.createElement('p')
    cardAuthor.className = 'author'
    cardAuthor.textContent = 'By '

    let cardAuthorSpan = document.createElement('span')
    cardAuthorSpan.className = 'author-by'
    cardAuthorSpan.textContent = e.author

    div.appendChild(card)
    card.appendChild(cardLink)
    cardLink.appendChild(cardImg)
    cardLink.appendChild(cardCategory)
    cardLink.appendChild(cardText)
    cardText.appendChild(cardTitle)
    cardText.appendChild(cardIntro)
    cardText.appendChild(cardAuthor)
    cardAuthor.appendChild(cardAuthorSpan)
}

function createShowMoreLink() {
    categoryLayoutDivs.forEach((e, i) => {
        let moreLink = document.createElement('p')
        moreLink.className = 'show-more'
        moreLink.textContent = "Show more..."
        e.appendChild(moreLink)
        //click eventlistener
        moreLink.addEventListener('click', () => {
            //gather collection of all cards
            let cardCollection = e.querySelector("#" + categories[i].toString()).children
            //traverse cards and change their display to block
            for (let j = 0; j < cardCollection.length; j++) {
                if(cardCollection[j].style.display = 'none') {
                    cardCollection[j].style.display = 'block'
                }
            }
            //show link should disappear once clicked
            moreLink.style.display = 'none'
        })
    })
}