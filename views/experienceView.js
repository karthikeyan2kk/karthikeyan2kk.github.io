export function render(experience) {
  const items = experience
    .map(
      (job, i) => `
      <div class="timeline-item fade-up">
        ${i % 2 === 0
          ? `<div class="timeline-content">
               <p class="timeline-duration">${job.duration}</p>
               <h3 class="timeline-role">${job.role}</h3>
               <p class="timeline-company">${job.company}</p>
               <ul class="timeline-points">
                 ${job.points.map((pt) => `<li>${pt}</li>`).join('')}
               </ul>
             </div>
             <div class="timeline-center">
               <div class="timeline-dot"></div>
               <div class="timeline-line"></div>
             </div>
             <div class="timeline-spacer"></div>`
          : `<div class="timeline-spacer"></div>
             <div class="timeline-center">
               <div class="timeline-dot"></div>
               <div class="timeline-line"></div>
             </div>
             <div class="timeline-content">
               <p class="timeline-duration">${job.duration}</p>
               <h3 class="timeline-role">${job.role}</h3>
               <p class="timeline-company">${job.company}</p>
               <ul class="timeline-points">
                 ${job.points.map((pt) => `<li>${pt}</li>`).join('')}
               </ul>
             </div>`
        }
      </div>
    `
    )
    .join('');

  return `
    <section id="experience">
      <div class="container">
        <div class="section-header fade-up">
          <h2 class="section-title">Work <span>Experience</span></h2>
          <div class="section-line"></div>
        </div>
        <div class="timeline">
          ${items}
        </div>
      </div>
    </section>
  `;
}
