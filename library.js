let myLibrary = [ {
    title: "The Chronicles Of Narnia",
    author: "C.S. Lewis",
    pages: "848 pages",
    haveRead: 'read'
},
{
    title: "Don Quixote",
    author: "Miguel De Cervantes",
    pages: "566 pages",
    haveRead: 'not yet read'
},
{
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    pages: "859 pages",
    haveRead: 'not yet read'
},
{
    title: "The Little Prince (Le Petit Prince)",
    author: "Antoine de Saint-Exupery",
    pages: "643 pages",
    haveRead: 'not yet read'
},
{
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: "463 pages",
    haveRead: 'not yet read'
},
];

let book = "";
let len = 0;

let addBook = document.querySelector('#add-book');
let removeBook = document.querySelector('#remove-book');

let readStatus = document.getElementById('read-status');
let bookList = document.querySelector('.book-list');


function Book(title,author,pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

function addBookToLibrary(book){
    book = new Book();
    book.title = document.getElementById('book-title').value;
    book.author = document.getElementById('author').value;
    book.pages = document.getElementById('num-pages').value;

    if (readStatus.checked){
        book.haveRead = 'read'
    }
    else{
        book.haveRead = 'not yet read'
    }
    myLibrary.push(book);
}

function displayLibrary(){
    let j=1;
    bookList.innerText = "";
    myLibrary.forEach( (item,i,arr) => {
        bookList.innerText += `${j++}. ${arr[i].title}, written by ${arr[i].author}, ${arr[i].pages}, ${arr[i].haveRead} \n\n`;        
    });
}

addBook.addEventListener("click", (e) =>
{
    e.preventDefault();
    addBookToLibrary(book);
    displayLibrary();
});

removeBook.addEventListener("click", (e) =>{

    e.preventDefault()
    myLibrary.pop();
    displayLibrary();

});

displayLibrary();
