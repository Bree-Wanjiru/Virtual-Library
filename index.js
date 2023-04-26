const container=document.getElementsByClassName("books")
const list=document.getElementById("list")
const poster=document.getElementById("image")
const title=document.getElementById("title")
const author=document.getElementById("author")
const ISBN=document.getElementById("ISBN")

//add books
const b_name=document.getElementById("e_bname")
const a_name=document.getElementById("e_aname")
const isbn=document.getElementById("e_isbn")
const image=document.getElementById("e_image")
const btn=document.getElementById("add-book")

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
btn.addEventListener("click",function(event){
    event.preventDefault()
        const new_book={
          name: b_name.value,
          author: a_name.value,
          ISBN: isbn.value,
          image: image.value
        }
        fetch("http://localhost:3000/Books", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(new_book),
          })
            .then((response) => response.json())
            .then((new_book) => console.log(new_book))

})