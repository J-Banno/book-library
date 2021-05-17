//Constante

const bookList = document.querySelector(".bookList");
const bookForm = document.querySelector(".bookForm");

//Classe
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  //Méthodes
  addBookToList(book) {
    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.year}</td>
    <td><button class="delete">X</button></td>`;

    bookList.appendChild(row);
  }
}

// Événement
bookForm.addEventListener("submit", (e) => {
  //On souhaite traité en local
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;

  const book = new Book(title, author, year);
  console.log(title);
  book.addBookToList(book);
});
