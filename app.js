//----------------- lecture_01 ----------------------------------//
document.addEventListener("DOMContentLoaded", () => {
  //----------------- lecture_02 ----------------------------------//
  const cardAdj = [
    { name: "1.png", img: "images/amigos.jpg" },
    { name: "2.png", img: "images/amiguitos.jpg" },
    { name: "3.png", img: "images/azulita.jpg" },
    { name: "4.png", img: "images/cafe.jpg" },
    { name: "5.png", img: "images/carrera.jpg" },
    { name: "6.png", img: "images/cars.jpg" },
    { name: "1.png", img: "images/amigos.jpg" },
    { name: "2.png", img: "images/amiguitos.jpg" },
    { name: "3.png", img: "images/azulita.jpg" },
    { name: "4.png", img: "images/cafe.jpg" },
    { name: "5.png", img: "images/carrera.jpg" },
    { name: "6.png", img: "images/cars.jpg" }
  ];

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  //----------------- lecture_03 ----------------------------------//

  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "images/reverso.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      cuadricula.appendChild(carta);
    }
  }

  //----------------- lecture_04 ----------------------------------//

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }

  crearTablero();
});
