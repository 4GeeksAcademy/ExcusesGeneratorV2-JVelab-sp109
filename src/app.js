import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let finalExcuse = "";

  function getRandomElement(array) {

    return array[Math.floor(Math.random() * array.length)]
  } 

  finalExcuse = getRandomElement(who) + " " + getRandomElement(action) + " " + getRandomElement(what) + " " + getRandomElement(when);

  let title = document.getElementById("excuse")
  title.innerHTML = finalExcuse
};
