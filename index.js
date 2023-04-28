//display books
const container=document.getElementsByClassName("books")
const list=document.getElementById("list")
const poster=document.getElementById("image")
const title=document.getElementById("title")
const author=document.getElementById("author")
const ISBN=document.getElementById("ISBN")

//display authors
const auth_list=document.getElementById("author_list")
const name_auth=document.getElementById("author_name")
const review_auth=document.getElementById("review_author")

//add books
const b_name=document.getElementById("e_bname")
const a_name=document.getElementById("e_aname")
const isbn=document.getElementById("e_isbn")
const image=document.getElementById("e_image")
const btn=document.getElementById("add-book")

//add author
const auth_name=document.getElementById("e_authname")
const auth_review=document.getElementById("e_authreview")
const button=document.getElementById("add-author")

//get books
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

//post books
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

//get authors
fetch(" http://localhost:3000/Authors")
.then(response =>response.json())
.then(auth_data =>{
    
        auth_data.map(function(dt){
            
            const author=document.createElement("li")
            author.innerHTML=dt.author_name
            auth_list.appendChild(author)
            author.addEventListener("click",function(){
            name_auth.innerHTML=dt.author_name
            review_auth.innerHTML=dt.author_review
            })
        })
    
   
})

//post authors
button.addEventListener("click",function(event){
    event.preventDefault()
        const new_author={
          author_name: auth_name.value,
          author_review: auth_review.value,
          
        }
        fetch("http://localhost:3000/Authors", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(new_author),
          })
            .then((response) => response.json())
            .then((new_author) => console.log(new_author))

})

// put author
fetch('http://localhost:3000/Authors/4', {
    method: "PUT",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(
        { author_name: "Breanna",
        author_review: "best selling author!!"}
    )
})
.then(res => {
    if (res.ok) { console.log("HTTP request successful") }
    else { console.log("HTTP request unsuccessful") }
    return res
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error))

//put book
fetch('http://localhost:3000/Books/5', {
    method: "PUT",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(
        { name: "Surrounded by idiots",
          author: "Thomas",
          ISBN:"57349304053",
          image:"Images/Book5(put).jpeg"
        }
    )
})
.then(res => {
    if (res.ok) { console.log("HTTP request successful") }
    else { console.log("HTTP request unsuccessful") }
    return res
})
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error))