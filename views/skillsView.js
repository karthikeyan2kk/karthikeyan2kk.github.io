import { icons } from '../assets/js/icons.js';

const CATEGORY_META = {
  languages:  { icon: icons.code,     label: 'Languages & APIs'      },
  databases:  { icon: icons.database, label: 'Databases & Big Data'  },
  frameworks: { icon: icons.cpu,      label: 'AI & Machine Learning' },
  cloud:      { icon: icons.cloud,    label: 'Cloud'                 },
  tools:      { icon: icons.tool,     label: 'Tools & Platforms'     },
};

export function render(skills) {
  const tabs = Object.entries(skills)
    .map(([key], i) => {
      const meta = CATEGORY_META[key] || { icon: icons.tool, label: key };
      return `
        <button class="skills-tab${i === 0 ? ' active' : ''}" data-tab="${key}">
          <span class="skills-tab-icon">${meta.icon}</span>
          <span class="skills-tab-label">${meta.label}</span>
        </button>`;
    })
    .join('');

  const panels = Object.entries(skills)
    .map(([key, items], i) => {
      const badges = items.map((s) => `<span class="skill-badge">${s}</span>`).join('');
      return `
        <div class="skills-panel${i === 0 ? ' active' : ''}" id="panel-${key}">
          <div class="skill-badges">${badges}</div>
        </div>`;
    })
    .join('');

  return `
    <section id="skills">
      <div class="container">
        <div class="section-header fade-up">
          <h2 class="section-title">My <span>Skills</span></h2>
          <div class="section-line"></div>
        </div>
        <div class="skills-tabs fade-up">${tabs}</div>
        <div class="skills-panels fade-up">${panels}</div>
      </div>
    </section>`;
}
