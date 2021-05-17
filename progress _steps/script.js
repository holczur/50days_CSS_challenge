'use strict';

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

const update = function () {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
  const actives = document.querySelectorAll('.active');
  console.log(((actives.length - 1) / (circles.length - 1)) * 100);
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};

let currentActive = 1;

next.addEventListener('click', function () {
  if (currentActive < circles.length) {
    currentActive++;
    update();
  }
  console.log(currentActive);
});

prev.addEventListener('click', function () {
  if (currentActive > 1) {
    currentActive--;
    update();
  }
  console.log(currentActive);
});
