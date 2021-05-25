'use strict';
// ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

const sounds = document.querySelectorAll('audio');

sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound.id;

  document.getElementById('buttons').appendChild(btn);

  btn.addEventListener('click', () => {
    stopSong();
    document.getElementById(sound.id).play();
  });
});

function stopSong() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound.id);
    song.pause();
    song.currenTime = 0;
  });
}
