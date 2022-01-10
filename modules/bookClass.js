import * as constE from './constantElement';
// Class of Books
class Books {
    static books = [];
  
    id = `${Date.now()}`.slice(-10);
  
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
    }
  
    // Data Storage
    static storage(books) {
      localStorage.setItem('books', JSON.stringify(books));
    }
  
    addBook() {
      Books.books.push(this);
      Books.storage(Books.books);
      Books.displayBook();
  
      titleInput.value = '';
      authorInput.value = '';
    }
  
    // Display Book
    static displayBook() {
      if (JSON.parse(localStorage.getItem('books'))) {
        Books.books = JSON.parse(localStorage.getItem('books'));
      }
  
      let itemHtml = '';
      Books.books.forEach((book) => {
        itemHtml += `
        <li class="book" id="${book.id}">
          <div class="book-details">${book.title} by ${book.author}</div>
          <button type="button" class="remove-btn">Remove</button>
        </li>
      `;
      });
  
      container.innerHTML = itemHtml;
  
      // Remove: when I click on Remove button
      document.querySelectorAll('.remove-btn').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          const targetId = e.target.parentElement.id;
          Books.books = Books.books.filter((book) => book.id !== targetId);
          Books.storage(Books.books);
          e.target.parentElement.remove();
        });
      });
    }
  }