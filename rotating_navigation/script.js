'use strict';

const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const closeBottom = document.getElementById('close--bottom');
const container = document.querySelector('.container');

openBtn.addEventListener('click', () => {
  container.classList.add('show-nav');
});
closeBtn.addEventListener('click', () => {
  container.classList.remove('show-nav');
});
closeBottom.addEventListener('click', () => {
  container.classList.remove('show-nav');
});
