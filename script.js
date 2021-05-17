//Constante

const bookList = document.querySelector(".bookList");
const bookForm = document.querySelector(".bookForm");
const container = document.querySelector(".container");

//Classes
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  ///Méthodes///

  //Ajout
  addBookToList(book) {
    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.year}</td>
    <td><button class="delete">X</button></td>`;

    bookList.appendChild(row);
  }
  //Remise à zéro
  clearFiedls() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("year").value = "";
  }
  //Message
  showAlert(message, className) {
    const alert = document.createElement("div");
    alert.className = `alert ${className}`;
    alert.appendChild(document.createTextNode(message));
    container.insertBefore(alert, bookForm);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 2500);
  }
}

class Interface {
  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }
}

// Événement : enregistrer livre
bookForm.addEventListener("submit", (e) => {
  //On souhaite traiter en local
  e.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;

  const book = new Book(title, author, year);

  //Vérification des champs
  if (title === "" || author === "" || year === "") {
    book.showAlert("Remplissez tout les champs!", "error");
  } else {
    book.addBookToList(book);

    book.clearFiedls();
    book.showAlert("Livre ajouté!", "success");
  }
});

// Événement : supprimer livre
bookList.addEventListener("click", (e) => {
  const ui = new Interface();
  ui.deleteBook(e.target);
});
