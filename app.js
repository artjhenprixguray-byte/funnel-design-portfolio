(() => {
  'use strict';
  const config = window.PORTFOLIO_CONFIG || {};
  const httpsUrl = value => { try { const u = new URL(value); return u.protocol === 'https:' && !/[\[\]]/.test(value) ? u.href : ''; } catch { return ''; } };
  const endpoint = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(config.formEndpoint || '') ? config.formEndpoint : '';
  const pdf = httpsUrl(config.checklistPdfUrl);
  const year = document.querySelector('#year'); if (year) year.textContent = new Date().getFullYear();
  // Add the exact Plausible dashboard snippet to the HTML to activate analytics.
  // Deliberately do not queue events or attach form data to analytics.
  const track = name => { if (typeof window.plausible === 'function') window.plausible(name); };
  document.addEventListener('click', event => { const cta = event.target.closest('[data-track]'); if (cta) track(cta.dataset.track); });
  const booking = document.querySelector('#booking-link');
  if (booking && httpsUrl(config.bookingUrl)) { booking.href = httpsUrl(config.bookingUrl); booking.textContent = 'Book a free 15-minute funnel review'; document.querySelector('#booking-note').textContent = 'Choose an available time on my booking page.'; }
  document.querySelectorAll('[data-review]').forEach(link => link.addEventListener('click', () => { const select = document.querySelector('#project-type'); if (select) select.value = 'Free 15-minute funnel review'; }));
  const socials = document.querySelector('#social-links');
  if (socials) (config.socialLinks || []).forEach(item => { const url = httpsUrl(item.url); if (!url || !item.label) return; const a = document.createElement('a'); a.href = url; a.textContent = item.label; a.className = 'text-button'; socials.append(a); socials.hidden = false; });
  document.querySelectorAll('[data-static-form]').forEach(form => {
    const kind = form.dataset.staticForm;
    const button = form.querySelector('button[type="submit"]');
    const status = form.querySelector('.form-status');
    const ready = !!endpoint && (kind !== 'checklist' || !!pdf);
    if (kind === 'project') button.disabled = false;
    if (ready) {
      form.action = endpoint; form.method = 'POST'; button.disabled = false;
      button.textContent = kind === 'project' ? 'Send project enquiry' : 'Get the 5-point checklist';
      if (kind === 'project') document.querySelector('#project-form-note').textContent = 'Your details will be sent through Formspree to Art to respond to your enquiry.';
      else { document.querySelector('#checklist .draft-note').hidden = true; document.querySelector('#checklist-privacy').textContent = 'Your name and email go through Formspree for this checklist request. No newsletter signup is implied. See Privacy for details.'; }
    }
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      if (!ready) {
        if (kind === 'checklist') { status.textContent = 'Signup is not connected yet. Nothing was sent.'; return; }
        const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nProject: ${data.get('project')}\n\n${data.get('message')}`;
        const link = form.querySelector('[data-email-draft]');
        link.href = 'mailto:artjhenprix.guray@gmail.com?subject=' + encodeURIComponent('Portfolio enquiry: ' + data.get('project')) + '&body=' + encodeURIComponent(body);
        link.hidden = false;
        status.textContent = 'Your draft is ready. Nothing has been sent. Open it below, review it, and send it from your email app. If your email app does not open, use the email address beside this form.';
        status.focus(); track('Email Draft Prepared'); return;
      }
      button.disabled = true; button.textContent = 'Sending…'; status.textContent = '';
      data.set('_subject', kind === 'checklist' ? '5-point funnel checklist request' : 'Portfolio project enquiry');
      const controller = new AbortController(); const timeout = setTimeout(() => controller.abort(), 15000);
      try {
        const response = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' }, signal: controller.signal });
        if (!response.ok) throw new Error('Submission failed');
        status.textContent = kind === 'project' ? 'Thank you. Your enquiry has been submitted. Art will follow up by email.' : 'Thank you for requesting the checklist. Your download is below.';
        if (kind === 'checklist') { const a = form.querySelector('[data-checklist-download]'); a.href = pdf; a.hidden = false; }
        form.reset(); track(kind === 'project' ? 'Project Enquiry Submitted' : 'Checklist Requested');
      } catch {
        status.textContent = 'Delivery could not be confirmed. Your details are still here. Please try again or contact Art by email. If the connection timed out, avoid repeated submissions.';
      } finally { clearTimeout(timeout); button.disabled = false; button.textContent = kind === 'project' ? 'Send project enquiry' : 'Get the 5-point checklist'; status.focus(); }
    });
  });
  const dialog = document.querySelector('#image-dialog');
  if (dialog) {
    let opener;
    document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
      opener = button; document.querySelector('#image-title').textContent = button.dataset.title;
      const image = document.querySelector('#modal-image'); image.src = button.dataset.image; image.alt = button.querySelector('img').alt;
      dialog.showModal(); document.body.classList.add('modal-open'); dialog.querySelector('.close').focus();
    }));
    dialog.querySelector('.close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('cancel', event => { event.preventDefault(); dialog.close(); });
    dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); opener?.focus(); });
    dialog.addEventListener('keydown', event => {
      if (event.key !== 'Tab') return;
      const items = [...dialog.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),[tabindex="0"]')].filter(el => !el.hidden);
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    });
    dialog.addEventListener('click', event => { if (event.target !== dialog) return; const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); });
  }
})();
