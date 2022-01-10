import * as bookC from '/modules/bookClass.js';
import * as constE  from '/modules/constantElement.js';

const CheckDuplicate = function (title, author) {
  const b = bookC.Books.books.filter(
    (book) => title === book.title && author === book.author,
  );
  if (b.length !== 0) {
    constE.errorMsg.classList.remove('hidden');
    constE.successMsg.classList.add('hidden');
    return true;
  }
  constE.errorMsg.classList.add('hidden');
  constE.successMsg.classList.remove('hidden');
  return false;
};

let id;
// Add: when I click on Add button
constE.addBtn.addEventListener('submit', (e) => {
  e.preventDefault();

  id = `${Date.now()}`.slice(-10);
  const title = constE.titleInput.value;
  const author = constE.authorInput.value;

  if (CheckDuplicate(title, author)) return;

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
