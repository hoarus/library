

//Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. 
//Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.




let myLibrary = [
  {title: 'Book1',
  author: 'Aut',
  numberOfPages: '123',
  read: 'yes'},
  {title: 'Book2',
  author: 'Authee',
  numberOfPages: '14',
  read: 'no'},

];

function Book(title, author, numberOfPages, read) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.read = read;
  this.beenread = function() {
    switch (read) {
      case "yes":
        return "read";
      default: 
        return "not read yet";
    }
  }
  this.info = function () {
    return title + " by " + author + ", " + numberOfPages + " pages, " + this.beenread();
  }
}


function addBookToLibrary() {
  let title = window.prompt("Please enter the book's title: ");
  let author = prompt("Please enter the book's author");
  let pages = prompt("Please enter the number of pages");
  let read = prompt("Have you read this book?");
  let book = new Book(title, author, pages, read);
  console.log(book);
  myLibrary.push(book);
}

function printLibrary(){
  printBookTable();
  myLibrary.forEach(printBook);
}



function printBookTable(){
  const booksContainer = document.querySelector('.books-container');
  const bookTable = document.createElement('table');
  bookTable.classList.add('book-table');
  booksContainer.appendChild(bookTable);
  let tableHeaders = ['Title', 'Author', 'Number of Pages', 'Read?'];
  tableHeaders.forEach(printTableHeaders)
}

function printTableHeaders(header){
  const bookTable = document.querySelector('.book-table');
  const headerTitle = document.createElement('th');
  headerTitle.textContent = header;
  bookTable.appendChild(headerTitle);

}

function printBook(book) {
  const booksContainer = document.querySelector('.book-table');
  const bookRow = document.createElement('tr');
  booksContainer.appendChild(bookRow);
  // Need to then loop through the object and create a TD field for key/value pair
  for (const detail in book) {
    const bookDetail = document.createElement('td');
    bookDetail.textContent = book[detail];
    bookRow.appendChild(bookDetail);
    console.log(book[detail]);
  }
}

function printBookDetails() {

}

const book1 = new Book("Lord of the Rings", "J.R.R. Tolkien", "1046", "read");

console.log(book1.info());

//addBookToLibrary();

console.log(myLibrary);

printLibrary();
