//your JS code here. If required.
const sounds = ['sound1', 'sound2', 'sound3'];
const audioElements = {};

sounds.forEach(sound => {
  const audio = new Audio(`sounds/${sound}.mp3`);
  audioElements[sound] = audio;
});

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const sound = button.dataset.sound;
    stopAllSounds();
    audioElements[sound].currentTime = 0;
    audioElements[sound].play();
  });
});

document.querySelector('.stop').addEventListener('click', () => {
  stopAllSounds();
});

function stopAllSounds() {
  Object.values(audioElements).forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}
