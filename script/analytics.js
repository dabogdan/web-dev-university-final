//selector for sleeves items and button
const sleeves = document.getElementById('analytics-sleeves')
const sleeveText = document.getElementById("sleeve-text")

//variable to avoid misspelling
const analysis = "analysis"

//calling general function from API
function renderPage(data) {
    renderSideBar(data)
    renderArticleSleeve(data)
}

//make articles in a sleeve with the stars according to their popularity
function renderArticleSleeve(data) {
    data.forEach(data => {
        if (data.category === analysis) {
            //sleeve div
            let sleeve = document.createElement('div')
            sleeve.classList.add("sleeve", "grid")

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
            let readMoreBtn = document.createElement('button')
            readMoreBtn.classList.add("orange-button", "read-more-btn")
            readMoreBtn.textContent = "Read more"
            // event handler in case user clicks "read more"
            readMoreBtn.onclick = function (){
                // remove btn "read more"
                this.remove()
                sleeveText.style.display = 'block'

                //creating "Read less" button
                let readLessBtn = document.createElement("button")
                readLessBtn.classList.add("orange-button", "read-less-btn")
                readLessBtn.textContent = "Read less"
                this.appendChild(readLessBtn)
                //analogous function for "read less"
                readLessBtn.onclick = function (){
                    this.remove()
                    sleeveText.style.display = 'none'
                }
            };

            //appending altogether to DOM
            sleeves.appendChild(sleeve)
            sleeve.appendChild(img)
            sleeve.appendChild(title)
            sleeve.appendChild(stars)
            sleeve.appendChild(readMoreBtn)

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

            // adding the text, but with the display:none
            let sleeveText = document.createElement('article')
            sleeveText.innerHTML = data.content
            sleeveText.className = "sleeve-text"
            sleeveText.style.display = 'none'
            //appending the text to the sleeve
            sleeves.appendChild(sleeveText)
        }
    })
}
