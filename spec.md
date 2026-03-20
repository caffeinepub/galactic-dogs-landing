# Galactic Dogs Landing

## Current State
Single-page hero section with three floating astronaut dogs (Kozmo, Nova, Blaze), galactic milk bones, nebula backdrop, star field, hero copy, and a primary CTA button. Pure CSS animations. No backend. Minimal footer.

## Requested Changes (Diff)

### Add
- Sticky/simple top navigation bar with logo + nav links
- Section 2: How It Works -- 4-step horizontal card row (Choose Breed, Customize Traits, Name Your Dog, Mint Instantly)
- Section 3: Pick Your Breed Preview -- grid of 6 breed cards (Husky, Golden Retriever, Shiba Inu, Corgi, Dalmatian, Border Collie), each collectible-style with name, rarity tag, and visual placeholder
- Section 4: Trait Customization Preview -- 3 trait category cards (Coat Color, Eye Style, Markings) with visual swatch/example chips; hero subtext about uniqueness
- Section 5: My Dogs / Collection Preview -- gallery-style teaser with 3 example dog placeholder cards and explanation copy
- Section 6: Community / Ecosystem -- 5-card grid (Starter Dogs, Content Tools, Graphics & Assets, Community Events, Future Features) with intentional "Coming Soon" states where appropriate
- Section 7: Resources & Tools -- grid of 5 resource tiles (Starter Dogs, Content Generator, Graphics Library, Events, Shop)
- Section 8: Join The Pack CTA -- large full-width premium dark card with headline, subtext, and strong CTA button
- Section 9: Full footer -- logo, nav columns (Explore, Community, Resources), social icon placeholders, legal line

### Modify
- Hero: preserve entirely; polish vertical spacing only; add subtle scroll indicator at bottom
- index.css: add new keyframe animations and utility classes needed for new sections; add new color tokens for cream/warm gold accents
- Overall color system: soften neon to softer dark-space palette; cream/warm gold for card accents; deep navy base; purple-blue glows controlled

### Remove
- Old minimal footer inside hero main section (replaced by full footer component)

## Implementation Plan
1. Update index.css -- add cream/gold CSS variables, new animation keyframes (fadeIn, slideInCard), section utility classes
2. Refactor App.tsx -- extract hero into HeroSection component, add NavBar, and add all 8 new sections as separate components in the same file
3. NavBar: sticky, transparent-to-blur on scroll, logo left, nav links right (How It Works, Breeds, Community, Join The Pack)
4. HowItWorks: 4 step cards in a horizontal row, icon + number + title + short desc, soft dark card background
5. BreedPreview: 6-card grid, each card has dog illustration placeholder (colored circle/avatar style), breed name, rarity badge
6. TraitCustomization: 3 tall cards showing trait categories with color swatch chips and unique count badge
7. CollectionPreview: 3 example dog cards in a gallery row with "Your collection lives here" framing copy
8. CommunityEcosystem: section header + 5 cards with icon, title, description, status badge (Live / Coming Soon)
9. ResourcesTools: compact grid of 5 tiles with icon + label + arrow
10. JoinThePack: full-width card with gradient background, large headline, subtext, primary button
11. Footer: 3-column layout, logo, nav links, social icons, legal line
