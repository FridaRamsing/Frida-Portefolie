# Product Optimization cases

Published files: `mellemrum.html`, `vuuh.html`, `encore.html`.
These are static pages compatible with GitHub Pages and direct URL refresh.
Only the supplied CASE COPY is published as narrative; build notes stay in comments.

## Character budget

Run `python3 scripts/count-case-text.py` from the repository root.
Initial total: 9,580 characters, including headings, navigation and link labels.
The counter excludes HTML markup, comments and inactive templates, normalises
whitespace and includes all currently published static text. Recount after adding
captions and prototype controls. Allow separately for illustrations and text-heavy
figures according to the exam brief. Do not count entire HTML files as body text.

## Materials to add with Frida

- Mellemrum: authentic homepage, search/registration UI and redacted database evidence;
  optional genuine before images, audit, Lighthouse and workflow evidence.
- Vuuh: final onboarding, Finding Cards, before/after dashboard and onboarding steps.
- ENCORE: desktop hero, brand comparison, research and buy/sell/trade-in sequence.
- Replace each `TODO media:` comment with a figure at its relevant narrative section.
  Shared CSS supports responsive figures and captions; no invented images are shown.
- Add genuine research source links for Vuuh usability principles and ENCORE's
  competitor/younger-audience research; no bibliographic sources were supplied.
- Confirm Vuuh's small evaluation and individual contribution claims with Frida;
  preserve the distinction between limited feedback and demonstrated user outcomes.
- Confirm Mellemrum's historic build/report/manual-run assertions with evidence.
  Local source confirms registration calls and a scheduled workflow, not past test results.
- The Mellemrum assignment also asks for data-model improvements and internal
  registration display. The supplied copy does not establish their completion.
  Discuss and document actual work or limitations rather than inventing compliance.
- Confirm school AI declaration rules and add a truthful declaration if required.

## Embeds and links

Case 1 includes an on-demand live-site iframe with a direct fallback link and test-data
notice. Its response was HTTP 200 with no frame-blocking header during implementation.
Repository and Vuuh audit URLs also returned HTTP 200; this does not verify document
contents, Figma sharing, or the live backend. No real registrations were submitted.

Case 1 has no supplied Figma URL; its comparison opens the selected site in a new tab.
Vuuh uses the supplied playable prototype embed and direct prototype/audit links.
ENCORE uses the supplied desktop and mobile prototype URLs in one switchable iframe,
plus a separate branddeck iframe and direct links. Authentic Figma exports show the
parent-brand context, ENCORE shop and trade-in selection. The screenshot exports
include browser chrome because it is part of the original design frames.
Local browser checks covered 1440, 390 and 320px widths, image loading and device
switching. Figma's cross-origin content did not finish loading in the automated check;
verify public sharing and playback manually before submission. Direct links remain
available if the embedded host cannot load.

## Submission

After deployment, test the three public URLs under `/Frida-Portefolie/cases/`.
Prepare the WISEflow PDF separately with Frida's name, class, programme and direct links.
Class/programme were not supplied. Deadline: 16 October 2026 before 12:00 Copenhagen time.
Do not edit submitted cases until assessment finishes.
