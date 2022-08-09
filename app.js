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
    addBooktoLibrary(new Book(inputs.title.value, inputs.author.value, inputs.pages.value, inputs.haveRead.value));
    clearInputs();
}

const table = document.querySelector("table");
const addBookForm = document.querySelector("#addBookForm");
const inputs = {
    title: document.querySelector("input#title"),
    author: document.querySelector("input#author"),
    pages: document.querySelector("input#pages"),
    haveRead: document.querySelector("select#haveRead")
};


addBookForm.addEventListener("submit", addBook);

let myLibrary = [];

function addBooktoLibrary(book){
    myLibrary.push(book);
    checkForUpdates();
}

function clearInputs(){
    Object.keys(inputs).forEach(element => {
        inputs[element].value = "";
        console.log(element);
    });
}

function createNewRow(book, index){
    let row = document.createElement("tr");
    row.setAttribute("data-id", index);

    let dataTitle = document.createElement("td");
    dataTitle.innerText = book.title;

    let dataAuthor = document.createElement("td");
    dataAuthor.innerText = book.author;

    let dataPages = document.createElement("td");
    dataPages.innerText = book.pages;

    let dataHaveRead = document.createElement("td");
    dataHaveRead.innerText = book.haveRead;

    let buttonHolder = document.createElement("td");

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "Delete";

    buttonHolder.appendChild(deleteButton);

    row.appendChild(dataTitle);
    row.appendChild(dataAuthor);
    row.appendChild(dataPages);
    row.appendChild(dataHaveRead);
    row.appendChild(buttonHolder);

    table.appendChild(row);
}

function checkForUpdates(){
    deleteAllRows();
    let index = 0;
    myLibrary.forEach(element => {
        createNewRow(element, index);
        index++;
    });
}

function deleteAllRows(){
    let rows = document.querySelectorAll("table>tr");
    Array.from(rows).forEach(element => {
        console.log(element);
        table.removeChild(element);
    });
}

