'use strict';

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updadeCounter = () => {
    const target = +counter.getAttribute('data-target');
    console.log(typeof target, target);
    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updadeCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updadeCounter();
});
