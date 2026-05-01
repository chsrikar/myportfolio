# Setup Guide

## Quick Start

1. **Navigate to the project directory:**
   ```bash
   cd portfolio-website
   ```

2. **Install dependencies (if not already done):**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:5173`
   - You should see the Velorah portfolio website with the video background

## What's Included

✅ **React 19** with TypeScript  
✅ **Vite** for fast development and building  
✅ **Tailwind CSS 4** for styling  
✅ **Custom liquid glass morphism effects**  
✅ **Cinematic animations** (fade-rise with delays)  
✅ **Google Fonts** (Instrument Serif + Inter)  
✅ **Fullscreen video background** with autoplay  
✅ **Responsive design** (mobile-friendly)

## Project Features

### 1. Video Background
- Fullscreen looping video
- Positioned behind all content
- Optimized for performance with `object-cover`

### 2. Glassmorphic Navigation
- Transparent backdrop with blur effect
- Gradient border using CSS masks
- Smooth hover transitions
- Responsive (nav links hidden on mobile)

### 3. Hero Section
- Large cinematic typography
- Staggered fade-rise animations
- Muted text accents for visual hierarchy
- Call-to-action button with glass effect

### 4. Typography
- **Instrument Serif**: Display font for headings and logo
- **Inter**: Body font for navigation and text
- Loaded from Google Fonts with optimal weights

## Customization Tips

### Change Video
Replace the video URL in `src/App.tsx`:
```tsx
<source src="YOUR_VIDEO_URL" type="video/mp4" />
```

### Modify Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --background: 201 100% 13%;  /* Deep navy */
  --foreground: 0 0% 100%;     /* White */
  --muted-foreground: 240 4% 66%; /* Gray */
}
```

### Update Content
All text content is in `src/App.tsx`:
- Logo: "Velorah®"
- Navigation links
- Hero heading
- Subtext
- Button labels

### Adjust Animations
Modify animation timing in `src/index.css`:
```css
.animate-fade-rise {
  animation: fade-rise 0.8s ease-out both;
}
```

## Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Troubleshooting

### Video not playing
- Check the video URL is accessible
- Ensure the video format is MP4
- Verify browser autoplay policies

### Fonts not loading
- Check internet connection (fonts load from Google)
- Verify the Google Fonts URL in `src/index.css`

### Styles not applying
- Clear browser cache
- Restart the dev server
- Check Tailwind config paths

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize video**: Use compressed MP4 format
2. **Lazy load**: Consider lazy loading for below-fold content
3. **CDN**: Host video on a CDN for faster loading
4. **Preload**: Add video preload hints if needed

## Next Steps

- Add more sections (About, Portfolio, Contact)
- Implement smooth scrolling
- Add page transitions
- Create additional pages
- Integrate a CMS for content management
- Add analytics tracking

Enjoy building with Velorah! 🚀
