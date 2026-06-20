import { portfolioData } from '../models/data.js';
import { render as renderHero } from '../views/heroView.js';
import { render as renderAbout } from '../views/aboutView.js';
import { render as renderSkills } from '../views/skillsView.js';
import { render as renderProjects } from '../views/projectsView.js';
import { render as renderExperience } from '../views/experienceView.js';
import { render as renderAchievements } from '../views/achievementsView.js';
import { render as renderContact } from '../views/contactView.js';
import { initSmoothScroll, initAnimations, initTerminal, initSkills, initCursor, initCounters, initScrollTop, initParticles, initSectionTypewriter, initPreloader } from '../assets/js/smoothScroll.js';
import { initContactController } from './contactController.js';

function buildNav(data) {
  return `
    <nav id="navbar">
      <div class="nav-inner">
        <a href="#hero" class="nav-logo">
          ${data.name.split(' ')[0]}<span>.</span>
        </a>
        <button class="nav-hamburger" id="navHamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="navLinks">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact" class="nav-resume">Contact</a></li>
        </ul>
      </div>
    </nav>
  `;
}

function buildFooter(data) {
  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact'];
  return `
    <footer>
      <div class="container">
        <div class="footer-inner">
          <div class="footer-brand">
            <h3>${data.name.split(' ')[0]}<span>.</span></h3>
            <p>Data Engineer & ML Practitioner based in ${data.location}.</p>
          </div>
          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
              ${navItems.map((item) => `<li><a href="#${item.toLowerCase()}">${item}</a></li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} ${data.name}. Built with vanilla HTML, CSS & JS.</p>
          <div class="footer-socials">
            <a href="${data.socials.github}" target="_blank" rel="noopener" title="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href="${data.socials.linkedin}" target="_blank" rel="noopener" title="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // Build navigation
  document.body.insertAdjacentHTML('afterbegin', buildNav(portfolioData));

  // Scroll-to-top button
  document.body.insertAdjacentHTML('beforeend', `
    <button id="scrollTopBtn" aria-label="Back to top">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>`);

  // Render all sections
  app.innerHTML =
    renderHero() +
    renderAbout(portfolioData) +
    renderSkills(portfolioData.skills) +
    renderProjects(portfolioData.projects) +
    renderExperience(portfolioData.experience) +
    renderAchievements(portfolioData.achievements) +
    renderContact(portfolioData);

  // Append footer
  document.body.insertAdjacentHTML('beforeend', buildFooter(portfolioData));

  // Init behaviors
  initSmoothScroll();
  initAnimations();
  initTerminal(portfolioData.name);
  initSkills();
  initCursor();
  initCounters();
  initScrollTop();
  initParticles();
  initSectionTypewriter();
  initPreloader();
  initContactController();
});
