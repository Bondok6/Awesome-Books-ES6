import * as bookC from '/modules/bookClass.js';
import * as constE from '/modules/constantElement.js';
import * as checkD from '/modules/checkDuplicate.js';

import { DateTime } from './luxon.js';

console.log(DateTime.now());
const {
  month, day, year, hour,
} = DateTime.now().c;
console.log(month, day, year, hour);

let id;
// Add: when I click on Add button
constE.addBtn.addEventListener('submit', (e) => {
  e.preventDefault();

  id = `${Date.now()}`.slice(-10);
  const title = constE.titleInput.value;
  const author = constE.authorInput.value;

  if (checkD.CheckDuplicate(title, author)) return;

  const newBook = new bookC.Books(id, title, author);
  newBook.addBook();
});

// Display Data: when reload the page
window.onload = () => {
  bookC.Books.displayBook();
};

// Sections Navigation
constE.listNav.addEventListener('click', () => {
  constE.addNewSection.classList.add('hidden');
  constE.contactSection.classList.add('hidden');
  constE.listSection.classList.remove('hidden');
});

constE.addNewNav.addEventListener('click', () => {
  constE.contactSection.classList.add('hidden');
  constE.listSection.classList.add('hidden');
  constE.addNewSection.classList.remove('hidden');
});

constE.contactNav.addEventListener('click', () => {
  constE.addNewSection.classList.add('hidden');
  constE.listSection.classList.add('hidden');
  constE.contactSection.classList.remove('hidden');
});
