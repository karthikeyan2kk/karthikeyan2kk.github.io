import { icons } from '../assets/js/icons.js';

export function render(data) {
  const eduItems = data.education
    .map(
      (edu) => `
      <div class="edu-item">
        <div class="edu-icon">${icons.grad}</div>
        <div class="edu-details">
          <h4>${edu.degree}</h4>
          <p>${edu.institution} · ${edu.year}</p>
        </div>
      </div>`
    )
    .join('');

  return `
    <section id="about">
      <div class="container">

        <!-- Greeting banner -->
        <div class="about-greeting fade-up">
          <p class="about-greeting-intro">Hello, I'm</p>
          <h1 class="about-name">${data.name}</h1>
          <div class="about-role-pills">
            <span class="role-pill">Data Engineer</span>
            <span class="role-sep">/</span>
            <span class="role-pill accent">Data Analyst</span>
            <span class="role-sep">/</span>
            <span class="role-pill">ML Practitioner</span>
          </div>
        </div>

        <!-- Section header -->
        <div class="section-header fade-up">
          <h2 class="section-title">About <span>Me</span></h2>
          <div class="section-line"></div>
        </div>

        <!-- Two-column body -->
        <div class="about-grid">
          <div class="about-photo-wrap fade-up">
            <div class="about-photo-placeholder">
              <img src="assets/images/profile.jpg" class="about-photo" alt="Karthikeyan Saravanan" />
            </div>
            <div class="about-photo-frame"></div>
          </div>

          <div class="fade-up">
            <p class="about-subtitle">Get to know me</p>
            <p class="about-bio">${data.about}</p>
            <div class="about-stats stagger">
              <div class="stat-box">
                <div class="stat-number" data-target="3" data-suffix="+">0+</div>
                <div class="stat-label">Internship Roles</div>
              </div>
              <div class="stat-box">
                <div class="stat-number" data-target="4" data-suffix="">0</div>
                <div class="stat-label">Data Projects</div>
              </div>
              <div class="stat-box">
                <div class="stat-number" data-target="92" data-suffix="%">0%</div>
                <div class="stat-label">Model Accuracy</div>
              </div>
            </div>
            <ul class="about-info-list">
              <li>
                <span class="info-icon">${icons.mapPin}</span>
                <span>${data.location}</span>
              </li>
              <li>
                <span class="info-icon">${icons.mail}</span>
                <span><a href="mailto:${data.email}">${data.email}</a></span>
              </li>
              <li>
                <span class="info-icon">${icons.link}</span>
                <span>
                  <a href="${data.socials.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
                  &nbsp;·&nbsp;
                  <a href="${data.socials.github}" target="_blank" rel="noopener">GitHub</a>
                </span>
              </li>
            </ul>
            <div class="about-education stagger">
              ${eduItems}
            </div>
          </div>
        </div>

      </div>
    </section>`;
}
