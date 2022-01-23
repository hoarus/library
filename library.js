

//Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. 
//Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.


let myLibrary = [];


function Book(library, title, author, numberOfPages, read) {
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

  this.addToLibrary = function () {
    library.push(this);
  }
}

Book.prototype.printBook = function() {
  const booksContainer = document.querySelector('.book-table');
  const bookRow = document.createElement('tr');
  booksContainer.appendChild(bookRow);
  let bookDetails = Object.values(this)
  for (let i = 0; i <= 3; i++) {
    const bookDetail = document.createElement('td');
    bookDetail.textContent = bookDetails[i];
    bookRow.appendChild(bookDetail);
}}




// Event Listeners
  //New Book 
  const button = document.querySelector('.new-book-button');
  const form = document.querySelector('.new-book-form')
  button.addEventListener('click', () => {
    form.classList.toggle('hidden'); 
    });

  // Submit Book
  const submit = document.querySelector('.submit');
  submit.addEventListener('click', addBook);

  function addBook() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const numberOfPages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").value;
    const newBook = new Book(myLibrary, title, author, numberOfPages, read);
    newBook.addToLibrary();
    newBook.printBook();
    form.reset();
  }