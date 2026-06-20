// ── Smooth scroll + active nav highlight ────────────────────────────────────
export function initSmoothScroll() {
  const navbar    = document.getElementById('navbar');
  const navLinks  = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections  = document.querySelectorAll('section[id]');
  const hamburger = document.getElementById('navHamburger');
  const navMenu   = document.getElementById('navLinks');

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
    updateActiveLink();
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function updateActiveLink() {
    let current = '';
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 90) current = s.id;
    });
    navLinks.forEach((a) => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }

  navLinks.forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({ top: target.offsetTop - (navbar?.offsetHeight ?? 70), behavior: 'smooth' });
        }
        navMenu?.classList.remove('open');
        hamburger?.classList.remove('open');
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    if (!a.closest('.nav-links')) {
      a.addEventListener('click', (e) => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
          e.preventDefault();
          window.scrollTo({ top: target.offsetTop - (navbar?.offsetHeight ?? 70), behavior: 'smooth' });
        }
      });
    }
  });

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navMenu?.classList.toggle('open');
  });
}

// ── Intersection Observer fade-in animations ────────────────────────────────
export function initAnimations() {
  const obs = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.fade-up, .stagger').forEach((el) => obs.observe(el));
}

// ── Terminal animation (loops) ───────────────────────────────────────────────
export function initTerminal(name) {
  const body = document.getElementById('terminalBody');
  if (!body) return;

  const PROMPT = 'karthikeyan@portfolio:~$';

  const sequence = [
    { cmd: 'whoami',                    output: name,                                                          cls: 'out-name'   },
    { cmd: 'cat role.txt',              output: 'Data Engineer  |  Data Analyst  |  ML Practitioner',         cls: 'out-role'   },
    { cmd: 'cat education.txt',         output: 'M.S. Information Technology and Management — Illinois Institute of Technology',  cls: 'out-info'   },
    { cmd: 'cat location.txt',          output: 'Chicago, IL  —  open to remote & relocation',                cls: 'out-info'   },
    { cmd: 'ls projects/ | head -4',    output: 'healthcare-ml/   supply-chain/   yelp-analytics/   etl-pipeline/',  cls: 'out-skills' },
    { cmd: 'cat skills/core.txt',       output: 'Python  •  PySpark  •  PyTorch  •  Power-BI  •  AWS  •  Docker',   cls: 'out-skills' },
    { cmd: 'echo $AVAILABILITY',        output: '[OPEN]  Actively seeking new opportunities',                 cls: 'out-status' },
  ];

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  async function typeText(el, text, speed = 95) {
    for (const ch of text) {
      el.textContent += ch;
      await sleep(speed + Math.random() * 35 - 10);
    }
  }

  async function run() {
    body.style.transition = 'none';
    body.style.opacity    = '1';
    body.innerHTML        = '';

    for (const { cmd, output, cls } of sequence) {
      const line     = document.createElement('div');
      line.className = 'term-line';

      const prompt   = document.createElement('span');
      prompt.className = 'term-prompt';
      prompt.textContent = PROMPT;

      const cmd_el   = document.createElement('span');
      cmd_el.className = 'term-cmd';

      const cursor   = document.createElement('span');
      cursor.className = 'term-cursor';

      line.append(prompt, cmd_el, cursor);
      body.appendChild(line);
      body.scrollTop = body.scrollHeight;

      await sleep(320);
      await typeText(cmd_el, cmd);
      await sleep(220);
      cursor.remove();

      const out     = document.createElement('div');
      out.className = `term-output ${cls}`;
      out.textContent = output;
      body.appendChild(out);

      requestAnimationFrame(() => requestAnimationFrame(() => out.classList.add('visible')));
      body.scrollTop = body.scrollHeight;
      await sleep(480);
    }

    // idle prompt
    const idle     = document.createElement('div');
    idle.className = 'term-line';
    idle.innerHTML = `<span class="term-prompt">${PROMPT}</span><span class="term-cursor"></span>`;
    body.appendChild(idle);
    body.scrollTop = body.scrollHeight;

    await sleep(3500);

    // fade out → restart
    body.style.transition = 'opacity 0.55s ease';
    body.style.opacity    = '0';
    await sleep(620);
    run();
  }

  // Show splash gate first
  function showSplash() {
    body.innerHTML = `
      <div class="term-splash">
        <div class="term-line">
          <span class="term-prompt">${PROMPT}</span>
          <span class="term-cursor"></span>
        </div>
        <p class="term-splash-msg">
          Press <kbd class="term-kbd">Enter</kbd> or
          <span class="term-splash-click">click here</span> to continue
        </p>
      </div>`;

    return new Promise((resolve) => {
      const onKey   = (e) => { if (e.key === 'Enter') cleanup(resolve); };
      const onClick = ()  => cleanup(resolve);

      function cleanup(res) {
        document.removeEventListener('keydown', onKey);
        body.removeEventListener('click', onClick);
        res();
      }

      document.addEventListener('keydown', onKey);
      body.addEventListener('click', onClick);
    });
  }

  (async () => {
    await showSplash();
    run();
  })();
}

