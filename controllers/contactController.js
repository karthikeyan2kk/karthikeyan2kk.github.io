function showToast(message, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.className = `toast ${type}`;

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setFieldError(groupId, hasError) {
  const group = document.getElementById(groupId);
  if (!group) return;
  const input = group.querySelector('input, textarea');
  if (hasError) {
    group.classList.add('has-error');
    if (input) input.classList.add('error');
  } else {
    group.classList.remove('has-error');
    if (input) input.classList.remove('error');
  }
}

export function initContactController() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  // Live validation: clear errors on input
  form.querySelectorAll('input, textarea').forEach((field) => {
    field.addEventListener('input', () => {
      const groupId = `fg-${field.name}`;
      setFieldError(groupId, false);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#contact-name').value.trim();
    const email = form.querySelector('#contact-email').value.trim();
    const subject = form.querySelector('#contact-subject').value.trim();
    const message = form.querySelector('#contact-message').value.trim();

    let isValid = true;

    if (!name) {
      setFieldError('fg-name', true);
      isValid = false;
    }
    if (!email || !validateEmail(email)) {
      setFieldError('fg-email', true);
      isValid = false;
    }
    if (!subject) {
      setFieldError('fg-subject', true);
      isValid = false;
    }
    if (!message) {
      setFieldError('fg-message', true);
      isValid = false;
    }

    if (!isValid) {
      showToast('Please fill in all required fields correctly.', 'error');
      return;
    }

    console.log('Contact form submitted:', { name, email, subject, message });

    const submitBtn = form.querySelector('.form-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    // Simulate async send
    setTimeout(() => {
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = `Send Message <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
      showToast('Message sent! I\'ll get back to you soon.', 'success');
    }, 900);
  });
}
