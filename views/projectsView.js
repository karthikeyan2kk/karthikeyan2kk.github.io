import { icons } from '../assets/js/icons.js';

export function render(projects) {
  const cards = projects
    .map(
      (p) => `
      <div class="project-card fade-up">
        <div class="project-top">
          <span class="project-folder">${icons.folder}</span>
          <div class="project-links">
            <a href="${p.link}" target="_blank" rel="noopener" title="View on GitHub">${icons.github}</a>
            ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener" title="Live demo">${icons.externalLink}</a>` : ''}
          </div>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.description}</p>
        <div class="project-tags">
          ${p.tech.map((t) => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>`
    )
    .join('');

  return `
    <section id="projects">
      <div class="container">
        <div class="section-header fade-up">
          <h2 class="section-title">Featured <span>Projects</span></h2>
          <div class="section-line"></div>
        </div>
        <div class="projects-grid">${cards}</div>
      </div>
    </section>`;
}
