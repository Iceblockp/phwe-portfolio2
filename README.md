# Phwe's Portfolio

A modern, single-page portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 Clean and modern UI design
- 📱 Fully responsive layout
- ⚡ Built with Next.js 15 App Router
- 🎯 TypeScript for type safety
- 💅 Styled with Tailwind CSS
- 🚀 Optimized performance

## Sections

- **Hero** - Introduction with profile image
- **About** - Quick info cards
- **Projects** - Showcase of design work
- **Skills** - Technical skills with progress bars
- **Testimonials** - Client reviews
- **Contact** - Footer with contact information

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Content

Edit `app/page.tsx` to update:

- Personal information
- Project details
- Skills and percentages
- Social media links
- Contact information

### Add Images

Place your images in the `public` folder and update the image paths in the code.

### Colors

The design uses a purple/blue color scheme. Modify Tailwind classes to change colors:

- Primary: `purple-600`
- Secondary: `blue-400`
- Accent: `cyan-300`

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Deploy easily on Vercel:

```bash
vercel
```

Or any other hosting platform that supports Next.js.
