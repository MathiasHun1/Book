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

Book.prototype.removeFromArr = function (array) {
    array.splice(array.indexOf(this), 1);
}

//Event listeners
showButton.addEventListener('click', () => {
    dialog.showModal();
});
closeButton.addEventListener('click', () => {
    if (bookTitle.value !== '' && bookAuthor.value !== '' && bookPages.value !== '') {
        addBookToArr();
        render();
    }  else alert('You have to fill all fields')
});

//Functions
function addBookToArr() {
    const book = new Book(bookTitle.value, bookAuthor.value, bookPages.value, isRead.checked);
    booksArr.push(book);
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    isRead.checked = false;
    dialog.close();
}

function render() {
    article.innerHTML = '';
    for (let i = 0; i < booksArr.length; i++) {
        addCardToScreen(booksArr[i]);
    }
}

function addCardToScreen(book) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    article.appendChild(cardElement);
    
    const closeCard = document.createElement('img');
    closeCard.classList.add('close');
    closeCard.setAttribute('src', 'images/close.svg');
    cardElement.appendChild(closeCard);

    const newTitle = document.createElement('h3');
    newTitle.textContent = book.title;
    cardElement.appendChild(newTitle);

    const newAuthor = document.createElement('p');
    const italicText = document.createElement('i')
    italicText.textContent = 'Written by: ';
    const titleText = document.createTextNode(book.title);

    newAuthor.appendChild(italicText);
    newAuthor.appendChild(titleText);
    cardElement.appendChild(newAuthor);

    const newPages = document.createElement('p');
    newPages.textContent = book.pages + ' pages';
    cardElement.appendChild(newPages);

    //Create and append a toggle
    const toggleCont = document.createElement('div');

    const para1 = document.createElement('p');
    para1.classList.add('read-it');
    para1.textContent = 'Read it?';

    const label1 = document.createElement('label')
    label1.classList.add('switch')
    
    const checkBox = document.createElement('input');
    checkBox.checked = book.isRead;
    checkBox.classList.add('checkbox');
    checkBox.setAttribute('type', 'checkbox');

    const span = document.createElement('span');
    span.classList.add('toggle');

    label1.appendChild(checkBox);
    label1.appendChild(span);

    toggleCont.appendChild(para1);
    toggleCont.appendChild(label1);
    cardElement.appendChild(toggleCont);
    //toggle end
    
    if (checkBox.checked === true) {
        cardElement.style.backgroundColor = 'darkkhaki';
    } else cardElement.style.backgroundColor = 'brown';

    checkBox.addEventListener('click', () => {
        if (checkBox.checked === true) {
            checkBox.click()
            cardElement.style.backgroundColor = 'darkkhaki';
        } else {
            checkBox.click()
            cardElement.style.backgroundColor = 'brown';
        }     
    })
    
    closeCard.addEventListener('click', () => {
        book.removeFromArr(booksArr);
        render();
    }
    );   
}

