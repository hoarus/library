

//Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. 
//Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

// To Do: Convert library into a function and wrap all values under it
// To Do: Start with books table already existing. And then simply add rows


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
  this.addToLibrary = function () {
    myLibrary.push(this);
    console.log("Book Added");
  }
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
  console.log(book);
  let bookDetails = Object.values(book)
  // Need to then loop through the object and create a TD field for key/value pair
  for (let i = 0; i <= 3; i++) {
    const bookDetail = document.createElement('td');
    bookDetail.textContent = bookDetails[i];
    bookRow.appendChild(bookDetail);
    console.log(bookDetails[i]);
  }
}



function addBook() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const numberOfPages = document.querySelector("#pages").value;
  const read = document.querySelector("#read").value;
  const newBook = new Book(title, author, numberOfPages, read);
  newBook.addToLibrary();
  printLibrary();
}

// Event Listeners

const button = document.querySelector('.new-book-button');
const form = document.querySelector('.new-book-form')
button.addEventListener('click', () => {
  form.classList.toggle('hidden'); 
  console.log("activated");
  });


  // Submit Book
  const submit = document.querySelector('.submit');
  submit.addEventListener('click', addBook);


  // Driver Script

const book1 = new Book("Lord of the Rings", "J.R.R. Tolkien", "1046", "read");

console.log(book1.info());



console.log(myLibrary);

printLibrary();


