//The function that is used to fetch data from the json-server
function fetchData(){
    fetch("http://localhost:3000/articles")
    .then(res => res.json())
    .then(articleData => articleData.forEach(data => renderArticle(data)))
}

//This function is used to add data from json-server to DOM
function renderArticle(data){
    let content = document.createElement('div')
    content.innerHTML = `
        <h3>${data.title}</h1>
        <p>${data.content}</p>
    `
    document.getElementById('content').appendChild(content)
}

//This function invokes the fetchdata
function displaContent(){
    fetchData()
}

displaContent()