'use strict';

//Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  

  let myLibrary = [];
  
  // Get DOM elements
  const addBookButton = document.querySelector('.add-books');
  const bookInfoModal = document.querySelector('.book-info');
  const closeBtn = document.querySelector('.close-btn');
  const submitButton = document.querySelector('.submit');
  const booksGrid = document.querySelector('.books-grid');
  
  // Function to add book to library
  function addBookToLibrary() {

    const titleInput = document.querySelector('.title');
    const authorInput = document.querySelector('.author');
    const pagesInput = document.querySelector('.pages');
    const readCheckbox = document.querySelector('.read');
  
    // Get values from inputs
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = parseInt(pagesInput.value);
    const read = readCheckbox.checked;
  
    // Create a new Book instance
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
  
    // Clear form inputs
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readCheckbox.checked = false;
  
  
    bookInfoModal.classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
  
  
    displayBooks();
  }
  
  // Function to display books in the books grid
  function displayBooks() {
   
    booksGrid.innerHTML = '';
  
    // Loop through each book in the library
    myLibrary.forEach((book, index) => {
  
      const bookDisplay = document.createElement('div');
      bookDisplay.classList.add('books-display');
  
      const removeButton = document.createElement('button');
      removeButton.classList.add('remove');
      removeButton.textContent = '×';
  
      const bookName = document.createElement('div');
      bookName.classList.add('book-name');
      bookName.textContent = `"${book.title}"`;
  
      const authorName = document.createElement('div');
      authorName.classList.add('author-name');
      authorName.textContent = book.author;
  
      const pagesNum = document.createElement('div');
      pagesNum.classList.add('pages-num');
      pagesNum.textContent = `${book.pages} Pages`;
  
      const readButton = document.createElement('button');
      readButton.classList.add('read');
      readButton.textContent = book.read ? 'Read' : 'Not read';

    
    if (book.read) {
    readButton.style.backgroundColor = '#c8c68a'; // Read color
    readButton.style.color = '#203500';
    } else {
    readButton.style.backgroundColor = '#a1a364'; // Not read color
    readButton.style.color = '#203500';
    }
  
    // Add event listener to read button
    readButton.addEventListener('click', () => {
      book.read = !book.read; 
      readButton.textContent = book.read ? 'Read' : 'Not read';
      readButton.style.backgroundColor = book.read ? '#c8c68a' : '#a1a364'; 
      readButton.style.color = '#203500'; 
    });


      // Append book display elements to the books grid
      bookDisplay.appendChild(removeButton);
      bookDisplay.appendChild(bookName);
      bookDisplay.appendChild(authorName);
      bookDisplay.appendChild(pagesNum);
      bookDisplay.appendChild(readButton);
      booksGrid.appendChild(bookDisplay);
  

      // Add event listener to remove button
      removeButton.addEventListener('click', () => {
        myLibrary.splice(index, 1);
  

        displayBooks();
      });
    });
  }
  
// Event listener for submit button
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary();
});
  

//Add books Button:
const overlay = document.querySelector('.overlay');
const openBookForm = function(){
    bookInfoModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeBookForm = function(){
    bookInfoModal.classList.add('hidden');
    overlay.classList.add('hidden');
};

addBookButton.addEventListener('click', openBookForm);
closeBtn.addEventListener('click', closeBookForm);
overlay.addEventListener('click', closeBookForm);

//Close by esc key
document.addEventListener('keydown', function(e){
    if(e.key==='Escape' && !bookInfoModal.classList.contains('hidden')){
        closeBookForm();
    }
});
