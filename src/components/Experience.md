# Experience Component

A modern timeline-based experience section component for Next.js portfolios featuring job history, tech stack badges, and duration calculations.

## Features

- **Timeline Design**: Visual timeline with alternating cards for better readability
- **Tech Stack Badges**: Color-coded technology badges for each role
- **Duration Calculation**: Automatic calculation of employment duration
- **Responsive Layout**: Mobile-first design that adapts to all screen sizes
- **Employment Types**: Support for different employment types (full-time, part-time, etc.)
- **Location Support**: Optional location display for each role
- **Current Role Support**: Special handling for ongoing positions
- **Dark Mode**: Built-in dark mode styling
- **TypeScript**: Fully typed with proper interfaces
- **Accessibility**: Semantic HTML and proper ARIA labels

## Usage

```tsx
import Experience from "@/components/Experience";

const experienceData = [
  {
    id: "1",
    title: "Senior Full-Stack Developer",
    company: "TechCorp Inc.",
    period: {
      start: "2023-01-01"
    },
    summary: "Leading development of enterprise web applications...",
    location: "San Francisco, CA",
    type: "full-time" as const,
    techStack: [
      { name: "React", color: "blue" as const },
      { name: "TypeScript", color: "blue" as const },
      { name: "Node.js", color: "green" as const }
    ]
  }
];

export default function Page() {
  return <Experience experiences={experienceData} />;
}
```

## Interfaces

### Experience Interface

```tsx
interface Experience {
  id: string;
  title: string;
  company: string;
  period: {
    start: string;
    end?: string; // Optional for current role
  };
  summary: string;
  techStack: TechStack[];
  location?: string;
  type?: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship';
}
```

### TechStack Interface

```tsx
interface TechStack {
  name: string;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'indigo' | 'pink' | 'yellow' | 'gray';
}
```

### ExperienceProps Interface

```tsx
interface ExperienceProps {
  experiences: Experience[];
}
```

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `experiences` | `Experience[]` | Yes | Array of experience objects |

## Experience Object Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | `string` | Yes | Unique identifier for the experience |
| `title` | `string` | Yes | Job title/position |
| `company` | `string` | Yes | Company name |
| `period.start` | `string` | Yes | Start date (YYYY-MM-DD format) |
| `period.end` | `string` | No | End date (YYYY-MM-DD format, omit for current role) |
| `summary` | `string` | Yes | Job description and responsibilities |
| `techStack` | `TechStack[]` | Yes | Array of technologies used |
| `location` | `string` | No | Job location (city, state) |
| `type` | `EmploymentType` | No | Type of employment |

## Employment Types

- `full-time`
- `part-time`
- `contract`
- `freelance`
- `internship`

## Tech Stack Colors

The component supports 9 different color schemes for tech stack badges:

- **blue**: React, TypeScript, Python
- **green**: Node.js, Vue.js, Django
- **purple**: PostgreSQL, MongoDB, MySQL
- **orange**: AWS, HTML5
- **red**: Redis
- **indigo**: Docker, Webpack
- **pink**: CSS3
- **yellow**: JavaScript
- **gray**: Git

## Date Formatting

The component automatically formats dates and calculates durations:

- **Date Format**: "Jan 2023 - Present" or "Jan 2023 - Dec 2022"
- **Duration**: "2 years 3 months" or "1 year" or "6 months"

## Timeline Design

### Desktop Layout
- **Timeline Line**: Vertical line in the center
- **Alternating Cards**: Cards alternate left and right
- **Timeline Dots**: Blue dots on the timeline line
- **Responsive Grid**: Cards take 5/12 width each

### Mobile Layout
- **Single Column**: All cards stack vertically
- **Left Timeline**: Timeline line on the left side
- **Full Width Cards**: Cards take full width

## Customization

### Styling

The component uses Tailwind CSS classes that can be customized:

- **Background**: `bg-slate-50 dark:bg-slate-800` (section)
- **Cards**: `bg-white dark:bg-slate-900` (experience cards)
- **Timeline**: `bg-slate-200 dark:bg-slate-700` (timeline line)
- **Dots**: `bg-blue-500` (timeline dots)
- **Text**: `text-slate-900 dark:text-white` (headings), `text-slate-600 dark:text-slate-300` (body)

### Adding New Tech Stack Colors

To add new colors, update the `techStackColors` object:

```tsx
const techStackColors = {
  // ... existing colors
  teal: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
  cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
} as const;
```

## Accessibility Features

- Semantic HTML structure with proper heading hierarchy
- Timeline navigation with proper ARIA labels
- Screen reader friendly date formatting
- Keyboard navigation support
- High contrast color schemes for tech stack badges

## Performance Considerations

- Efficient date calculations with built-in JavaScript Date methods
- Minimal re-renders with proper React patterns
- Optimized timeline rendering
- Lazy loading of timeline elements

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox support required
- Date formatting API support

## Dependencies

- React 18+ with hooks
- Next.js 13+ with app router
- Tailwind CSS 4+
- TypeScript 5+ 