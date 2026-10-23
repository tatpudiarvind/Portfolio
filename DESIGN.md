---
name: Arvind Tatpudi Portfolio
description: A dark, experience-led portfolio focused on healthcare software, applied AI, and dependable backend systems.
colors:
  background: "#09090d"
  surface: "#111117"
  surface-raised: "#17171f"
  line: "#292832"
  line-strong: "#3a3946"
  foreground: "#eeedf3"
  muted: "#aaa6b8"
  dim: "#89859b"
  lilac: "#bb9cff"
  blue: "#79aaff"
  pink: "#e68cc8"
  green: "#8dd8b5"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(3.5rem, 6vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.045em"
  section:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(2.8rem, 5.5vw, 4.7rem)"
    fontWeight: 400
    lineHeight: 1
  body:
    fontFamily: "Manrope, Segoe UI, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "DM Mono, Consolas, monospace"
    fontSize: "0.65rem"
    fontWeight: 400
    letterSpacing: "0.12em"
  scale:
    label-compact: "0.48rem"
    label-small: "0.52rem"
    label-meta: "0.55rem"
    label-base: "0.65rem"
    body-compact: "0.58rem"
    body-extra-compact: "0.48rem"
    body-micro: "0.49rem"
    body-metadata: "0.5rem"
    body-label-small: "0.52rem"
    body-label-meta: "0.53rem"
    body-meta: "0.55rem"
    body-small: "0.62rem"
    body-detail: "0.61rem"
    body-support: "0.68rem"
    body-action: "0.74rem"
    body-lead: "0.9rem"
    body-default: "1rem"
    body-copy: "0.8rem"
    body-regular: "0.94rem"
    body-nav: "0.76rem"
    body-section-aside: "0.82rem"
    body-mobile: "0.78rem"
    body-mobile-copy: "0.72rem"
    body-mobile-meta: "0.67rem"
    title-small: "1.9rem"
    title-feature: "2.25rem"
    title-mobile: "2.55rem"
    title-mobile-large: "2.8rem"
    title-mobile-compact: "2.45rem"
    title-mobile-wide: "2.5rem"
    title-mobile-section: "2.7rem"
    title-case-wide: "3.8rem"
    title-contact: "5.2rem"
    title-display-maximum: "5.5rem"
  fluid:
    hero-mobile: "clamp(3rem, 12.2vw, 4.3rem)"
    section-mobile: "clamp(2.7rem, 11.5vw, 3.8rem)"
    section: "clamp(2.8rem, 5.5vw, 4.7rem)"
    case-pair: "clamp(2rem, 3.5vw, 3rem)"
    case-wide: "clamp(2.2rem, 3.8vw, 3.4rem)"
    case-title: "clamp(2.25rem, 4vw, 3.8rem)"
    contact: "clamp(3rem, 6vw, 5.2rem)"
components:
  primary-button:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.background}"
    minimumHeight: "44px"
    padding: "0.7rem 1.1rem"
---

# Design System: Arvind Tatpudi Portfolio

## Overview

**Creative North Star: "Systems in the spotlight"**

This portfolio places the engineering work, not a profile card, at the center of the first impression. A near-black field, sparse star points, and narrow hatched edges create a quiet technical atmosphere; an original case-flow diagram provides the first concrete proof. Project stories then open progressively, with the in-progress backend work clearly distinguished from completed experience.

The page borrows only broad UX cues from the cited public reference: a centered introduction, strong display typography, concise current-work context, and an evidence-led scroll. Its content, code, diagrams, and visual details are original.

## Physical scene

Recruiters and engineering peers scan the portfolio on laptop or mobile screens, often between meetings; the low-luminance dark canvas reduces glare while focused contrast makes the project path easy to follow.

## Color

The dark neutral field owns most of the page. Lavender and blue identify selected emphasis and active system stages; mint is reserved for positive or live states. Pink appears only as a small identity signal. Supporting text uses cool pale neutrals rather than low-contrast gray.

### Core palette
- **Background:** #09090d
- **Surface:** #111117; raised surface #17171f
- **Rules:** #292832 and #3a3946
- **Foreground:** #eeedf3
- **Muted / dim:** #aaa6b8 / #89859b
- **Signal accents:** lavender #bb9cff, blue #79aaff, pink #e68cc8, mint #8dd8b5

### Named rules
- Use accent hues to explain hierarchy or state, not as decoration on every element.
- Keep colored text at readable contrast against its actual surface.

## Typography

- **Display:** Newsreader, Georgia fallback; editorial, slightly condensed-feeling display lines with modest negative tracking.
- **Reading:** Manrope, Segoe UI fallback; concise, legible copy with generous leading.
- **Metadata:** DM Mono, Consolas fallback; only for actual labels, statuses, and technical identifiers.

Display lines use balanced wrapping. Body copy stays around 65 characters per line on desktop and scales down on mobile. Compact monospace text is reserved for short labels, not paragraph copy.

## Layout and behavior

- Centered opening narrative at a maximum width of 850px, with the current case-flow diagram as the hero's proof point.
- A compact two-column status strip and two clear calls to action follow the introduction.
- Selected projects connect the featured in-progress case-processing build with verified healthcare, application-modernization, applied-AI, workflow-automation, and developer-tool work.
- Experience presents the three verified employers in a fixed-width, keyboard-operable carousel with previous/next controls, direct employer selectors, and optional three-second rotation; rotation pauses on hover or keyboard interaction and remains off for reduced-motion preferences. Education, email, LinkedIn, and GitHub use the supplied resume details.
- Toolkit and contact use restrained dividers and open spacing.
- Hatched side rails and a sparse, static point field frame the canvas without obscuring content.
- At 850px the project diagram stacks; at 600px the hero flow and status details reflow to compact mobile layouts.
- All content is visible by default; project details use native disclosure controls. Focus indicators and reduced-motion preferences are respected.

## Components and states

- **Primary action:** light foreground surface with dark text, rectangular geometry, and a small directional glyph.
- **Secondary action:** transparent surface with a clear border and lavender directional cue.
- **Project surfaces:** square-cornered dark panels with subtle rule contrast; no nesting or generic icon tiles.
- **Status:** mint for completed/production experience and lavender for active work; never imply the current build is shipped.
- **Case-flow figure:** a schematic sequence of client, API, queue, and worker, with a return path for progress updates. It is labeled schematic rather than presented as a product screenshot.

## Content constraints

- Do not invent project outcomes, dates, employment details, customer names, public links, or metrics.
- Keep the Go/Kubernetes feature marked as in progress.
- Keep internal healthcare architecture and data generalized.
- Do not reuse the reference site's source code, copy, photos, or assets.
