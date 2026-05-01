# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Navigate to the project
```bash
cd portfolio-website
```

### 2. Install dependencies (if needed)
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

Then open **http://localhost:5173** in your browser! 🎉

## 📦 What You'll See

- **Fullscreen video background** - Cinematic looping video
- **Glassmorphic navigation** - Transparent nav with blur effects
- **Hero section** - Large typography with fade-rise animations
- **Responsive design** - Works on mobile, tablet, and desktop

## 🛠️ Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## ✏️ Quick Customization

### Change the Video
Edit `src/App.tsx` line 12:
```tsx
<source src="YOUR_VIDEO_URL" type="video/mp4" />
```

### Change Colors
Edit `src/index.css` line 26:
```css
body {
  background-color: hsl(201 100% 13%);  /* Deep navy */
  color: hsl(0 0% 100%);                /* White */
}
```

### Change Text Content
Edit `src/App.tsx`:
- Line 25: Logo text
- Lines 32-62: Navigation links
- Lines 75-79: Hero heading
- Lines 82-86: Subtext
- Lines 89-91: CTA button

## 📚 More Information

- **Full Setup Guide**: See `SETUP.md`
- **Design Specs**: See `DESIGN.md`
- **Project Summary**: See `SUMMARY.md`

## 🎨 Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- Google Fonts (Instrument Serif + Inter)

## 🐛 Troubleshooting

**Video not playing?**
- Check your internet connection
- Try a different browser
- Verify the video URL is accessible

**Styles not working?**
- Clear browser cache
- Restart the dev server with `npm run dev`

**Build errors?**
- Delete `node_modules` and run `npm install` again
- Make sure you're using Node.js 16 or higher

## 🎉 You're All Set!

Your portfolio website is ready to customize and deploy. Enjoy building! 🚀
