# Frame & Motion — Gupta Suraj (Suryaaa) Portfolio

A high-performance single-page personal portfolio for **Gupta Suraj (Suryaaa)** — Photographer, Videographer, Video Editor & Content Creator based in Surat, Gujarat.

Built with a **Dark Cinema Studio ("Frame & Motion")** aesthetic featuring an interactive 3D camera rig, NLE multi-track timeline skills interface, 3D curved reels carousel, and fullscreen accessible photography lightbox.

---

## 📽️ Live Preview & Concept

- **Concept**: *Frame & Motion* (Dark Cinema Studio)
- **Palette**: OLED Near-Black (`#0B0B0D`), Warm Off-White (`#EDE8DF`), Cinema Red (`#E5383B`)
- **Typography**: Bebas Neue / Anton (Display), DM Sans (Body), JetBrains Mono (SMPTE Timecodes & Metadata)
- **Interactive 3D Engine**: Procedural 3D Camera Rig in React Three Fiber with mouse parallax tracking, Photo shutter click + flash simulation, and Video REC blinking tally light with 24fps running timecodes.
- **Audio Synthesizer**: Native Web Audio API camera shutter and REC beep (zero external audio file latency, toggleable mute).

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://r3f.docs.pmnd.rs/) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Animation & Transitions**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Audio**: Web Audio API Procedural Synthesizer
- **Hosting**: Optimized for [Vercel](https://vercel.com/) with `vercel.json` SPA routing

---

## 📁 Project Structure

```
Suraj/
├── public/
│   ├── photos/              # High-resolution optimized WebP photographs
│   │   ├── thumbs/          # Lightweight gallery grid thumbnails
│   │   ├── photo-portrait.webp  # Hero & About portrait
│   │   ├── photo-gimbal.webp    # Field production & gimbal in action
│   │   └── photo-counter.webp   # Counter candid portrait
│   └── thumbs/              # 9:16 Cinema artwork covers for Instagram Reels
│       ├── reel1.webp ... reel5.webp
├── src/
│   ├── components/
│   │   ├── Camera3D.jsx     # R3F 3D camera with mouse tracking & mode animations
│   │   ├── CustomCursor.jsx # Cinema reticle / viewfinder custom cursor
│   │   ├── FilmGrain.jsx    # 35mm procedural film grain overlay
│   │   ├── Lightbox.jsx     # Accessible fullscreen lightbox with verified metadata
│   │   └── Navigation.jsx   # Cinema slate header with timecode & audio toggle
│   ├── data/
│   │   └── content.js       # SINGLE SOURCE OF TRUTH (All photos, reels, bio, credits)
│   ├── hooks/
│   │   ├── useSoundFX.js    # Web Audio shutter click and video beep
│   │   └── useTimecode.js   # SMPTE 24fps timecode generator
│   ├── sections/
│   │   ├── Hero.jsx         # 3D Camera, Bebas Neue title, mode switcher
│   │   ├── About.jsx        # Portrait, bio, career objective, gear badge
│   │   ├── SkillsTimeline.jsx # NLE multi-track editing timeline UI
│   │   ├── Photography.jsx  # Gallery with category filters & 3D tilt
│   │   ├── ReelsCarousel.jsx# 3D curved 9:16 carousel linked to Instagram
│   │   ├── CreativeWork.jsx # Field production case studies
│   │   ├── Contact.jsx      # Production slate inquiry form & email dispatch
│   │   └── Footer.jsx       # Mandatory credits & gear lines
│   ├── App.jsx              # Main orchestrator & mode state manager
│   ├── index.css            # Tailwind directives & cinema scrollbars
│   └── main.jsx             # React entry point
├── dist/                    # Clean, code-split production build (`npm run build`)
├── vercel.json              # Vercel rewrite configuration for clean routing
└── package.json
```

---

## ⚡ Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Build output is generated cleanly into `/dist` with code-split chunks.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🚀 Step-by-Step Vercel Deployment

Deploying this portfolio to Vercel takes less than 2 minutes from a GitHub repository:

### Method 1: Deploy via GitHub (Recommended)

1. **Initialize Git & Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Frame & Motion portfolio for Gupta Suraj"
   git branch -M main
   # Create a new repository on github.com, then run:
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```

2. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **"Add New..."** > **"Project"**.
   - Select your GitHub repository (`<YOUR_REPO_NAME>`).

3. **Configure Project Settings**:
   - **Framework Preset**: `Vite` (Vercel automatically detects this).
   - **Root Directory**: `./` (default).
   - **Build Command**: `npm run build` (auto-filled).
   - **Output Directory**: `dist` (auto-filled).
   - **Environment Variables**: None needed (100% static client-side application).

4. **Click "Deploy"**:
   - Vercel builds the site in ~30 seconds and assigns a production URL (e.g. `https://suryaaa-portfolio.vercel.app`).
   - Every future `git push` to `main` automatically deploys an updated live version.

---

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally if not already installed:
npm install -g vercel

# Deploy directly:
vercel

# Deploy to production:
vercel --prod
```

---

## ✏️ How to Edit Content & Links

All photos, captions, reels, links, and credentials are in **one central file**:
👉 [`src/data/content.js`](file:///src/data/content.js)

- **To update or add photos**: Drop optimized `.webp` files in `/public/photos/` and edit the `photos` array.
- **To update Instagram Reels**: Change the `url` in the `reels` array.
- **To update Contact details**: Change `contact.email` or `contact.instagram`.

---

## 📜 Credits & Standards

- **Credit**: Designed and shot by Gupta Suraj. © 2026
- **Universal Photo / Video Credit**: Photo / Video: Gupta Suraj
- **Gear & Post-Production Suite**: Adobe Premiere Pro · CapCut

