# M. Consulting Website — Full Review & Grade
**Reviewer:** Lumi (Gemma 4)  
**Date:** 2026-07-20  
**Site URL:** https://m-consulting-website.vercel.app  
**Repo:** https://github.com/krioku-can/m-consulting-website

---

## 1. Design & Visual Fidelity

### ✅ What’s working
| Element | Assessment |
|---|---|
| Color palette | Exact brand-board colors: navy `#0B2A4A`, orange `#F26522`, cream `#F5F1EB`, gray `#E5E7EB`, charcoal `#333333` |
| Typography | Playfair Display headings + Montserrat body matches brand kit |
| Logo | Circular navy “M” with orange dot and underline; consistent across all pages |
| Homepage hero | Split layout: text left, desk photo right (mug with navy M, laptop, notebook, pen, eucalyptus) |
| Services section | 5 circular line-art icon cards match the brand board |
| Approach section | Dark navy background with 5 orange-numbered steps |
| Footer | Brand tagline + copyright; consistent across pages |
| Buttons | Navy primary, orange secondary, white outline styles present |
| About page | Marijke portrait added; layout matches new design language |

### ⚠️ Issues
1. **Hero image resolution / sharpness** — the desk photo was resized down to 1400px wide and may lose sharpness on high-DPI screens. Consider keeping original resolution or 2x export.
2. **LinkedIn banner** — saved as asset but **not yet optimized for LinkedIn crop zones**. Could lose logo on mobile. Minor.
3. **Icon fidelity** — service icons are Lucide line icons, not the exact custom circular line icons from the Canva brand kit. They’re close, but not 1:1.
4. **Mobile breakpoint** — need to verify the hero stacks gracefully and the nav collapses. Could not fully test via screenshot.
5. **Approach page (`momentum.html`)** — still uses old light section for “Why M. Consulting?” and “What Momentum Looks Like” instead of matching the dark approach band style from the homepage. Visual inconsistency.

### Design Grade: **A-**

---

## 2. Content & Claims Audit

### ✅ What’s working
- No TPG references found.
- Positioning language aligns with Marijke’s executive/fractional CHRO positioning from emails.
- Service taxonomy matches her documents: Fractional CHRO, Interim Executive, Executive Advisory, Career Strategy, Team Development, M&A Integration, etc.
- Contact email is `marijke.woodruff@gmail.com` — matches her email address.
- Stats/experience claims (“20 years,” “$100M to $600M,” “CHRO of the Year”) were sourced from her documents in earlier extraction.

### ⚠️ Issues
1. **No explicit sourcing on the live site** — the site says “award-winning Chief Human Resources Officer” and “more than 20 years” but does not cite the source document on the page. For client work this should be fine, but per your strict fact-check rule, we should flag this as “claims from client docs, not independently verified.”
2. **“Campus to Career” service card** on homepage is not reflected as a top-level service category on `services.html`. The homepage lists it as a service, but the services page groups things under Fractional Executive Leadership / Advisory & Consulting. Minor inconsistency.
3. **Approach page header** reads “Our Approach” instead of the brand-board “Assess. Clarify. Strategize. Activate. Sustain.” Could be intentional, but the brand board shows that as a prominent section tagline.

### Content Grade: **B+**

---

## 3. Functionality & UX

### ✅ What’s working
- All pages load and link correctly.
- Navigation is consistent across all 5 pages.
- Contact form is present with dropdown and required fields.
- “Book a Consultation” CTA appears in nav and hero.
- Live on HTTPS via Vercel.

### ❌ Issues
1. **Contact form is not functional** — it has no backend. Submissions go nowhere. This is the most important functional gap.
2. **“Schedule a Conversation” buttons** are placeholder links (likely `#` or no href). Need Cal.com/Calendly link.
3. **No spam protection** on the form.
4. **No success/error states** on the contact form.
5. **No favicon** — browser tab shows default.
6. **No meta description / Open Graph tags** — bad for SEO and social sharing.
7. **Approach page (`momentum.html`) still loads** but is no longer linked in the main nav as “Approach” — wait, it is linked. Actually nav says “Approach” and links to `momentum.html`. That’s fine, but the brand board labels it as part of the homepage. The separate page is extra.

### Functionality Grade: **C+**

---

## 4. Brand Board Alignment

| Brand Board Element | Site Match |
|---|---|
| Navy/orange/cream palette | ✅ Yes |
| Playfair Display + Montserrat | ✅ Yes |
| Circular M logo | ✅ Yes |
| LinkedIn banner | ✅ Asset saved, not uploaded |
| Split hero with desk photo | ✅ Yes |
| 5 circular service icons | ✅ Close, custom icons would be better |
| Dark approach band | ✅ On homepage |
| Footer tagline | ✅ Yes |
| Button styles | ✅ Yes |

### Brand Alignment Grade: **A-**

---

## 5. Overall Grade

**B+**

The site now looks professional, brand-consistent, and close to the reference board. The biggest gaps are functional (form backend, scheduling links, SEO meta tags) and a few minor visual/content inconsistencies on the Approach page.

---

## 6. Priority Fixes Before Marijke Call

| Priority | Fix | Effort |
|---|---|---|
| **P1** | Add contact form backend | Medium |
| **P1** | Add Cal.com/Calendly scheduling link to “Schedule a Conversation” buttons | Small |
| **P2** | Add SEO meta descriptions + Open Graph tags | Small |
| **P2** | Add favicon | Small |
| **P2** | Make Approach page (`momentum.html`) visually consistent with homepage dark band | Small |
| **P3** | Replace Lucide icons with custom brand-board-style circular line icons | Medium |
| **P3** | Optimize hero image for retina screens | Small |
| **P3** | Test mobile breakpoints | Small |

---

## 7. Open Questions for Marijke (Tomorrow)

1. Does the site match your vision? Any design tweaks?
2. Hero photo — keep the desk image or swap for something else?
3. Do you want to purchase `m.consulting.com`? (GoDaddy receipt from April 29 — need to confirm status)
4. Contact form submissions: send to `marijke.woodruff@gmail.com`?
5. Auto-reply to people who submit the form?
6. Calendly/Cal.com scheduling link?
7. What services belong in the dropdown?
8. Do you want a privacy policy / compliance note on the contact form?
