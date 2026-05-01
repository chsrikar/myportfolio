# Srikar's Portfolio

A dark, cinematic portfolio website showcasing my work as a CTO, Backend Developer, System Architect, and AI Enthusiast. Built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

## 🎨 Design Features

- **Dark & Cinematic**: Black background with warm cream (#DEDBC8) accent color
- **Smooth Animations**: Framer Motion powered pull-up text animations, scroll-linked opacity, and staggered card entrances
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Video Background**: Fullscreen hero video with noise overlay
- **Custom Typography**: Almarai for body text, Instrument Serif (italic) for accents

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite 8** - Build tool
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 🎯 Sections

### 1. Hero Section
- Fullscreen video background with noise overlay
- Name: **Srikar**
- Title: CTO | Backend Developer | System Architect | AI Enthusiast
- Tagline: Building intelligent systems, scalable architectures, and impactful digital experiences
- Navigation bar with smooth scroll links
- CTA buttons for Projects and Contact

### 2. About Section
- Multi-style text animation (normal + italic serif)
- Scroll-linked character opacity reveal
- What I do: Backend Development, AI/ML Systems, Web Development, System Design
- Current roles: CTO at IEDC, Webmaster at IEEE Kerala Section

### 3. Skills Section
- **Technical Skills**: Languages (C, C++, Python, JavaScript), Web (React, Next.js), Backend (Node.js, Django), Databases (MongoDB, MySQL)
- **Core Expertise**: System Architecture, AI Model Development (PINNs), NAS Server Setup, Data Engineering
- **Tools**: Git & GitHub, Vercel, Linux, Raspberry Pi OS

### 4. Projects Section
- **Alpha - NAS Server**: Centralized NAS system with OpenMediaVault
- **AI + PINN Model**: Physics-Informed Neural Network with NIST-based constraints
- **VISAT Website**: Institutional website with optimized UI/UX on Vercel
- Video card showcasing work

### 5. Experience Section
- **CTO – IEDC**: Leading technical initiatives, managing teams, strategic decisions
- **Webmaster – IEEE Kerala**: Website management, UI/UX improvements, deployment

### 6. Contact Section
- Email, LinkedIn, GitHub links
- Interactive contact cards
- CTA button for direct email

## 🎨 Color Palette

- **Background**: `#000000` (Black)
- **Primary**: `#DEDBC8` (Warm Cream)
- **Text**: `#E1E0CC` (Slightly different cream)
- **Card Backgrounds**: `#101010`, `#212121`
- **Gray Text**: Tailwind gray-300, gray-400, gray-500

## 🔤 Typography

- **Almarai** (300, 400, 700, 800) - Default body font
- **Instrument Serif** (italic) - Accent font for special text

## 🎬 Animation Components

### WordsPullUp
Splits text into words and animates each word sliding up from y:20 with staggered delays.

### WordsPullUpMultiStyle
Same as WordsPullUp but supports multiple text segments with different styles.

### AnimatedLetter
Individual character animation linked to scroll progress for progressive text reveal.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md/lg)
- **Desktop**: > 1024px (xl/2xl)

## 🎨 Custom CSS Utilities

### .noise-overlay
Fractal noise texture for hero video overlay
- baseFrequency: 0.85
- numOctaves: 3

### .bg-noise
Subtle background noise for sections
- baseFrequency: 0.9
- numOctaves: 4

## 🛠️ Customization

### Update Personal Information
Edit the content in each section file:
- `src/sections/Hero.tsx` - Name, title, tagline
- `src/sections/About.tsx` - Bio and roles
- `src/sections/Skills.tsx` - Skills and tools
- `src/sections/Features.tsx` - Projects (rename to Projects.tsx if needed)
- `src/sections/Experience.tsx` - Work experience
- `src/sections/Contact.tsx` - Contact information

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#DEDBC8', // Your color here
}
```

### Change Fonts
Update Google Fonts link in `index.html` and font families in `tailwind.config.js`

### Modify Animations
Adjust timing in component files:
- Delay: `delay: index * 0.08`
- Duration: `duration: 0.5`
- Easing: `ease: [0.16, 1, 0.3, 1]`

## 📄 Project Structure

```
src/
├── components/
│   ├── AnimatedLetter.tsx       # Scroll-linked character animation
│   ├── WordsPullUp.tsx          # Single-style pull-up text
│   └── WordsPullUpMultiStyle.tsx # Multi-style pull-up text
├── sections/
│   ├── Hero.tsx                 # Hero section with video
│   ├── About.tsx                # About section with scroll text
│   ├── Skills.tsx               # Skills grid section
│   ├── Features.tsx             # Projects section (rename to Projects.tsx)
│   ├── Experience.tsx           # Experience/roles section
│   └── Contact.tsx              # Contact section
├── App.tsx                      # Main app component
├── main.tsx                     # Entry point
└── index.css                    # Global styles + noise utilities
```

## 🚀 Deployment

Build the project and deploy the `dist/` folder to:
- **Vercel** (recommended)
- Netlify
- GitHub Pages
- Cloudflare Pages

```bash
npm run build
```

## 🎯 Future Enhancements

- Add Education page
- Create Knowledge Hub section with learning resources
- Implement blog/articles section
- Add admin panel for content management
- Integrate analytics
- Add more project case studies

## 📝 License

MIT

---

**Built with ❤️ by Srikar using React, TypeScript, Vite, Tailwind CSS, and Framer Motion**
