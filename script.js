const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function showPage(id) {
  document.querySelectorAll('.page').forEach(page => { page.hidden = page.id !== id; });
  document.querySelector(`#${id} h1, #${id} h2`).focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'instant' });
}
document.querySelectorAll('[data-next]').forEach(button => button.addEventListener('click', () => showPage(button.dataset.next)));
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    const flipped = card.getAttribute('aria-pressed') !== 'true';
    card.setAttribute('aria-pressed', String(flipped));
    card.querySelector('.front').setAttribute('aria-hidden', String(flipped));
    card.querySelector('.back').setAttribute('aria-hidden', String(!flipped));
  });
});
const answers = ['A LOTTT!!', 'MORE THAN YOU THINK!!', 'TO THE MOON AND BACK!!', 'MORE THAN ALL THE STARS!!', 'INFINITY TIMES INFINITY!! 💜'];
let answerIndex = 0;
document.querySelector('#how-much').addEventListener('click', () => {
  document.querySelector('#answer').textContent = answers[answerIndex];
  answerIndex = (answerIndex + 1) % answers.length;
  if (answerIndex === 0) document.querySelector('#one-more').hidden = false;
});
document.querySelector('#open-letter').addEventListener('click', () => {
  const button = document.querySelector('#open-letter');
  const open = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(open));
  button.setAttribute('aria-label', open ? 'Close your secret letter' : 'Open your secret letter');
  document.querySelector('#love-letter').hidden = !open;
  document.querySelector('#last-surprise').hidden = !open;
});
function burst() {
  const container = document.querySelector('#celebration');
  container.replaceChildren();
  if (reducedMotion.matches) return;
  for (let i = 0; i < 42; i++) {
    const particle = document.createElement('span');
    particle.className = 'particle';
    particle.textContent = ['💜', '💖', '🧡', '🍁', '🍂'][i % 5];
    particle.style.setProperty('--x', `${(Math.random() - .5) * window.innerWidth * 1.8}px`);
    particle.style.setProperty('--y', `${(Math.random() - .5) * window.innerHeight * 1.8}px`);
    particle.style.setProperty('--r', `${Math.random() * 360}deg`);
    container.append(particle);
    particle.addEventListener('animationend', () => particle.remove(), { once: true });
  }
}
document.querySelector('#last-surprise').addEventListener('click', () => { showPage('finale'); burst(); });
document.querySelector('#more-hearts').addEventListener('click', burst);
for (let i = 0; i < 14; i++) {
  const item = document.createElement('span');
  item.className = `floating-item${i % 3 === 0 ? ' heart-float' : ''}`;
  item.textContent = ['💜', '🍂', '🍁', '💖'][i % 4];
  item.style.left = `${i * 7}%`;
  item.style.animationDuration = `${12 + i % 5 * 3}s`;
  item.style.animationDelay = `${-i * 2}s`;
  document.querySelector('#floating').append(item);
}
