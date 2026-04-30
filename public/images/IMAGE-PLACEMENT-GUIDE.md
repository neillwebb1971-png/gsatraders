# GSA Traders — Image Placement Guide

Replace the placeholder divs in each component/page with `<Image>` tags pointing to these paths.

---

## Logo

| File | Usage | Notes |
|------|-------|-------|
| `/images/logo/gsa-logo.png` | Header (light bg) | PNG with transparency. Approx 200×60px min |
| `/images/logo/gsa-logo-white.png` | Footer (dark bg) | White version for dark backgrounds |

In `components/Header.tsx` — replace the `<div>GSA</div>` placeholder.
In `components/Footer.tsx` — replace the `<div>GSA</div>` placeholder.

---

## Hero

| File | Usage | Notes |
|------|-------|-------|
| `/images/hero/hero-bg.jpg` | Home page hero background | Full-bleed. Min 1920×1080px. Seafood/ocean/facility shot. Dark enough to overlay white text. |

In `app/page.tsx` — replace the gradient div in the hero section.

---

## Team / Family

| File | Usage | Notes |
|------|-------|-------|
| `/images/team/founders-story.jpg` | About page — story section | Candid photo of Gino & Susan |
| `/images/team/frank.jpg` | About page — next gen | Frank Asaro portrait |
| `/images/team/giovanni.jpg` | About page — next gen | Giovanni Asaro portrait |
| `/images/team/founders.jpg` | Home page — family preview | Founders together |
| `/images/team/next-gen.jpg` | Home page — family preview | Frank & Giovanni together |

---

## Processing Facility

| File | Usage | Notes |
|------|-------|-------|
| `/images/facility/processing-floor.jpg` | Processing page gallery + Home capabilities | Facility interior shot |
| `/images/facility/portioning.jpg` | Processing page gallery | Hands-on portioning/filleting |
| `/images/facility/cold-storage.jpg` | Processing page gallery | Freezer/cold storage interior |
| `/images/facility/packaging.jpg` | Processing page gallery | Packaging line or finished product boxes |
| `/images/facility/dispatch.jpg` | Processing page gallery | Trucks, loading dock, or dispatch area |
| `/images/facility/quality-control.jpg` | Processing page gallery | QC inspection or grading table |

---

## Products

| File | Usage | Notes |
|------|-------|-------|
| `/images/products/hake.jpg` | White fish category | Cape Hake product shot |
| `/images/products/squid.jpg` | Cephalopods category | Squid/calamari product shot |
| `/images/products/crayfish.jpg` | Crustaceans category | Rock lobster/crayfish shot |
| `/images/products/tuna.jpg` | Large pelagics category | Tuna loins or whole fish |
| `/images/products/yellowtail.jpg` | Game fish category | Yellowtail on ice |

---

## Certifications

| File | Usage | Notes |
|------|-------|-------|
| `/images/certifications/haccp.png` | Certification strip | HACCP logo (obtain from certifying body) |
| `/images/certifications/eu.png` | Certification strip | EU export approval logo |
| `/images/certifications/fda.png` | Certification strip | FDA registration logo |
| `/images/certifications/nrcs.png` | Certification strip | NRCS logo |
| `/images/certifications/daff.png` | Certification strip | DAFF/DFFE logo |

In `components/CertificationStrip.tsx` — replace `<ShieldCheck>` icons with `<Image>` tags.

---

## Maps (Contact page)

| File | Usage | Notes |
|------|-------|-------|
| `/images/hero/cape-town-map.jpg` | Contact page — CT branch | Screenshot from Google Maps or static map |
| `/images/hero/kzn-map.jpg` | Contact page — KZN branch | Screenshot from Google Maps or static map |

Alternatively, replace with embedded `<iframe>` Google Maps embed codes.
