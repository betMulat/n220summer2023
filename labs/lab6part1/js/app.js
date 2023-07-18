let readDiv = document.getElementById("readDiv")
//set the content of the book div
let books = [
    {title: "The sun and her flower", author: "Rupi Kaur", page: 256},
    {title: "Healing through words", author: "Rupi Kaur", page: 320},
    {title: "Gone Girl", author: "Gillian Flynn", page: 422},
    {title: "The Alchemist", author: "Paulo Coelho", page: 208},
    {title: "Tower In The Sky", author: "Hiwot Teffera", page: 437}
];
//looping through each itteration or books
for(let i=0; i<books.length; i++) {
    let book = books[i];
    //creating a new div for the books 
    let newE1 = document.createElement("div");
    newE1.innerHTML = "The title is "+ books[i].title +", the auther is  "+ books[i].author +", and it has  "+books[i].page + "pages.";
    newE1.classList.add("score");


    //apply the hightlight class if the page number is less than 300
    if(book.page < 300){
        newE1.classList.add("highlight");
        }
    //append the book div to the book list 
    readDiv.appendChild(newE1);
    
   
    
}


