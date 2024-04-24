'use strict';

const images = [
    'images/image000.jpg',
    'images/image001.jpg',
    'images/image002.jpg',
    'images/image003.jpg',
    'images/image004.jpg',
    'images/image005.jpg',
    'images/image006.jpg',
  ];
  

let currentIndex = 1;

const mainImage = document.getElementById('carousel__main');
mainImage.src = images[currentIndex];
// console.log(mainImage.src);

//forEach for of
for( let [index, image] of images.entries()){
    //console.log(index, image);
  
    const img = document.createElement('img');
    img.src = image;
  
    const li = document.createElement('li');
    if (index === currentIndex) {
      li.classList.add('current');
    }
}
