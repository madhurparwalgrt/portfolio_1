# Contact Component

A professional contact section component for Next.js portfolios with a contact form, email display, and social media links.

## Features

- **Contact Form**: Name, email, and message fields with proper validation
- **Email Display**: Professional email display with copy-to-clipboard functionality
- **Social Media Links**: LinkedIn, GitHub, Twitter, and email links with hover effects
- **Form Validation**: Required field validation and proper form handling
- **Loading States**: Submit button with loading spinner and disabled state
- **Status Messages**: Success and error messages with auto-dismiss
- **Responsive Design**: Mobile-first responsive layout
- **Dark Mode Support**: Full dark mode compatibility
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **TypeScript**: Fully typed with interfaces for all props and state

## Usage

```tsx
import Contact from "@/components/Contact";

const contactData = {
  email: "john.doe@example.com",
  socialLinks: [
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/johndoe",
      label: "LinkedIn Profile",
      icon: <LinkedInIcon />
    },
    // ... more social links
  ]
};

<Contact {...contactData} />
```

## Props

### ContactProps

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `email` | `string` | Yes | Professional email address to display |
| `socialLinks` | `SocialLink[]` | Yes | Array of social media links |

### SocialLink

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `platform` | `'linkedin' \| 'github' \| 'twitter' \| 'email'` | Yes | Social media platform |
| `url` | `string` | Yes | URL to the social media profile |
| `label` | `string` | Yes | Accessible label for the link |
| `icon` | `JSX.Element` | Yes | SVG icon component for the platform |

## Form Features

### ContactForm Interface

```tsx
interface ContactForm {
  name: string;
  email: string;
  message: string;
}
```

### Form Validation

- **Name**: Required text field
- **Email**: Required email field with email format validation
- **Message**: Required textarea with minimum character validation

### Form Submission

The form includes a stubbed submit handler that:
- Prevents default form submission
- Shows loading state with spinner
- Simulates API call with 1-second delay
- Displays success/error messages
- Resets form on successful submission
- Auto-dismisses status messages after 3 seconds

## Styling

### Design Features

- **Glass Morphism**: Semi-transparent backgrounds with backdrop blur
- **Hover Effects**: Smooth transitions and scale effects on interactive elements
- **Color Scheme**: Blue accent color with slate grays
- **Typography**: Consistent font hierarchy and spacing
- **Shadows**: Subtle shadows for depth and elevation

### Responsive Breakpoints

- **Mobile**: Single column layout
- **Tablet**: Improved spacing and typography
- **Desktop**: Two-column layout with form and contact info side by side

## Accessibility

- **Semantic HTML**: Proper form structure with labels and fieldsets
- **ARIA Labels**: Descriptive labels for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus Management**: Clear focus indicators and states
- **Error Handling**: Accessible error messages and validation

## Performance

- **Client Component**: Uses 'use client' directive for interactivity
- **State Management**: Efficient state updates with React hooks
- **Event Handling**: Optimized event handlers with proper cleanup
- **Form Validation**: Client-side validation for immediate feedback

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile
- **JavaScript**: ES6+ features with proper fallbacks

## Dependencies

- **React**: 18+ for hooks and modern features
- **Next.js**: 13+ for App Router compatibility
- **TypeScript**: 4.9+ for type safety
- **Tailwind CSS**: For styling and responsive design

## Customization

### Modifying Social Icons

Replace the default social icons with custom ones:

```tsx
const customSocialLinks = [
  {
    platform: "linkedin",
    url: "https://linkedin.com/in/johndoe",
    label: "LinkedIn Profile",
    icon: <YourCustomLinkedInIcon />
  }
];
```

### Styling Customization

Override default styles using Tailwind classes:

```tsx
// Custom button styling
<button className="custom-button-classes">
  Send Message
</button>

// Custom form field styling
<input className="custom-input-classes" />
```

### Form Submission Logic

Replace the stubbed submit handler with actual API integration:

```tsx
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    // Your actual API call here
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

## File Structure

```
src/
├── components/
│   ├── Contact.tsx          # Main component file
│   └── Contact.md           # This documentation
└── app/
    └── page.tsx             # Usage example with sample data
```

## Example Data

```tsx
const sampleContactData = {
  email: "john.doe@example.com",
  socialLinks: [
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/johndoe",
      label: "LinkedIn Profile",
      icon: <LinkedInIcon />
    },
    {
      platform: "github",
      url: "https://github.com/johndoe",
      label: "GitHub Profile", 
      icon: <GitHubIcon />
    },
    {
      platform: "twitter",
      url: "https://twitter.com/johndoe",
      label: "Twitter Profile",
      icon: <TwitterIcon />
    }
  ]
};
```

## Notes

- The form submission is currently stubbed and needs to be implemented with your preferred backend solution
- Social media icons are included as inline SVGs but can be replaced with icon libraries
- The component uses the Clipboard API for email copying functionality
- All form validation is client-side and should be complemented with server-side validation
- The component is designed to be easily customizable while maintaining consistent styling with the rest of the portfolio 