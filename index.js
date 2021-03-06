import Books from './modules/bookClass.js';
import * as constE from './modules/constantElement.js';
import CheckDuplicate from './modules/checkDuplicate.js';

import { DateTime } from './node_modules/luxon/src/luxon.js';

const time = () => {
  const dateT = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  constE.dateElement.innerHTML = dateT;
  setTimeout(time, 1000);
};

time();

let id;
// Add: when I click on Add button
constE.addBtn.addEventListener('submit', (e) => {
  e.preventDefault();

  id = `${Date.now()}`.slice(-10);
  const title = constE.titleInput.value;
  const author = constE.authorInput.value;

  if (CheckDuplicate(title, author)) return;

  const newBook = new Books(id, title, author);
  newBook.addBook();
});

// Display Data: when reload the page
window.onload = () => {
  Books.displayBook();
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
