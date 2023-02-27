//----------------- lecture_01 ----------------------------------// 
document.addEventListener("DOMContentLoaded", () => {
  //----------------- lecture_02 ----------------------------------//
  const cardAdj = [
  {name: "1.png", img: "amigos.jpg"},  
  {name: "2.png", img: "amiguitos.jpg"}, 
  {name: "3.png", img: "azulita.jpg"}, 
  {name: "4.png", img: "cafe.jpg"}, 
  {name: "5.png", img: "carrera.jpg"},
  {name: "6.png", img: "cars.jpg"},
  {name: "1.png", img: "amigos.jpg"},  
  {name: "2.png", img: "amiguitos.jpg"}, 
  {name: "3.png", img: "azulita.jpg"}, 
  {name: "4.png", img: "cafe.jpg"}, 
  {name: "5.png", img: "carrera.jpg"},
  {name: "6.png", img: "cars.jpg"},
  ];
  
    const cuadricula = document.querySelector(".cuadricula");
    const resultado = document.querySelector("#resultado");
    var cartasEscogidas = [];
    var cartasEscogidasId = [];
    var cartasGanadas = [];
    });
  
    //----------------- lecture_03 ----------------------------------// 
  
    function crearTablero (){
      for (let i = 0; i < cardAdj.length; i++) { 
        var carta = document.createElement('img');
        carta.setAttribute('src', 'images/reverso.png');
        carta.setAttribute('data-id', i);
        carta.addEventListener('click', voltearCarta); 
        cuadricula.appendChild(carta);
  
      }
  
    }
  
  });
