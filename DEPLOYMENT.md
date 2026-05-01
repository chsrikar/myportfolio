# Deployment Guide

## 🚀 Deploy Your Portfolio Website

Your portfolio website is built and ready to deploy! Here are several popular deployment options.

## Build for Production

First, create a production build:

```bash
npm run build
```

This creates an optimized build in the `dist/` directory.

---

## Deployment Options

### 1. Vercel (Recommended) ⚡

**Easiest and fastest deployment**

#### Via Vercel CLI:
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Via Vercel Dashboard:
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel auto-detects Vite settings
5. Click "Deploy"

**Build Settings:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

---

### 2. Netlify 🌐

#### Via Netlify CLI:
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

#### Via Netlify Dashboard:
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site"
3. Import from Git
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

---

### 3. GitHub Pages 📄

#### Using gh-pages package:

1. Install gh-pages:
```bash
npm install -D gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })]
})
```

4. Deploy:
```bash
npm run deploy
```

---

### 4. Cloudflare Pages ☁️

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Click "Create a project"
3. Connect your Git repository
4. Configure build:
   - Build command: `npm run build`
   - Build output directory: `dist`
5. Click "Save and Deploy"

---

### 5. AWS Amplify 🔶

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "New app" → "Host web app"
3. Connect your Git repository
4. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click "Save and deploy"

---

### 6. Firebase Hosting 🔥

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login and initialize:
```bash
firebase login
firebase init hosting
```

3. Configure:
   - Public directory: `dist`
   - Single-page app: Yes
   - GitHub auto-deploy: Optional

4. Build and deploy:
```bash
npm run build
firebase deploy
```

---

### 7. Render 🎨

1. Go to [render.com](https://render.com)
2. Click "New Static Site"
3. Connect your Git repository
4. Configure:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Click "Create Static Site"

---

## Custom Domain Setup

### For Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### For Netlify:
1. Go to Site Settings → Domain management
2. Add custom domain
3. Configure DNS settings

### For Cloudflare Pages:
1. Go to Custom domains
2. Add your domain
3. DNS is automatically configured

---

## Environment Variables

If you need environment variables:

### Vercel:
```bash
vercel env add
```

### Netlify:
Site Settings → Environment variables

### Vite:
Create `.env.production`:
```
VITE_API_URL=https://api.example.com
```

Access in code:
```ts
const apiUrl = import.meta.env.VITE_API_URL
```

---

## Performance Optimization

### 1. Video Optimization
- Compress video to < 5MB
- Use MP4 format (H.264 codec)
- Consider hosting on CDN (Cloudflare, AWS CloudFront)

### 2. Image Optimization
- Use WebP format
- Lazy load images
- Compress with tools like TinyPNG

### 3. Code Splitting
Already handled by Vite! ✅

### 4. CDN
Most platforms (Vercel, Netlify, Cloudflare) include CDN automatically.

---

## SSL/HTTPS

All recommended platforms provide **free SSL certificates** automatically! 🔒

---

## Monitoring & Analytics

### Add Google Analytics:

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)

2. Add to `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics:
```bash
npm i @vercel/analytics
```

Add to `src/main.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
)
```

---

## Continuous Deployment

Most platforms support **automatic deployments** when you push to Git:

1. Connect your Git repository
2. Choose branch (usually `main`)
3. Every push triggers automatic deployment

---

## Troubleshooting

### Video not loading in production:
- Ensure video URL is publicly accessible
- Check CORS settings
- Use HTTPS for video URL

### 404 errors on refresh:
- Configure SPA fallback (most platforms do this automatically)
- For Netlify, create `_redirects` file:
  ```
  /*    /index.html   200
  ```

### Build fails:
- Check Node.js version (16+)
- Verify all dependencies are in `package.json`
- Check build logs for specific errors

---

## Recommended: Vercel

For this project, **Vercel** is recommended because:
- ✅ Zero configuration
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Instant deployments
- ✅ Free for personal projects
- ✅ Excellent performance

---

## 🎉 You're Ready to Deploy!

Choose your preferred platform and follow the steps above. Your portfolio will be live in minutes!

Need help? Check the platform's documentation or open an issue on GitHub.

Happy deploying! 🚀
