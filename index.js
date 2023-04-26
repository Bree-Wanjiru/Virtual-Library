const container=document.getElementsByClassName("books")
const list=document.getElementById("list")
const poster=document.getElementById("image")
const title=document.getElementById("title")
const author=document.getElementById("author")
const ISBN=document.getElementById("ISBN")


fetch(" http://localhost:3000/Books")
.then(response =>response.json())
.then(data =>{
    
        data.map(function(dt){
            
            const book=document.createElement("li")
            book.innerHTML=dt.name
            list.appendChild(book)
            book.addEventListener("click",function(){
            poster.src=dt.image
            title.innerHTML=dt.name
            author.innerHTML=dt.author
            ISBN.innerHTML=dt.ISBN
            })
        })
    
   
})