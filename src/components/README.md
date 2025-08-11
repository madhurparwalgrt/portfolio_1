# Hero Component

A modern, responsive hero section component for Next.js portfolios.

## Features

- **Responsive Design**: Optimized for all screen sizes
- **Next.js Image Optimization**: Uses Next.js Image component for optimal performance
- **Dark Mode Support**: Built-in dark mode styling
- **TypeScript**: Fully typed with TypeScript interfaces
- **Customizable**: Easy to customize colors, content, and styling
- **Accessible**: Proper semantic HTML and ARIA labels

## Usage

```tsx
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero
        name="Your Name"
        tagline="Your Professional Tagline"
        welcomeMessage="Hello, I'm"
        profileImageUrl="/your-profile-image.jpg"
      />
    </main>
  );
}
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | `string` | Yes | - | Your full name (displayed prominently) |
| `tagline` | `string` | Yes | - | Your professional tagline or title |
| `welcomeMessage` | `string` | Yes | - | Welcome message (e.g., "Hello, I'm") |
| `profileImageUrl` | `string` | No | `/profile-placeholder.svg` | URL to your profile image |

## Customization

### Changing Colors
The component uses Tailwind CSS classes. You can customize colors by modifying the classes in the component:

- Background: `bg-gradient-to-br from-slate-50 to-slate-100`
- Text colors: `text-slate-900`, `text-slate-600`
- Button colors: `bg-slate-900`, `border-slate-900`

### Adding Your Profile Image
1. Place your profile image in the `public/` directory
2. Update the `profileImageUrl` prop to point to your image
3. The image will be automatically optimized by Next.js

### Modifying Layout
The component uses CSS Grid for layout. You can adjust the grid columns and spacing by modifying the `grid-cols-1 lg:grid-cols-2` classes.

## Styling

The component includes:
- Smooth hover transitions
- Animated floating elements
- Gradient backgrounds
- Responsive typography
- Modern button styling

## Accessibility

- Proper heading hierarchy (h1 for name)
- Alt text for profile image
- Semantic HTML structure
- Keyboard navigation support 