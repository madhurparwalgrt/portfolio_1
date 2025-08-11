# CursorLight Component

A subtle circular light effect that follows the cursor around the UI, creating an elegant lighting effect that enhances the user experience.

## Features

- **Cursor Tracking**: Follows mouse movement in real-time
- **Smooth Animation**: Fluid transitions with easing functions
- **Customizable**: Adjustable size, blur, opacity, and color
- **Performance Optimized**: Efficient event handling and cleanup
- **Responsive**: Works across all screen sizes
- **Non-Intrusive**: Uses `pointer-events-none` to not interfere with interactions
- **TypeScript**: Fully typed with customizable props

## Usage

```tsx
import CursorLight from "@/components/CursorLight";

// Basic usage with default settings
<CursorLight />

// Customized settings
<CursorLight 
  size={500}
  blur={120}
  opacity={0.2}
  color="#8b5cf6"
/>
```

## Props

### CursorLightProps

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | `number` | `400` | Diameter of the light circle in pixels |
| `blur` | `number` | `100` | Blur radius in pixels for the glow effect |
| `opacity` | `number` | `0.15` | Opacity of the light effect (0-1) |
| `color` | `string` | `'#3b82f6'` | Color of the light effect (hex, rgb, etc.) |

## Technical Implementation

### Event Handling

The component uses efficient event listeners for:
- **mousemove**: Tracks cursor position
- **mouseleave**: Hides effect when cursor leaves viewport
- **mouseenter**: Shows effect when cursor enters viewport

### Performance Optimizations

- **Event Cleanup**: Properly removes event listeners on unmount
- **Smooth Transitions**: Uses CSS transitions for fluid movement
- **Pointer Events**: Set to `none` to prevent interference
- **Efficient Rendering**: Minimal re-renders with optimized state updates

### Styling Features

- **Radial Gradient**: Creates natural light falloff from center
- **Blur Filter**: Adds soft glow effect
- **Smooth Animation**: 150ms transition for position changes
- **Fade In/Out**: 300ms opacity transition for visibility

## Customization Examples

### Different Colors

```tsx
// Purple theme
<CursorLight color="#8b5cf6" />

// Green theme
<CursorLight color="#10b981" />

// Orange theme
<CursorLight color="#f59e0b" />

// Custom RGB
<CursorLight color="rgb(255, 100, 150)" />
```

### Size Variations

```tsx
// Small, subtle effect
<CursorLight size={200} blur={50} opacity={0.1} />

// Large, dramatic effect
<CursorLight size={600} blur={150} opacity={0.25} />

// Medium, balanced effect
<CursorLight size={400} blur={100} opacity={0.15} />
```

### Theme Integration

```tsx
// Match your portfolio's accent color
<CursorLight color="#3b82f6" size={450} blur={120} opacity={0.18} />

// Subtle white light for dark themes
<CursorLight color="#ffffff" size={350} blur={80} opacity={0.08} />
```

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **CSS Features**: Requires support for `filter: blur()` and `radial-gradient`
- **JavaScript**: ES6+ features with proper fallbacks

## Performance Considerations

### When to Use

- **Portfolio Websites**: Adds premium feel to personal sites
- **Creative Projects**: Enhances artistic and design-focused sites
- **Interactive UIs**: Complements hover effects and animations

### When to Avoid

- **High-Traffic Sites**: May impact performance on very busy sites
- **Mobile-Heavy**: Less effective on touch devices
- **Accessibility Concerns**: May be distracting for some users

## Accessibility

- **Reduced Motion**: Consider disabling for users with motion sensitivity
- **High Contrast**: Ensure sufficient contrast with background
- **Focus Indicators**: Maintain clear focus indicators for keyboard navigation

## Integration Tips

### With Dark Mode

```tsx
// Dynamic color based on theme
const isDark = useTheme(); // Your theme hook
<CursorLight 
  color={isDark ? "#ffffff" : "#3b82f6"}
  opacity={isDark ? 0.08 : 0.15}
/>
```

### Conditional Rendering

```tsx
// Only show on desktop
const isDesktop = useMediaQuery('(min-width: 768px)');
{isDesktop && <CursorLight />}
```

### Performance Optimization

```tsx
// Throttle mouse events for better performance
<CursorLight 
  size={400}
  blur={100}
  opacity={0.15}
  color="#3b82f6"
/>
```

## File Structure

```
src/
├── components/
│   ├── CursorLight.tsx      # Main component file
│   └── CursorLight.md       # This documentation
└── app/
    └── page.tsx             # Usage example
```

## Example Configurations

### Minimal Effect
```tsx
<CursorLight 
  size={300}
  blur={60}
  opacity={0.08}
  color="#3b82f6"
/>
```

### Dramatic Effect
```tsx
<CursorLight 
  size={600}
  blur={150}
  opacity={0.25}
  color="#8b5cf6"
/>
```

### Warm Light
```tsx
<CursorLight 
  size={450}
  blur={120}
  opacity={0.18}
  color="#f59e0b"
/>
```

## Notes

- The component automatically handles cleanup of event listeners
- The light effect is positioned using `fixed` positioning for consistent behavior
- The blur effect may impact performance on older devices
- Consider user preferences for reduced motion and accessibility
- The effect works best on desktop devices with mouse input
- Customize the color to match your portfolio's design system 