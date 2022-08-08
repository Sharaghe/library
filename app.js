function Book(title, author, pages, haveRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    this.info = function(){
        return this.title + " by " + this.author + "(" + this.pages + " pages) - " + this.haveRead;
    }
}

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read");
console.log(hobbit.info());