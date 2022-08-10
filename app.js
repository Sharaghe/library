function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
}

Book.prototype.info = function(){
    return this.title + " by " + this.author + "(" + this.pages + " pages) - " + this.haveRead;
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
    });
}

function createNewRow(book, index){
    let row = document.createElement("tr");
    row.setAttribute("data-id", index);

    let buttonHolder = document.createElement("td");
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => removeEntry(index));
    buttonHolder.appendChild(createMarkReadButton(index, book.haveRead));
    buttonHolder.appendChild(deleteButton);

    Object.keys(book).forEach(element => {
        let td = document.createElement("td");
        td.innerText = book[element];

        row.appendChild(td);
    });

    row.appendChild(buttonHolder);

    table.appendChild(row);
}

function createMarkReadButton(index, readStatus){
    let markReadButton = document.createElement("button");
    markReadButton.classList.add("markReadButton");
    markReadButton.innerText = (readStatus === "yes") ? "Mark unread" : "Mark read";
    markReadButton.addEventListener("click", () => toggleHaveRead(index));
    return markReadButton;
}

function toggleHaveRead(index){

    let currentStatus = myLibrary[index].haveRead;

    myLibrary[index].haveRead = (currentStatus === "yes") ? "no" : "yes";
    checkForUpdates();
}

function removeEntry(index){
    myLibrary.splice(index, 1);
    checkForUpdates();
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
        table.removeChild(element);
    });
}

