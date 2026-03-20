# Galactic Dogs Landing

## Current State
New project. No existing application files.

## Requested Changes (Diff)

### Add
- Full-page cinematic space landing page (landing page only, no minting, no extra features)
- Deep space background with starfield, nebula (purple/pink/blue tones)
- Floating milk bone decorative elements scattered in background with CSS keyframe drift/rotate animations
- 1-3 stylized SVG dogs floating weightlessly at center as hero elements, each with individual floating animation phase offsets
- Hero headline and subheadline copy for space-themed dog NFT brand
- Pure CSS keyframe animations (no external libraries)

### Modify
- N/A

### Remove
- N/A

## Implementation Plan
1. App.tsx: Single-page component with full viewport dark space background
2. Render starfield via SVG or CSS positioned dots with twinkle keyframes
3. Render nebula as layered radial-gradient or SVG blobs behind dogs
4. Render 3 stylized SVG dogs centered on page, each with slow floating keyframe animation at different phase offsets
5. Render ~15 milk bone SVGs scattered at random positions, each with floating + subtle rotation keyframe animations at varying speeds
6. Hero copy block below/over dogs: strong headline + subheadline
7. All animations: pure CSS keyframes defined in index.css or inline style tags
