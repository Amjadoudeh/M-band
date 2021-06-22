// Auto writing Function
const textEl = document.getElementById('text');
const speedEl = 3;
const text =
  'We are a Berliner band interpreting a mix of oriental, flamenco and Latin styles with our own touch..... The three of us met in Germany and decided to mix our melodies and influences... Amjad and Roni are playing classic guitar and Majd is the bass player!!';

let index = 1;
let speed = 100;

writeText();

function writeText() {
  textEl.innerHTML = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 1;
  }
  // to repeat the function when its done
  setTimeout(writeText, speed);
}
// targeting the input value
speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value));
