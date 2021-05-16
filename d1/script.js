'use strict';

const container = document.querySelector('.container');
const panels = document.querySelectorAll('.panel');

container.addEventListener('click', function (e) {
  let active = e.target;
  if (active !== container) {
    panels.forEach(panel => panel.classList.remove('active'));
    active.classList.add('active');
  }
});
