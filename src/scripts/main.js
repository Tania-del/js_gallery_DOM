'use strict';

const gallery = document.querySelectorAll('a');
const currentImg = document.querySelector('.gallery__img');

for (let i = 0; i < gallery.length; i++) {
  const currentValue = gallery[i];

  currentValue.addEventListener('click', (e) => {
    currentImg.src = e.target.src;
    e.preventDefault();
  });
}
