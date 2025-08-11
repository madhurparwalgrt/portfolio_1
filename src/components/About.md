# About Component

A comprehensive about section component for Next.js portfolios featuring bio, profile photo, technical skills, contact information, and resume download functionality.

## Features

- **Professional Bio**: Clean, readable bio section with proper typography
- **Profile Photo**: Optimized image display with Next.js Image component
- **Technical Skills**: Categorized skills with visual proficiency indicators
- **Contact Information**: Social links and contact details with icons
- **Resume Download**: Direct download link for resume/CV
- **Responsive Design**: Mobile-first design that works on all screen sizes
- **Dark Mode Support**: Built-in dark mode styling
- **TypeScript**: Fully typed with proper interfaces
- **Accessibility**: Semantic HTML and proper ARIA labels

## Usage

```tsx
import About from "@/components/About";

const aboutData = {
  name: "John Doe",
  bio: "I'm a passionate full-stack developer...",
  profilePhotoUrl: "/assets/profile-photo.jpg",
  resumeUrl: "/assets/resume.pdf",
  location: "San Francisco, CA",
  email: "john@example.com",
  github: "https://github.com/johndoe",
  linkedin: "https://linkedin.com/in/johndoe",
  skills: [
    { name: "React", level: 5, category: "frontend" as const },
    { name: "Node.js", level: 4, category: "backend" as const },
    // ... more skills
  ]
};

export default function Page() {
  return <About {...aboutData} />;
}
```

## Props

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `name` | `string` | Your full name |
| `bio` | `string` | Your professional bio/description |
| `profilePhotoUrl` | `string` | URL to your profile photo |
| `skills` | `Skill[]` | Array of technical skills |
| `resumeUrl` | `string` | URL to your resume PDF |

### Optional Props

| Prop | Type | Description |
|------|------|-------------|
| `location` | `string` | Your location (city, country) |
| `email` | `string` | Your email address |
| `github` | `string` | Your GitHub profile URL |
| `linkedin` | `string` | Your LinkedIn profile URL |

## Skill Interface

```tsx
interface Skill {
  name: string;
  level: number; // 1-5 scale
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
}
```

### Skill Categories

- **frontend**: Frontend technologies (React, Vue, etc.)
- **backend**: Backend technologies (Node.js, Python, etc.)
- **database**: Database technologies (PostgreSQL, MongoDB, etc.)
- **tools**: DevOps and tools (Docker, AWS, Git, etc.)
- **other**: Other skills (Agile, UI/UX, Testing, etc.)

### Skill Levels

- **1**: Beginner
- **2**: Elementary
- **3**: Intermediate
- **4**: Advanced
- **5**: Expert

## Customization

### Styling

The component uses Tailwind CSS classes that can be customized:

- **Background**: `bg-white dark:bg-slate-900`
- **Text colors**: `text-slate-900 dark:text-white` (headings), `text-slate-600 dark:text-slate-300` (body)
- **Skill indicators**: `bg-blue-500 dark:bg-blue-400` (filled), `bg-slate-200 dark:bg-slate-700` (empty)
- **Buttons**: `bg-blue-500 hover:bg-blue-600`

### Layout

The component uses CSS Grid for layout:
- **Desktop**: Two-column layout (photo/info | bio/skills)
- **Mobile**: Single-column stacked layout
- **Responsive breakpoints**: `lg:grid-cols-2`

### Adding New Skill Categories

To add new skill categories, update the `skillCategories` object:

```tsx
const skillCategories = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Database',
  tools: 'Tools & DevOps',
  other: 'Other',
  mobile: 'Mobile Development', // Add new category
} as const;
```

## File Structure

```
public/
  assets/
    profile-photo.jpg    # Your profile photo
    resume.pdf          # Your resume/CV
```

## Image Optimization

The component uses Next.js Image optimization:
- Automatic format optimization
- Responsive sizing
- Lazy loading (except for profile photo which uses `priority`)
- Proper `sizes` attribute for responsive loading

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader friendly skill indicators
- Proper link attributes for external links

## Performance Considerations

- Skills are grouped by category for efficient rendering
- Conditional rendering for optional contact information
- Optimized image loading with Next.js Image
- Minimal re-renders with proper React patterns

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox support required
- Next.js Image component support

## Dependencies

- React 18+ with hooks
- Next.js 13+ with app router
- Tailwind CSS 4+
- TypeScript 5+ 