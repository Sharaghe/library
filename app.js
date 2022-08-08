function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function(){
        return this.title + " by " + this.author + "(" + this.pages + " pages) - " + this.haveRead;
    }
}


const addBook = (e) => {
    e.preventDefault();

    let title = document.querySelector("input#title").value;
    let author = document.querySelector("input#author").value;
    let pages = document.querySelector("input#pages").value;
    let haveRead = document.querySelector("select#haveRead").value;

    addBooktoLibrary(new Book(title, author, pages, haveRead));
}

const table = document.querySelector("table");
const addBookForm = document.querySelector("#addBookForm");

addBookForm.addEventListener("submit", addBook);

let myLibrary = [];

function addBooktoLibrary(book){
    myLibrary.push(book);
    checkForUpdates();
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
    deleteAllRows();
    myLibrary.forEach(element => {
        createNewRow(element);
    });
}

function deleteAllRows(){
    let rows = document.querySelectorAll("table>tr");
    Array.from(rows).forEach(element => {
        console.log(element);
        table.removeChild(element);
    });
}

