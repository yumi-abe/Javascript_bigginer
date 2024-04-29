'use strict';
const sayHelloButton = document.getElementById('sayHelloButton');
// sayHelloButton.addEventListener('click', function(e){
//     console.log('Hello!');
// }, false);

sayHelloButton.addEventListener('click', (e) => {
    console.log('Hello!');
}, false);