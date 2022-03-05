//selector for slider and sleeves items
const sliderItems = document.getElementById('slider-items')
const sleeves = document.getElementById('news-sleeves')

//variable to avoid misspelling
const news = "news"
//render the slider elements with the data from JSON
function renderSlider(data) {
    data.forEach(e => {
        if (e.category === news) {
            // create slider dive with the background image address from JSON
            let sliderItem = document.createElement('div')
            sliderItem.className = 'slider__item'
            sliderItem.style.backgroundImage = "url(" + e.img1 + ")"
            //create link with the title from JSON
            let sliderHeader = document.createElement('a')
            sliderHeader.className = 'slider__header'
            sliderHeader.textContent = e.title;
            // store the article in localStorage
            sliderHeader.onclick = function () {
                window.localStorage.setItem('article', JSON.stringify(e))
            }
            sliderHeader.href = 'article.html'

            //append the created elements to the DOM
            sliderItems.appendChild(sliderItem)
            sliderItem.appendChild(sliderHeader)
        }
    })
}

//make articles in a sleeve with the stars according to their popularity
function renderArticleSleeve(data) {
    data.forEach(data => {
        if (data.category === news) {
            //sleeve link
            let a = document.createElement('a')
            a.classList.add("sleeve", "grid")
            a.href = "article.html"
            a.onclick = function () {
                window.localStorage.setItem('article', JSON.stringify(e))
            }

            //image
            let img = document.createElement('img')
            img.className = "sleeve-img"
            img.src = data.img1
            img.alt = data.title

            //title of the sleeve article
            let title = document.createElement('h3')
            title.className = "sleeve-h3"
            title.textContent = data.title

            //div for the rating
            let stars = document.createElement('div')
            stars.classList.add('stars', 'grid')

            //author
            let author = document.createElement('p')
            author.className = "sleeve-by"
            author.textContent = "By "

            let span = document.createElement('span')
            span.textContent = data.author

            //appending alltogether to DOM
            sleeves.appendChild(a)
            a.appendChild(img)
            a.appendChild(title)
            a.appendChild(stars)
            a.appendChild(author)
            author.appendChild(span)

            //making stars according to the popularity of the article
            for (let i = 0; i < data.popularity; i++) {
                let star = document.createElement('p')
                star.classList.add("fa", "fa-star")
                stars.appendChild(star)
            }
            //empty stars to make the rating out of five
            for (let i = 0; i < 5 - data.popularity; i++) {
                let star = document.createElement('p')
                star.classList.add("fa", "fa-star-o")
                stars.appendChild(star)
            }
        }
    })
}

//render all the elements
function renderPage(data) {
    renderSideBar(data)
    renderSlider(data)
    renderArticleSleeve(data)
}

//when content is loaded connect with the slider library
window.onload = function () {
    const slider = new ChiefSlider('.slider', {
        loop: true,
        autoplay: true,
        interval: 4000
    });
};
