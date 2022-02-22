/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let type = document.querySelector("#cardWhite");
  let valor = [
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
  let typeArr = Array.from(type.children);

  let typeRandom = typeArr[Math.floor(Math.random() * 4)];

  let valorRandom = valor[Math.floor(Math.random() * valor.length)];

  if (typeRandom == document.querySelector(".heart")) {
    document.querySelector(".heart").innerHTML = "♥";
    document.querySelector(".heartFlipV").innerHTML = "♥";
  } else if (typeRandom == document.querySelector(".diamond")) {
    document.querySelector(".diamond").innerHTML = "♦";
    document.querySelector(".diamondFlipV").innerHTML = "♦";
  } else if (typeRandom == document.querySelector(".spade")) {
    document.querySelector(".spade").innerHTML = "♠";
    document.querySelector(".spadeFlipV").innerHTML = "♠";
  } else if (typeRandom == document.querySelector(".club")) {
    document.querySelector(".club").innerHTML = "♣";
    document.querySelector(".clubFlipV").innerHTML = "♣";
  } else {
    console.log("REVISA TUS CONDICIONALES ALGO ANDA MAL");
  }
  document.querySelector(".valorRandom").innerHTML = valorRandom;
};
