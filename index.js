const CheckDuplicate = function (title, author) {
  const b = Books.books.filter(
    (book) => title === book.title && author === book.author,
  );
  if (b.length !== 0) {
    errorMsg.classList.remove('hidden');
    successMsg.classList.add('hidden');
    return true;
  }
  errorMsg.classList.add('hidden');
  successMsg.classList.remove('hidden');
  return false;
};

let id;
// Add: when I click on Add button
addBtn.addEventListener('submit', (e) => {
  e.preventDefault();

  id = `${Date.now()}`.slice(-10);
  const title = titleInput.value;
  const author = authorInput.value;

  if (CheckDuplicate(title, author)) return;

  const newBook = new Books(id, title, author);
  newBook.addBook();
});

// Display Data: when reload the page
window.onload = () => {
  Books.displayBook();
};

// Sections Navigation
listNav.addEventListener('click', () => {
  addNewSection.classList.add('hidden');
  contactSection.classList.add('hidden');
  listSection.classList.remove('hidden');
});

addNewNav.addEventListener('click', () => {
  contactSection.classList.add('hidden');
  listSection.classList.add('hidden');
  addNewSection.classList.remove('hidden');
});

contactNav.addEventListener('click', () => {
  addNewSection.classList.add('hidden');
  listSection.classList.add('hidden');
  contactSection.classList.remove('hidden');
});
