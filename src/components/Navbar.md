# Navbar Component

A responsive, modern navigation bar component for Next.js portfolios with smooth scrolling and active section highlighting.

## Features

- **Responsive Design**: Mobile-first design with hamburger menu for smaller screens
- **Smooth Scrolling**: Smooth scroll to sections with proper offset handling
- **Active Section Highlighting**: Automatically highlights the current section based on scroll position
- **Dynamic Background**: Transparent background that becomes opaque when scrolled
- **Dark Mode Support**: Built-in dark mode styling
- **TypeScript**: Fully typed with proper interfaces
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Click Outside**: Mobile menu closes when clicking outside

## Usage

```tsx
import Navbar from "@/components/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">Home content</section>
        <section id="about">About content</section>
        <section id="experience">Experience content</section>
        <section id="projects">Projects content</section>
        <section id="contact">Contact content</section>
      </main>
    </>
  );
}
```

## Navigation Items

The navbar includes these default sections:
- **Home** (`#home`)
- **About** (`#about`)
- **Experience** (`#experience`)
- **Projects** (`#projects`)
- **Contact** (`#contact`)

## Customization

### Changing Navigation Items

To modify the navigation items, edit the `navItems` array in the component:

```tsx
const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' }, // Add new item
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];
```

### Styling Customization

The component uses Tailwind CSS classes that can be customized:

- **Background**: `bg-white/80 dark:bg-slate-900/80` (when scrolled)
- **Text colors**: `text-slate-900 dark:text-white` (active), `text-slate-600 dark:text-slate-300` (inactive)
- **Active indicator**: `bg-slate-900 dark:bg-white` (underline)
- **Mobile menu**: `bg-slate-100 dark:bg-slate-800` (active item background)

### Scroll Offset

The scroll offset for section detection can be adjusted by modifying the `scrollPosition` calculation:

```tsx
const scrollPosition = window.scrollY + 100; // Adjust this value
```

## Technical Details

### State Management

- `isMenuOpen`: Controls mobile menu visibility
- `activeSection`: Tracks the currently active section
- `isScrolled`: Determines if navbar should have background

### Event Handlers

- **Scroll Handler**: Updates active section and scroll state
- **Click Handler**: Handles smooth scrolling to sections
- **Click Outside**: Closes mobile menu when clicking outside

### Performance Optimizations

- Uses `useEffect` with proper cleanup for event listeners
- Debounced scroll handling
- Efficient DOM queries with `getElementById`

## Accessibility Features

- Proper ARIA labels for mobile menu button
- Keyboard navigation support
- Semantic HTML structure
- Focus management for mobile menu

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox support required
- Smooth scrolling behavior support

## Dependencies

- React 18+ with hooks
- Next.js 13+ with app router
- Tailwind CSS 4+
- TypeScript 5+ 