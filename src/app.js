/* eslint-disable */
import "./style.css";
const palos = ["♦", "♥", "♠", "♣"];
const valores = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];
const btn = document.querySelector(".next");
const palo = document.querySelectorAll(".palo");
const valor = document.querySelector(".valor");
const numero = document.querySelectorAll(".numero");
const carta = document.querySelector(".carta");
const alto = document.getElementById("alto");
const ancho = document.getElementById("ancho");
const auto = document.querySelector(".auto");

function indiceAleatorio(array) {
  let indice = Math.floor(Math.random() * array.length);
  let valor = array[indice];
  return valor;
}

function generarCarta() {
  let paloAleatorio = indiceAleatorio(palos);
  let valorAleatorio = indiceAleatorio(valores);
  valor.innerHTML = valorAleatorio;
  numero.forEach(element => {
    element.innerHTML = valorAleatorio;
    if (paloAleatorio == "♦" || paloAleatorio == "♥") {
      element.style.color = "red";
    } else {
      element.style.color = "black";
    }
  });
  palo.forEach(element => {
    element.innerHTML = paloAleatorio;
    if (paloAleatorio == "♦" || paloAleatorio == "♥") {
      element.style.color = "red";
      valor.style.color = "red";
    } else {
      element.style.color = "black";
      valor.style.color = "black";
    }
    if (valorAleatorio == "A") {
      valor.innerHTML = paloAleatorio;
    }
  });
}

/*Opción de generar la siguiente carta mediante un click o automáticamente*/

btn.addEventListener("click", e => {
  generarCarta();
  btn.disabled = true;
});

auto.addEventListener("click", () => {
  setInterval(() => {
    generarCarta();
  }, 1000);
});

/*Ajustes de Ancho y Alto*/

ancho.addEventListener("change", () => {
  carta.style.width = `${ancho.value}px`;
});

alto.addEventListener("change", () => {
  carta.style.height = `${alto.value}px`;
});
