'use strict';
let num = 0;

function updateCounter(num){
  const counter = document.getElementById('counter');
  counter.textContent = num;
}

function countUp(){
  num++;
  // const counter = document.getElementById('counter');
  // counter.textContent = num;
  updateCounter(num);
}

const countUpButton = document.getElementById('countUpButton');
countUpButton.addEventListener('click', countUp, false);

function reset(){
  num = 0;
  // const counter = document.getElementById('counter');
  // counter.textContent = num;
  updateCounter(num);

}

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', reset, false);