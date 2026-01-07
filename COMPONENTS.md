# Portfolio Components Structure

## Component Files

All components are located in the `/components` directory:

### 1. **Navbar.tsx**

- Fixed navigation bar at the top
- Contains logo, menu links, and Resume button
- Smooth scroll to sections

### 2. **Hero.tsx**

- Main hero section with introduction
- Profile image placeholder (400x400)
- Social media icons (GitHub, LinkedIn, Instagram)
- Floating decorative elements

### 3. **About.tsx**

- Three info cards
- Contact email, resume, and current position

### 4. **Projects.tsx**

- Four project cards with alternating layouts
- Each project has: title, description, tags, and image placeholder
- Background colors: cyan, purple, blue

### 5. **Skills.tsx**

- Two columns: Design Tools and Development
- Progress bars for each skill
- Customizable skill levels

### 6. **CTA.tsx**

- Call-to-action section
- Purple gradient background
- "Get Started" button

### 7. **Testimonials.tsx**

- Two testimonial cards
- Client name, role, and review text
- Avatar placeholder

### 8. **Footer.tsx**

- Three columns: About, Quick Links, Contact
- Social media links
- Copyright notice

## Main Page

`app/page.tsx` imports and renders all components in order.

## How to Customize

### Add Your Images

1. Place images in `/public` folder
2. Import in component: `import Image from "next/image"`
3. Use: `<Image src="/your-image.jpg" alt="..." width={400} height={400} />`

### Update Content

- Edit text directly in each component file
- Modify arrays (projects, skills, testimonials) to add/remove items
- Change colors by updating Tailwind classes

### Styling

- All styling uses Tailwind CSS
- Main colors: purple-600, blue-400, cyan-300
- Modify in component files or create custom classes in `globals.css`

## Next Steps

1. Replace placeholder images with your actual photos
2. Update all text content with your information
3. Add real project images
4. Update social media links
5. Customize colors if needed
