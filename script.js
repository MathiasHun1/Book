
// Constructor of Book
function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}

Book.prototype.info = function() {    
    let read = '';
    (this.isRead === true) ? read = 'read' : read ='not read';
    return `The Book's title is ${this.title}, written by ${this.author}, and I have ${read} it`;
}

//

const booksArr =  [];
function addBookToLibrary() {
    //
}


