console.log(
  'Pattern Reference',
  'https://www.vecteezy.com/vector-art/47935068-seamless-futuristic-adstract-pattern-digital-background-in-hi-tech-style-dark-microcircuit-on-a-dark-background-glows-with-glowing-bulbs'
);

const d = document;
const $ = el => d.querySelector(el);
const $radarContainer = $('.radar-container');
const $circulin = $radarContainer.querySelector('.circulin');
let n = 2;
let m = 1;

d.addEventListener('click', e => {
  if (e.target.matches('.btn-1')) {
    $circulin.classList.toggle('hidden');
    return;
  }
  if (e.target.matches('.btn-2')) {
    $radarContainer.style.setProperty('--space-v', `${(n += 0.1)}vw`);
    return;
  }
  if (e.target.matches('.btn-3')) {
    $circulin.style.setProperty('--w-and-h', `${(m += 0.1)}vw`);
    m >= 4 && (m = 1);
    return;
  }
});
