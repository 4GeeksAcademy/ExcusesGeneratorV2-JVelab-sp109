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

  function getExcuse() {

    

    let excuse1 = who[Math.floor((Math.random() * 4))];
    let excuse2 = action[Math.floor((Math.random() * 4))];
    let excuse3 = what[Math.floor((Math.random() * 3))];
    let excuse4 = when[Math.floor((Math.random() * 5))];

    finalExcuse = excuse1 + " " + excuse2 + " " + excuse3 + " " + excuse4;

  } 

  getExcuse()
  let title = document.getElementById("excuse")
  title.innerHTML = finalExcuse
};
