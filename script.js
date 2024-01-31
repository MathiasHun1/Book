const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".plus");
const closeButton = document.querySelector("dialog button");

// Constructor of Book
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.info = function() {    
    let read = '';
    (this.isRead === true) ? read = 'read' : read ='not read';
    return `The Book's title is ${this.title}, written by ${this.author}, and I have ${read} it`;
}

const booksArr =  [];
function addBookToLibrary() {
    //
}

// Open and close the dialog
showButton.addEventListener('click', () => {
    dialog.showModal();
});
closeButton.addEventListener('click', () => {
    dialog.close();
});





