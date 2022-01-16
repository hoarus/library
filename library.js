

//Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. 
//Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.






function Book(title, author, numberOfPages, read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
  this.beenread = function() {
    switch (read) {
      case "read":
        return "read";
      default: 
        return "not read yet";
    }
  }
  this.info = function () {
    return title + " by " + author + ", " + numberOfPages + " pages, " + this.beenread();
  }
}


const book1 = new Book("Lord of the Rings", "J.R.R. Tolkien", "1046", "read");

console.log(book1.info());