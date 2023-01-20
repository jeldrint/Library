let myLibrary = [];
let book = "";

let addBook = document.querySelector('#add-book');
let bookTitle = "";
let bookAuthor = "";
let numPages = "";
let haveRead = document.getElementById('read-status');

function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = false;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

addBook.addEventListener("click", (e) =>
{
    e.preventDefault();
    bookTitle = document.getElementById('book-title').value;
    bookAuthor = document.getElementById('author').value;
    numPages = document.getElementById('num-pages').value;
    book = new Book(bookTitle,bookAuthor,numPages);
    addBookToLibrary(book);

    console.log(book);
});


//sample library
book = new Book("The Pirates of the Carribean", "John Pogi", "300 pages");
addBookToLibrary(book);