// ── Skills tabs ──────────────────────────────────────────────────────────────
export function initSkills() {
  const tabs   = document.querySelectorAll('.skills-tab');
  const panels = document.querySelectorAll('.skills-panel');
  if (!tabs.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t)   => t.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));
      tab.classList.add('active');

      const panel = document.getElementById(`panel-${tab.dataset.tab}`);
      if (!panel) return;
      panel.classList.add('active');

      // stagger badges in
      panel.querySelectorAll('.skill-badge').forEach((badge, i) => {
        badge.style.opacity   = '0';
        badge.style.transform = 'translateY(8px)';
        badge.style.transition = 'none';
        setTimeout(() => {
          badge.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
          badge.style.opacity   = '1';
          badge.style.transform = 'none';
        }, i * 35);
      });
    });
  });
}

// ── Stat counter animation ───────────────────────────────────────────────────
export function initCounters() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        obs.unobserve(e.target);
        const target = parseInt(e.target.dataset.target, 10);
        const suffix = e.target.dataset.suffix ?? '';
        if (!target) return;

        let current = 0;
        const step  = target / 50;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            e.target.textContent = target + suffix;
            clearInterval(timer);
          } else {
            e.target.textContent = Math.floor(current) + suffix;
          }
        }, 20);
      });
    },
    { threshold: 0.6 }
  );

  document.querySelectorAll('.stat-number[data-target]').forEach((el) => obs.observe(el));
}

// ── Custom terminal cursor ───────────────────────────────────────────────────
export function initCursor() {
  const cur = document.createElement('div');
  cur.id    = 'custom-cursor';
  document.body.appendChild(cur);

  let raf;

  document.addEventListener('mousemove', (e) => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      cur.style.left = e.clientX + 'px';
      cur.style.top  = e.clientY + 'px';
      cur.style.opacity = '1';
    });
  });

  document.addEventListener('mouseleave', () => { cur.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { cur.style.opacity = '1'; });

  // pause blink on mousedown
  document.addEventListener('mousedown', () => {
    cur.style.animationPlayState = 'paused';
    cur.style.opacity = '1';
  });
  document.addEventListener('mouseup', () => {
    cur.style.animationPlayState = 'running';
  });
}

