let myLibrary = [];

function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = false;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

const book1 = new Book("The Pirates of the Carribean", "John Pogi", "300 pages");
addBookToLibrary(book1);