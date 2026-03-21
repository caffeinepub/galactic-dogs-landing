# Galactic Dogs Landing

## Current State
- App.tsx is a 2892-line monolithic file containing all sections, components, SVGs, data, and layout inline.
- Navbar and Footer are functions defined inside App.tsx, not separate files.
- Footer has social icons (X, Discord, Instagram) but no TikTok; all social links point to `/` placeholder.
- No routing — the app is a single-page scroll with no Privacy Policy or Terms of Service pages.
- Digital Dog section is represented by BreedPreview and TraitCustomization sections, but they are relatively small/basic cards.
- FOOTER_NAV data and social icon components (SiX, SiDiscord, SiInstagram) are inline in App.tsx.

## Requested Changes (Diff)

### Add
- `src/frontend/src/config/siteConfig.ts` — central constants file: social links (X, Instagram, Discord, TikTok with placeholder `#` hrefs), nav links, footer nav columns, and legal links. This is the single place to swap URLs.
- `src/frontend/src/components/Header.tsx` — reusable Navbar extracted from App.tsx, imports links from siteConfig.
- `src/frontend/src/components/Footer.tsx` — reusable Footer extracted from App.tsx, imports links and social config from siteConfig. Adds TikTok. Adds Privacy Policy and Terms of Service links to bottom bar. Centers everything properly.
- `src/frontend/src/components/DigitalDogFeature.tsx` — new premium feature section replacing or substantially enhancing the existing BreedPreview + TraitCustomization sections. Cinematic, collectible-focused, full-width layout with breed selection highlight, trait customization cards, naming/minting steps, strong CTA, and a placeholder zone for future live NFT preview.
- `src/frontend/src/pages/PrivacyPolicy.tsx` — placeholder Privacy Policy page with real content structure.
- `src/frontend/src/pages/TermsOfService.tsx` — placeholder Terms of Service page with real content structure.
- React Router setup in main.tsx or App.tsx to enable routing between Home, Privacy Policy, and Terms of Service pages.
- Space-themed TikTok SVG icon component matching existing SiX, SiDiscord, SiInstagram style.

### Modify
- `App.tsx` — remove inline Navbar, Footer, BreedPreview, and TraitCustomization. Import Header, Footer, and DigitalDogFeature from their new files. Wrap in Router.
- Footer bottom bar: center layout, add legal links (Privacy Policy, Terms of Service) as router links.
- Social icons in Footer: add TikTok, all pointing to siteConfig constants.

### Remove
- Inline Navbar, Footer, SiX, SiDiscord, SiInstagram SVG functions from App.tsx.
- Inline BreedPreview and TraitCustomization from App.tsx (replaced by DigitalDogFeature).

## Implementation Plan
1. Create `siteConfig.ts` with all social links (X, Instagram, Discord, TikTok as `#`), nav links, and footer nav data.
2. Create `Header.tsx` extracting the existing Navbar function, importing from siteConfig.
3. Create `Footer.tsx` extracting the existing Footer function, adding TikTok, centering layout, adding legal router links, importing from siteConfig.
4. Create `DigitalDogFeature.tsx` — a premium, full-width section with: large hero-style breed cards, trait customization visual grid, naming step callout, mint CTA, and a "Live Preview Coming Soon" placeholder zone.
5. Create `PrivacyPolicy.tsx` and `TermsOfService.tsx` placeholder pages with real page structure.
6. Add React Router to the project; update main.tsx or App.tsx to define routes.
7. Update App.tsx to import and use Header, Footer, DigitalDogFeature instead of inline definitions.
