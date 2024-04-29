'use strict';
document.addEventListener('DOMContentLoaded', function(){
  alert('DOMContentLoaded');
}, false);

window.onload = function(){
  const nowLoading = document.getElementById('nowLoading');
  nowLoading.style.display = 'none';
}