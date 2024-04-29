'use strict';

//Windowオブジェクト

//確認
// window.confirm('ok?');

//別のウィンドウを開く
// window.open('https://qiita.com/makky/items/f546df8533c3c3ce9b2f');

//windowを閉じる
// window.close();

//スクロール
let btn  = document.getElementById('triggerButton');
btn.addEventListener('click', function(e){
   window.scroll(0, 300);
}, false);