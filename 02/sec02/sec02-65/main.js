'use strict';

//name属性で要素を取得
let btn = document.getElementById('triggerButton');
btn.addEventListener('click', function(e){
  let elements = document.getElementsByName('inputText');
  console.log(elements);
  console.log(elements[0].value);
}, false);