# Phase A setup slots

The current site deliberately distinguishes concept work, draft commercial terms, and unconnected services.

## Confirm before presenting these as final terms

- One-page starting rate: draft $250. Multi-page: draft $500. Confirm currency and scope.
- Timeline: draft 5–7 business days / 2–3 weeks after brief and content.
- Two consolidated revision rounds: draft.
- Founding-client rate: first two projects; exact terms remain unconfirmed.
- Payment schedule, response window, photo, background story, and profile URLs.

Edit the visible draft labels in `index.html` only after confirmation. Figma and HTML/CSS/JS are the specified tools. Do not add other platform expertise without verification.

## Connect enquiries and booking

Edit `config.js`:

```js
window.PORTFOLIO_CONFIG = {
  formEndpoint: '', // Paste https://formspree.io/f/YOUR_FORM_ID
  bookingUrl: '', // Paste your actual Cal.com or Calendly HTTPS event URL
  checklistPdfUrl: '', // Paste the actual HTTPS PDF link
  socialLinks: [], // { label: 'LinkedIn', url: 'https://...' }
};
```

Only public URLs belong here. Never add API secrets. With a valid Formspree endpoint, JavaScript sets both forms' action and method and handles success, failure and timeout states. Until then, the project form prepares a mailto draft, clearly states that nothing was sent, and lets the visitor open it. No draft is sent automatically. The checklist stays unavailable until BOTH endpoint and PDF URL exist. The PDF has not been written or created.

If you need delivery without JavaScript, set the real `action` and `method="POST"` directly on the HTML form, remove its disabled button, and configure the provider's redirect. Do not use a fake endpoint. Test with your own email only after setup, including failure and delivery behavior. When enabled, Formspree becomes a data processor: finalize retention information and update `privacy.html` before launch.

Formspree setup reference: https://help.formspree.io/articles/building-your-form/building-an-html-form

## Proof and About slots

In `index.html`, search for `testimonial-slot`, `redesign-slot`, `background-slot`, `social-slots`, and `PHOTO SLOT`. Templates are inert and not exposed as fake proof. Replace templates with verified content before making them visible. Never remove the independent-concept disclosure from an unsolicited redesign. Obtain permission for any testimonial and external image.

## Optional analytics

No tracker is installed or active. Find `ANALYTICS SETUP SLOT` in the HTML files and insert the exact snippet supplied by your Plausible dashboard. Configure matching event goals: Explore Work, Funnel Review, Case Study, Open Demo, Contact CTA, About Contact, Case Contact, Pilot Project, Booking CTA, Email CTA, Email Draft Prepared, Project Enquiry Submitted, Checklist Requested.

`app.js` calls `window.plausible()` only if it exists. It never sends form contents, email addresses, query parameters, or typed text as event properties. Update the privacy page when enabling analytics. Reference: https://plausible.io/docs/custom-event-goals

## SEO and hosting

Case-study text is static, indexable HTML. Demos retain `noindex` and are excluded from the sitemap. The sitemap has canonical URLs and no invented last-modified dates. Person/ProfessionalService markup contains only supplied details, with no invented ratings, address, or pricing.

GitHub project hosting serves this repository under `/funnel-design-portfolio/`. Crawlers look for robots.txt at the ORIGIN root, not at a project path. The included robots.txt is ready to copy into the separate `artjhenprixguray-byte.github.io` root repository if you create/manage one. Submit the full sitemap URL directly to Search Console in the meantime. This upgrade does not create or change a different repository. The 404 page uses the project base path so its links work from nested missing URLs.

## Assets and verification

Real screenshots of the interactive concepts accompany structural wireframes. Screenshot images are lazy-loaded with intrinsic dimensions; no image framework or JavaScript build is required. Google Fonts use display=swap and system fallbacks. The wireframe dialog uses native showModal, a keyboard focus loop, Esc close and opener focus restoration. Follow-up checks should include 360px, 390px, desktop, keyboard-only use, no JavaScript, form provider delivery, and sharing previews after production caching settles.
