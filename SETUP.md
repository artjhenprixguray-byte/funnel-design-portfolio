# Portfolio update — setup and testing

Upload the CONTENTS of this folder to the root of artjhenprixguray-byte/funnel-design-portfolio. Keep GitHub Pages on main / root. There is no build command.

## Files
- index.html: complete homepage, inline styles and scripts; edit its CONFIG block near the bottom.
- demo.html: complete self-contained interactive concepts. Keep ?project=coaching, ?project=course and ?project=lead. Demo pages are noindex and never send or store entered details.
- align-case-study.html, forma-case-study.html, fieldnotes-case-study.html: indexable static case-study copy and image previews.
- case.css: supporting-page styles.
- profile.jpg: optimized About portrait.
- og-image.png: complete 1200 × 630 sharing image.
- *-desktop.jpg / *-mobile.jpg: responsive demo previews.
- favicon.svg, sitemap.xml, robots.txt, 404.html, privacy.html: supporting assets.
- styles.css, app.js and config.js: legacy supporting files used by the privacy page; homepage settings are now in index.html.

## Confirmed details
USD $500 one page; multi-page from USD $1,200. One page 7–10 business days; multi-page 4–5 weeks depending on difficulty, after brief/content. Two revision rounds. 50% before starting and 50% on completion before release. Coded builds or GoHighLevel; other platforms by agreed handoff.

Calendly: https://calendly.com/artjhenprix-guray/30min — despite the legacy URL slug, the event is named Free 15-minute funnel review and lasts 15 minutes. Availability Monday–Friday 8 AM–5 PM Eastern, weekends unavailable. Visitors see times in their own timezone. No test appointment was created.

## Slots still to fill
- Formspree endpoint: the HTTPS address that receives a form submission and delivers it to your inbox. Create a form in your own Formspree account, verify the destination email, then copy its endpoint into CONFIG.formEndpoint. This is a public form URL, not a password/API secret.
- Checklist PDF: CONFIG.checklistPdfUrl. The checklist was not written or created. Signup stays disabled until endpoint AND PDF URL are set.
- Confirm whether full copywriting is included or separately quoted.
- Personal background/story, response-time commitment, genuine testimonial with permission.
- Founding-client/pilot offer terms and availability; optional unsolicited redesign with a clear non-affiliation disclosure.
- Real commercial terms inside the fictional Forma concept are deliberately absent; price/access/refund placeholders are not your freelance prices.
- Plausible account installation code. Analytics is commented out; CTA hooks are ready. Use event names Book Review, Start Project, Open Demo, Read Case Study, Email Contact, WhatsApp Contact, Prepare Enquiry, Project Enquiry, Checklist Request. Never include contact details as properties.
- Before direct collection, update privacy.html with your actual processing and retention terms. Test Formspree delivery and failure behavior with your own email after configuration.

## Make or replace the sharing image
A ready-made og-image.png is included. To make a replacement:
1. Create a 1200 × 630 px canvas in an image editor.
2. Set the background to #f4f3ed; keep text at least 70 px from the edges.
3. Add “Art Jhen Prix Guray / Funnel Design” at the top, followed by “Good design. Clear direction. One next step.” Use dark #242a26 text and a calm serif face.
4. Export as PNG named exactly og-image.png, preferably below 300 KB.
5. Put it beside index.html at the repo root. The Open Graph and Twitter tags already point to that URL.
6. After deployment, open the image URL directly and refresh the relevant sharing platform's preview cache if needed.

## Test before future publishing
1. Open index.html locally; JavaScript requires no build. Use a local static server if you need to test live Formspree requests.
2. At 360 px and 390 px widths, check navigation wrapping, long headings, forms, and the bottom CTA bars. Check desktop too.
3. Use Tab/Shift+Tab through links, forms and case-study image dialogs. Escape closes the dialog; focus returns to the opener.
4. Align: try empty/invalid fields, complete all steps with sample details, go back, review, then choose a mock time. No booking should occur.
5. Forma: expand modules and FAQ; open the checkout preview. No payment fields or charge should exist.
6. Fieldnotes: reject an invalid email, submit a sample valid email, then open the sample prompt. No delivery should be claimed.
7. Contact: without an endpoint it prepares an email draft, which you send yourself. With an endpoint test successful delivery, validation and network failure. Checklist stays disabled until the PDF is real.
8. Test reduced-motion settings and keyboard focus. Verify local links, the Calendly event, and social URLs. TikTok's profile could not be independently verified; its URL uses your supplied handle.
9. Confirm 404 styling from a nested missing URL. Demos must remain noindex; case-study text should remain available without JavaScript.
10. Commit/upload, wait for the Pages deployment, then check the public site in a fresh browser session.

GitHub project-site robots.txt is not the origin robots.txt. Submit the full sitemap URL to Search Console; if you manage a separate artjhenprixguray-byte.github.io root repo, add the Sitemap directive there too.
