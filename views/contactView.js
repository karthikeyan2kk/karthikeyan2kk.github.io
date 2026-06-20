import { icons } from '../assets/js/icons.js';

export function render(data) {
  return `
    <section id="contact">
      <div class="container">
        <div class="section-header fade-up">
          <h2 class="section-title">Get In <span>Touch</span></h2>
          <div class="section-line"></div>
        </div>
        <div class="contact-grid">
          <div class="fade-up">
            <h3 class="contact-info-title">Let's Work Together</h3>
            <p class="contact-info-sub">
              I'm currently open to new opportunities in data engineering, machine learning,
              and analytical roles. Whether you have a project in mind or just want to connect —
              my inbox is always open.
            </p>
            <div class="contact-items">
              <div class="contact-item">
                <div class="contact-item-icon">${icons.mail}</div>
                <div>
                  <p class="contact-item-label">Email</p>
                  <p class="contact-item-value">
                    <a href="mailto:${data.email}">${data.email}</a>
                  </p>
                </div>
              </div>
              <div class="contact-item">
                <div class="contact-item-icon">${icons.mapPin}</div>
                <div>
                  <p class="contact-item-label">Location</p>
                  <p class="contact-item-value">${data.location}</p>
                </div>
              </div>
            </div>
            <div class="contact-socials">
              <a href="${data.socials.github}"   target="_blank" rel="noopener" title="GitHub">${icons.github}</a>
              <a href="${data.socials.linkedin}" target="_blank" rel="noopener" title="LinkedIn">${icons.linkedin}</a>
            </div>
          </div>

          <div class="fade-up">
            <form id="contactForm" class="contact-form" novalidate>
              <div class="form-row">
                <div class="form-group" id="fg-name">
                  <label for="contact-name">Full Name</label>
                  <input type="text" id="contact-name" name="name" placeholder="Your name" autocomplete="name" />
                  <span class="field-error">Please enter your name.</span>
                </div>
                <div class="form-group" id="fg-email">
                  <label for="contact-email">Email Address</label>
                  <input type="email" id="contact-email" name="email" placeholder="your@email.com" autocomplete="email" />
                  <span class="field-error">Please enter a valid email.</span>
                </div>
              </div>
              <div class="form-group" id="fg-subject">
                <label for="contact-subject">Subject</label>
                <input type="text" id="contact-subject" name="subject" placeholder="What's this about?" />
                <span class="field-error">Please enter a subject.</span>
              </div>
              <div class="form-group" id="fg-message">
                <label for="contact-message">Message</label>
                <textarea id="contact-message" name="message" rows="6" placeholder="Tell me about your project or opportunity..."></textarea>
                <span class="field-error">Please enter your message.</span>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary form-submit">
                  Send Message ${icons.externalLink}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>`;
}
