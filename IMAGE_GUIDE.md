# Image and Icon Guide

## Current Assets

### Icons (in `/public/icons/`)

✅ Available icons:

- canva.png
- chatgpt.png
- dribble.png
- facebook.png
- figma.png
- gemini.png
- github.png
- linkin.png (LinkedIn)
- notebooklm.png
- notion.png
- photoshop.png

### Images (in `/public/images/`)

✅ Available images:

- hero_girl.png - Main profile photo

## Where Icons Are Used

### Hero Section

- **Social Icons** (4 icons in circular borders):

  - LinkedIn (`/icons/linkin.png`)
  - GitHub (`/icons/github.png`)
  - Dribbble (`/icons/dribble.png`)
  - Facebook (`/icons/facebook.png`)

- **Floating Tool Icons** (left side, desktop only):
  - Gemini (`/icons/gemini.png`)
  - Canva (`/icons/canva.png`)
  - ChatGPT (`/icons/chatgpt.png`)

### About Section

- **Circular Orbit Icons** (6 tools):
  - Figma (`/icons/figma.png`) - Top
  - Photoshop (`/icons/photoshop.png`) - Right top
  - Notion (`/icons/notion.png`) - Right bottom
  - ChatGPT (`/icons/chatgpt.png`) - Bottom
  - Canva (`/icons/canva.png`) - Left bottom
  - Gemini (`/icons/gemini.png`) - Left top

## Images Needed for Other Sections

### Projects Section

You'll need to add project screenshots:

- Project 1: Mac Store design
- Project 2: Startup website
- Project 3: E-commerce design
- Project 4: Banking app

**Recommended size**: 1200x800px (landscape)
**Format**: PNG or JPG
**Location**: Save in `/public/images/projects/`

### Testimonials Section

Client avatar photos (optional):

- 2 client photos
  **Recommended size**: 100x100px (square)
  **Format**: PNG or JPG
  **Location**: Save in `/public/images/testimonials/`

## How to Add New Images

1. Place image files in `/public/images/` or `/public/icons/`
2. Use in components with Next.js Image component:

```tsx
import Image from "next/image";

<Image
  src="/images/your-image.png"
  alt="Description"
  width={800}
  height={600}
/>;
```

## Current Design Status

✅ Hero section - Complete with profile image
✅ About section - Complete with tool icons
⏳ Projects section - Needs project screenshots
⏳ Testimonials - Needs client photos (optional)

## Notes

- All icons are already integrated and working
- Profile image (hero_girl.png) is displayed correctly
- White background is set as per design
- Decorative elements (sparkles, shapes) are CSS-based, no images needed