// ── Preloader boot sequence ──────────────────────────────────────────────────
export async function initPreloader() {
  const el  = document.getElementById('preloader');
  const log = document.getElementById('bootLog');
  const cur = document.querySelector('.boot-cursor-line');
  if (!el || !log) return;

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const steps = [
    { cls: 'boot-tag-boot', text: '[BOOT]   Initializing portfolio system...',           pause: 320 },
    { cls: 'boot-tag-sys',  text: '[SYS]    Loading modules',                            pause: 0, progress: true },
    { cls: 'boot-tag-ok',   text: '[OK]     Data pipeline        — loaded',               pause: 180 },
    { cls: 'boot-tag-ok',   text: '[OK]     Machine learning     — models cached',        pause: 160 },
    { cls: 'boot-tag-ok',   text: '[OK]     Analytics engine     — ready',                pause: 160 },
    { cls: 'boot-tag-ok',   text: '[OK]     Profile              — authenticated',         pause: 200 },
    { cls: 'boot-tag-warn', text: '[INFO]   Location: Chicago, IL  |  Status: Open to work', pause: 260 },
    { cls: 'boot-tag-start',text: '[START]  Welcome to Karthikeyan Saravanan\'s portfolio', pause: 500 },
  ];

  for (const step of steps) {
    const div = document.createElement('div');
    div.className = `boot-line ${step.cls}`;
    div.textContent = step.text;
    log.appendChild(div);
    requestAnimationFrame(() => requestAnimationFrame(() => div.classList.add('show')));

    if (step.progress) {
      await sleep(120);
      const wrap = document.createElement('div');
      wrap.className = 'boot-progress-wrap';
      const fill = document.createElement('div');
      fill.className = 'boot-progress-fill';
      wrap.appendChild(fill);
      log.appendChild(wrap);
      await sleep(60);
      fill.style.width = '100%';
      await sleep(620);
    } else {
      await sleep(step.pause);
    }
  }

  cur?.classList.add('show');
  await sleep(500);

  el.classList.add('fade-out');
  await sleep(750);
  el.remove();
}

// ── Hero particle field ──────────────────────────────────────────────────────
export function initParticles() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles, raf;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function Particle() {
    this.x  = Math.random() * W;
    this.y  = Math.random() * H;
    this.vx = (Math.random() - 0.5) * 0.35;
    this.vy = (Math.random() - 0.5) * 0.35;
    this.r  = Math.random() * 1.4 + 0.4;
  }

  function init() {
    resize();
    particles = Array.from({ length: 72 }, () => new Particle());
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(100,255,218,0.45)';
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(100,255,218,${0.10 * (1 - d / 130)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    raf = requestAnimationFrame(draw);
  }

  init();
  draw();

  const resizeObs = new ResizeObserver(() => resize());
  resizeObs.observe(canvas.parentElement);
}

// ── Typewriter effect on section titles ──────────────────────────────────────
export function initSectionTypewriter() {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const titles = document.querySelectorAll('.section-title');
  if (!titles.length) return;

  // Pre-parse each title into typed tokens before clearing
  const stored = new Map();
  titles.forEach((el) => {
    const html = el.innerHTML;
    const tokens = [];
    let i = 0;
    while (i < html.length) {
      if (html[i] === '<') {
        const close = html.indexOf('>', i);
        if (close === -1) { i++; continue; }
        const tag = html.slice(i, close + 1);
        if (tag.toLowerCase().startsWith('<span')) {
          const spanEnd = html.indexOf('</span>', close + 1);
          if (spanEnd === -1) { i = close + 1; continue; }
          const inner = html.slice(close + 1, spanEnd);
          tokens.push({ type: 'span', inner });
          i = spanEnd + 7;
        } else {
          i = close + 1;
        }
      } else {
        tokens.push({ type: 'char', ch: html[i] });
        i++;
      }
    }
    stored.set(el, tokens);
    el.innerHTML = '';
    el.style.minHeight = '1.2em'; // prevent layout shift while empty
  });

  async function typeTitle(el) {
    const tokens = stored.get(el);
    if (!tokens) return;
    let spanEl = null;
    for (const token of tokens) {
      if (token.type === 'char') {
        spanEl = null;
        el.innerHTML += token.ch;
        await sleep(42);
      } else {
        spanEl = document.createElement('span');
        el.appendChild(spanEl);
        for (const ch of token.inner) {
          spanEl.textContent += ch;
          await sleep(42);
        }
      }
    }
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      obs.unobserve(e.target);
      typeTitle(e.target);
    });
  }, { threshold: 0.75 });

  titles.forEach((el) => obs.observe(el));
}

// ── Scroll-to-top button ─────────────────────────────────────────────────────
export function initScrollTop() {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
