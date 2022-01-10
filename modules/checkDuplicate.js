import Books from './bookClass.js';
import * as constE from './constantElement.js';

const CheckDuplicate = (title, author) => {
  const b = Books.books.filter(
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

export default CheckDuplicate;