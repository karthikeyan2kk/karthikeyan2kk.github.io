import { icons } from '../assets/js/icons.js';

export function render(achievements) {
  const cards = achievements
    .map(
      (a) => `
      <div class="achievement-card fade-up">
        <div class="achievement-icon">${icons[a.icon] ?? icons.award}</div>
        <h3 class="achievement-title">${a.title}</h3>
        <p class="achievement-desc">${a.description}</p>
      </div>`
    )
    .join('');

  return `
    <section id="achievements">
      <div class="container">
        <div class="section-header fade-up">
          <h2 class="section-title">Key <span>Achievements</span></h2>
          <div class="section-line"></div>
        </div>
        <div class="achievements-grid stagger">${cards}</div>
      </div>
    </section>`;
}
