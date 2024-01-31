const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".plus");
const closeButton = document.querySelector("dialog button");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const isRead = document.querySelector("#read");

const booksArr =  [];

// Constructor of Book
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

showButton.addEventListener('click', () => {
    dialog.showModal();
});
closeButton.addEventListener('click', addBookToArr)


function addBookToArr() {
    booksArr.push(new Book(bookTitle.value, bookAuthor.value, bookPages.value, isRead.checked));
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    isRead.checked = false;
    dialog.close();
    console.log(booksArr)
}

function addBookToLibrary() {
    
}





