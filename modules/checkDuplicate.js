import * as bookC from './bookClass.js';
import * as constE from './constantElement.js';

export const CheckDuplicate = function (title, author) {
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