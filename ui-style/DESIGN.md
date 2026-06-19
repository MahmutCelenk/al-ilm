---
name: Al-Ilm
colors:
  surface: '#f8f9ff'
  surface-dim: '#d0dbed'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dee9fc'
  surface-container-highest: '#d9e3f6'
  on-surface: '#121c2a'
  on-surface-variant: '#404944'
  inverse-surface: '#27313f'
  inverse-on-surface: '#eaf1ff'
  outline: '#707974'
  outline-variant: '#bfc9c3'
  surface-tint: '#2b6954'
  primary: '#003527'
  on-primary: '#ffffff'
  primary-container: '#064e3b'
  on-primary-container: '#80bea6'
  inverse-primary: '#95d3ba'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#2d2e2c'
  on-tertiary: '#ffffff'
  tertiary-container: '#444442'
  on-tertiary-container: '#b2b1ae'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b0f0d6'
  primary-fixed-dim: '#95d3ba'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#0b513d'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e4e2de'
  tertiary-fixed-dim: '#c8c6c3'
  on-tertiary-fixed: '#1b1c1a'
  on-tertiary-fixed-variant: '#474744'
  background: '#f8f9ff'
  on-background: '#121c2a'
  surface-variant: '#d9e3f6'
typography:
  display-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system centers on a "Modern Spiritual" aesthetic, blending the clarity of high-end educational platforms with the timeless elegance of Islamic art. It aims to evoke a sense of tranquility, focus, and reverence. 

The style is **Minimalist with Geometric Accents**, utilizing generous whitespace and structured layouts to ensure the student is never overwhelmed. It avoids ornamental clutter, instead using subtle patterns (like tessellations) as light background textures or dividers. The UI should feel premium and authoritative yet warm and inviting, mirroring the master-student relationship in a digital context.

## Colors
The palette is rooted in tradition but executed with modern saturation.
- **Primary (Deep Emerald):** Used for primary actions, navigation headers, and progress indicators. It represents growth and the traditional color of Islamic identity.
- **Secondary (Soft Gold):** Used sparingly for achievement markers, high-level accents, and "premium" callouts. It should never be used for body text.
- **Background (Warm Cream):** Replaces pure white to reduce eye strain during long reading sessions and to provide a "manuscript" feel.
- **Typography (Dark Gray):** Ensures high contrast and accessibility without the harshness of pure black.

## Typography
The typography system uses a high-contrast pairing to distinguish between "Wisdom" (Headings) and "Information" (Body).
- **Headlines:** *Libre Caslon Text* provides a scholarly, editorial feel that echoes classical Turkish and Arabic printing traditions. 
- **Body & Labels:** *Plus Jakarta Sans* offers a friendly, soft-geometric clarity that ensures high legibility in instructional steps and lesson content.
- **Arabic Script:** When rendering Quranic text, use a dedicated Naskh-style font (e.g., *Scheherazade New*) at 1.5x the size of the surrounding English/Turkish text to maintain visual weight.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a focus on vertical rhythm. 
- **Desktop:** A 12-column grid with a 1200px max-width container. Content is centered to maintain focus.
- **Mobile:** A single-column layout with 16px side margins.
- **Rhythm:** Use an 8px base unit. Component internal padding should favor "breathability"—preferring `24px` or `32px` padding for lesson cards to keep the interface feeling calm and unhurried.
- **Sticky Elements:** The navigation bar remains sticky to allow quick access to "My Progress" and "Courses."

## Elevation & Depth
This design system uses **Tonal Layering** combined with **Ambient Shadows**. 
- **Level 0 (Base):** Warm Cream background.
- **Level 1 (Cards/Buttons):** Flat surface with a very thin (1px) border in a slightly darker cream or gold-tinted gray (#E5E1DA).
- **Level 2 (Interactive/Hover):** Soft, diffused shadow with a hint of the Primary Emerald color in the umbra (e.g., `0 8px 30px rgba(6, 78, 59, 0.08)`).
- **Depth:** Avoid heavy drop shadows. Use elevation to define the "active" step in instructional sequences (like Abdest steps).

## Shapes
The shape language is **Rounded**, reflecting the softness and approachability of the brand.
- **Standard Radius:** 8px (`0.5rem`) for standard buttons and input fields.
- **Large Radius:** 16px (`1rem`) for lesson cards and category containers.
- **Geometric Accents:** Use 8-pointed star (Khatim) shapes as decorative containers for page numbers or icons, but keep the edges slightly softened.

## Components
- **Category Cards:** Large, 16px rounded containers. Feature a subtle geometric pattern overlay in the top-right corner. Title in `headline-sm`, background in a very pale Emerald tint.
- **Instructional Step Cards:** Stacked vertically with a "connective line" between them. The active step uses a Soft Gold border and a Level 2 shadow.
- **Buttons:** 
    - *Primary:* Deep Emerald background, White text, 8px rounded.
    - *Secondary/Ghost:* Warm Cream background, Deep Emerald border and text.
- **Memorization Tracker:** A horizontal progress bar using a Soft Gold fill against a light Emerald track. 
- **Sticky Navigation:** A minimal top bar with a blur effect (`backdrop-filter: blur(10px)`) and a subtle 1px bottom border.
- **Input Fields:** Plus Jakarta Sans text, 8px radius, with the label positioned above in `label-md` using the Dark Gray color.