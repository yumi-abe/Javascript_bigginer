'use strict';
const sayHelloButton = document.getElementById('sayHelloButton');
function sayHelloEventHandler(e) {
  console.log('Hello');
}
sayHelloButton.addEventListener('click', sayHelloEventHandler, false);

const removeEventHandlerButton = document.getElementById('removeEventHandlerButton');
function removeEventHandler(e) {
    console.log('remove');
    sayHelloButton.removeEventListener('click', sayHelloEventHandler, false);
}

removeEventHandlerButton.addEventListener('click', removeEventHandler, false);