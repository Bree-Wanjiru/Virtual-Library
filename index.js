const container=document.getElementsByClassName("books")
const list=document.getElementById("list")
fetch(" http://localhost:3000/Books")
.then(response =>response.json())
.then(data =>{
    data.map(function(dt){
        const book=document.createElement("li")
        book.innerHTML=dt.name
        list.appendChild(book)
    })
})