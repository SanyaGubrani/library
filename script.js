'use strict';

const addBookButton = document.querySelector('.add-books');
const bookInfoModal = document.querySelector('.book-info');
const closeBtn = document.querySelector('.close-btn');
const submitButton = document.querySelector('.submit');
const booksGrid = document.querySelector('.books-grid');

let myLibrary = [];

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
