const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".plus");
const closeButton = document.querySelector("dialog button");
const bookTitle = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookPages = document.querySelector("#pages");
const isRead = document.querySelector("#read");
const article = document.querySelector('.article');

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
closeButton.addEventListener('click', () => {
    if (bookTitle.value !== '' && bookAuthor.value !== '' && bookPages.value !== '') {
        addBookToArr()
    }  else alert('You have to fill all fields')
});



function addBookToArr() {
    booksArr.push(new Book(bookTitle.value, bookAuthor.value, bookPages.value, isRead.checked));
    addBookToLibrary();
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    isRead.checked = false;
    dialog.close();
    console.log(booksArr)
}

function addBookToLibrary() {
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    article.appendChild(newCard);

    const newTitle = document.createElement('h3');
    newTitle.textContent = bookTitle.value;
    newCard.appendChild(newTitle);

    const newAuthor = document.createElement('p');
    const italicText = document.createElement('i')
    italicText.textContent = 'Written by: ';

    newAuthor.appendChild(italicText);
    newAuthor.appendChild(document.createTextNode(bookAuthor.value));
    newCard.appendChild(newAuthor);

    const newPages = document.createElement('p');
    newPages.textContent = bookPages.value + ' pages';
    newCard.appendChild(newPages);

    const toggleCont = createToggle()
    newCard.appendChild(toggleCont);
}

function createToggle() {
    const toggleCont = document.createElement('div');

    const para1 = document.createElement('p');
    para1.classList.add('read-it');
    para1.textContent = 'Read it?';

    const label1 = document.createElement('label')
    label1.classList.add('switch')
    
    const checkBox = document.createElement('input');
    checkBox.classList.add('checkbox');
    checkBox.setAttribute('type', 'checkbox');

    const span = document.createElement('span');
    span.classList.add('toggle');

    label1.appendChild(checkBox);
    label1.appendChild(span);

    toggleCont.appendChild(para1);
    toggleCont.appendChild(label1);

    return toggleCont
}





