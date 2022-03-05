const sidebarPopular = document.getElementById('sidebar__popular')

function renderSideBar(data) {
    data.forEach(e => {
        if (e.popularity >= 3) {
            //creating element with the header from the article
            let li = document.createElement('li')
            li.className = 'sidebar__element'

            let sidebarItem = document.createElement('a')
            sidebarItem.classList.add('sidebar__item', 'grid')
            sidebarItem.href = 'article.html'
            sidebarItem.onclick = function () {
                window.localStorage.setItem('article', JSON.stringify(e))
            }
            //adding image
            let img = document.createElement('img')
            img.className = ('sidebar__img')
            img.alt = 'popular article image'
            img.src = e.img1
            //adding title
            let title = document.createElement('h5')
            title.className = 'sidebar__text'
            title.textContent = e.title

            //appending everything into DOM
            // li.appendChild(sidebarPopular)
            sidebarPopular.appendChild(li)
            li.appendChild(sidebarItem)
            sidebarItem.appendChild(img)
            sidebarItem.appendChild(title)
        }
    })
}