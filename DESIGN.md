# Design Specifications

## Visual Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│  [VIDEO BACKGROUND - Fullscreen, Looping]                   │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ Navigation Bar (Glassmorphic)                          │ │
│  │ Velorah®    Home Studio About Journal    [Begin Journey]│ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│                                                              │
│              ┌──────────────────────────────┐               │
│              │   Hero Section (Centered)    │               │
│              │                              │               │
│              │  Where dreams rise           │               │
│              │  through the silence.        │               │
│              │                              │               │
│              │  [Subtext paragraph]         │               │
│              │                              │               │
│              │    [Begin Journey Button]    │               │
│              └──────────────────────────────┘               │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Color Palette

### Primary Colors
- **Deep Navy Blue**: `hsl(201, 100%, 13%)` - Background
- **Pure White**: `hsl(0, 0%, 100%)` - Primary text
- **Muted Gray**: `hsl(240, 4%, 66%)` - Secondary text

### Accent Colors
- **Dark Gray**: `hsl(0, 0%, 10%)` - Secondary elements
- **Border Gray**: `hsl(0, 0%, 18%)` - Borders and inputs

## Typography Scale

### Display (Instrument Serif)
- **Logo**: 3xl (1.875rem) - tracking-tight
- **Hero H1**: 
  - Mobile: 5xl (3rem)
  - Tablet: 7xl (4.5rem)
  - Desktop: 8xl (6rem)
  - Line height: 0.95
  - Letter spacing: -2.46px

### Body (Inter)
- **Navigation**: sm (0.875rem) - weight 400
- **Subtext**: base (1rem) / lg (1.125rem) - weight 400
- **Buttons**: sm (0.875rem) / base (1rem) - weight 500

## Spacing System

### Navigation
- Horizontal padding: 2rem (px-8)
- Vertical padding: 1.5rem (py-6)
- Gap between links: 2rem (gap-8)

### Hero Section
- Top padding: 8rem (pt-32)
- Bottom padding: 10rem (pb-40)
- Side padding: 1.5rem (px-6)
- Max width: 7xl (80rem)

### Buttons
- Small: px-6 py-2.5
- Large: px-14 py-5
- Border radius: full (9999px)

## Effects & Animations

### Liquid Glass Effect
```css
Background: rgba(255, 255, 255, 0.01)
Backdrop blur: 4px
Border: Gradient (180deg)
  - Top: rgba(255, 255, 255, 0.45)
  - Middle: rgba(255, 255, 255, 0)
  - Bottom: rgba(255, 255, 255, 0.45)
```

### Fade-Rise Animation
- **Duration**: 0.8s
- **Easing**: ease-out
- **Transform**: translateY(24px) → translateY(0)
- **Opacity**: 0 → 1

**Stagger Delays**:
1. H1: 0s
2. Subtext: 0.2s
3. CTA Button: 0.4s

### Hover States
- **Links**: color transition (200ms)
- **Buttons**: scale(1.03) transform (200ms)

## Responsive Breakpoints

### Mobile (< 768px)
- Navigation links hidden
- Hero text: 5xl
- Single column layout

### Tablet (768px - 1024px)
- Navigation links visible
- Hero text: 7xl
- Increased spacing

### Desktop (> 1024px)
- Full navigation
- Hero text: 8xl
- Maximum width constraints (7xl)

## Component Specifications

### Navigation Bar
```
Height: Auto (py-6)
Layout: Flexbox (justify-between)
Z-index: 10 (above video)
Position: Relative
Max-width: 7xl (centered)
```

### Video Background
```
Position: Absolute inset-0
Z-index: 0 (behind content)
Object-fit: cover
Attributes: autoPlay, loop, muted, playsInline
```

### Hero Section
```
Position: Relative
Z-index: 10 (above video)
Layout: Flexbox column (centered)
Text-align: center
Vertical centering: pt-32 pb-40
```

### Buttons (Liquid Glass)
```
Background: Semi-transparent white (0.01 opacity)
Backdrop-filter: blur(4px)
Border: Gradient mask
Shadow: Inset highlight
Hover: Scale 1.03
Cursor: Pointer
```

## Accessibility

### Contrast Ratios
- White on Navy: 14.5:1 (AAA)
- Gray on Navy: 4.8:1 (AA)

### Focus States
- All interactive elements have focus states
- Keyboard navigation supported

### Semantic HTML
- Proper heading hierarchy (h1)
- Semantic nav element
- Button elements for actions

### Video Accessibility
- Muted by default (autoplay policy)
- No critical information in video
- Decorative background only

## Performance Considerations

### Video Optimization
- Format: MP4 (H.264)
- Recommended size: < 5MB
- Resolution: 1920x1080 or lower
- Compression: Medium quality

### Font Loading
- Google Fonts with display=swap
- Weights: Inter 400/500, Instrument Serif regular/italic
- Preconnect to fonts.googleapis.com

### CSS Optimization
- Tailwind purges unused styles
- Critical CSS inlined
- Animations use transform (GPU accelerated)

### Bundle Size
- React: ~45KB gzipped
- Tailwind: ~10KB (purged)
- Custom CSS: ~2KB
- Total JS: ~50KB gzipped

## Browser Compatibility

### Supported Features
- CSS backdrop-filter (95%+ browsers)
- CSS mask (90%+ browsers)
- Video autoplay (with muted)
- CSS custom properties
- Flexbox
- CSS Grid (if needed)

### Fallbacks
- Backdrop-filter: -webkit-backdrop-filter
- Mask: -webkit-mask
- Video: Poster image fallback (optional)

## Design Principles

1. **Minimalism**: Clean, uncluttered interface
2. **Cinematic**: Large typography, video background
3. **Depth**: Glassmorphism creates layering
4. **Motion**: Subtle animations enhance UX
5. **Focus**: Content-first approach
6. **Elegance**: Refined typography and spacing

## Future Enhancements

- [ ] Add scroll-triggered animations
- [ ] Implement smooth scrolling
- [ ] Add more sections (About, Work, Contact)
- [ ] Create page transitions
- [ ] Add mobile menu (hamburger)
- [ ] Implement dark/light mode toggle
- [ ] Add parallax effects
- [ ] Integrate CMS
- [ ] Add form validation
- [ ] Implement analytics
