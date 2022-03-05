fetch('../assets/articles.json', {
    method: 'GET'
})
    .then(response => {
        response.json().then((json) => {
            renderPage(json.articles)
        })
    })
    .catch(error => console.error('error:', error))





