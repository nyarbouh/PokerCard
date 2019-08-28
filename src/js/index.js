/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  var symbols = ["&#9827", "&#9824", "&#9829", "&#9830"];
  var caracters = ["A", "2", "3", "4", "5", "6", "7", "10", "J", "Q", "K"];

  let uno = symbols[Math.floor(Math.random() * symbols.length)];
  if (uno === "&#9829" || uno === "&#9830") {
    var element = document.getElementById("heart1");
    element.classList.toggle("change");
    var element = document.getElementById("heart2");
    element.classList.toggle("change");
  }

  let dos = caracters[Math.floor(Math.random() * caracters.length)];

  var star = document.querySelector("#heart1");
  star.innerHTML = uno;

  var moon = document.querySelector("#number");
  moon.innerHTML = dos;

  var star1 = document.querySelector("#heart2");
  star1.innerHTML = uno;
};
