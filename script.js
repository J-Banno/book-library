// EXERCICE 6 : Les évènements.

// 1. Changez la couleur du cercle en "crimson" quand votre souris le survole.

const rondoudou = document.querySelector(".cercle");

rondoudou.addEventListener("mousemove", () => {
  rondoudou.style.backgroundColor = "crimson";
});

// 2. Changez la couleur du carré en "violet" quand vous cliquez dessus.

const cube = document.querySelector(".carre");

cube.addEventListener("click", () => {
  cube.style.backgroundColor = "violet";
});

// 3. Rajoutez l'évenement "click" au document, puis loggez la position(x,y) des clics que vous effectuez sur le document.

document.addEventListener("click", (e) => {
  console.log(e.clientX);
  console.log(e.clientY);
});
