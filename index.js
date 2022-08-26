//Form submit Event Listener
document.getElementById('form').addEventListener('submit', userInput)

// form that takes in user input 
function userInput(e){
    e.preventDefault();
    let sheepObj = {
        title:e.target.article_title.value,
        image_url:e.target.url.value,
        content:e.target.description.value
    }
    postSheep(sheepObj) //Up dates out json file using POST method
    renderArticle(sheepObj) //To display it on our homepage
}

//This function is used to add items in the database
function postSheep(sheepObj){
    fetch("http://localhost:3000/articles", {
        method:"POST",
        headers: {
            "content-type":"application/json",
        },
        body:JSON.stringify(sheepObj)
    })
    .then(res => res.json())
    .then(sheep => console.log(sheep))
}

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
        <img class="img" src="${data.image_url}" />
        <p>${data.content}</p>
    `
    document.getElementById('content').appendChild(content)
}

//This function invokes the fetchdata
function displaContent(){
    fetchData()
}

displaContent()