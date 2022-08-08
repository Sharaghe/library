function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function(){
        return this.title + " by " + this.author + "(" + this.pages + " pages) - " + this.haveRead;
    }
}

const table = document.querySelector("table");

let myLibrary = [];

function addBooktoLibrary(book){
    myLibrary.push(book)
}

function createNewRow(book){
    let row = document.createElement("tr");

    let dataTitle = document.createElement("td");
    dataTitle.innerText = book.title;

    let dataAuthor = document.createElement("td");
    dataAuthor.innerText = book.author;

    let dataPages = document.createElement("td");
    dataPages.innerText = book.pages;

    let dataHaveRead = document.createElement("td");
    dataHaveRead.innerText = book.haveRead;

    row.appendChild(dataTitle);
    row.appendChild(dataAuthor);
    row.appendChild(dataPages);
    row.appendChild(dataHaveRead);

    table.appendChild(row);
}

function checkForUpdates(){
    myLibrary.forEach(element => {
        createNewRow(element);
    });
}

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "no");
addBooktoLibrary(hobbit);

checkForUpdates();