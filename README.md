# ⚡ Senior Full-Stack Developer & Solutions Architect Portfolio

> Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and a **Modern Vanilla CSS Glassmorphic Design System**.

---

## 🚀 Key Features

- 🖥️ **Interactive Senior Full-Stack CLI Terminal (`~` / Ctrl+K)**:
  - Run commands: `help`, `skills`, `arch`, `projects`, `experience`, `metrics`, `contact`, `hire`, `sudo hire` (with confetti celebration).
  - Terminal history recall (`Up` / `Down` arrows), tab autocomplete, and quick command chips.
- 📐 **Interactive Architecture & Distributed Flow Sandbox**:
  - Live scenario simulations: *Next.js 15 SSR Server Actions*, *High-Concurrency Node.js Stream Ingestion*, *Distributed Redlock Rate Limiter*, and *Real-Time WebSocket & Pub/Sub Broadcast*.
  - Step-by-step packet trace with real-time latency indicators (p50, p99, memory footprint, throughput).
- 🧩 **Senior Technical Competency Bento Matrix**:
  - Categorized breakdown across React 19/Next 15, Node.js Concurrency, PostgreSQL/Redis Caching, Kubernetes/AWS Cloud, and System Architecture.
  - Interactive spotlight cursor mask effects using `@property` and CSS variables.
- 💼 **Production Case Studies & Deep-Dive Architecture Modals**:
  - Measured outcomes (RPS, Latency reduction, Cost savings, GMV).
  - Architectural decisions breakdown and stack tags.
- 💻 **Senior Architectural Code Lab**:
  - Syntax-highlighted patterns demonstrating React 19 Server Actions, Node.js Transform Stream with backpressure, and atomic Redis Lua rate limiting.
- 📬 **Interactive Engagement & Hiring Hub**:
  - Validated inquiry form, copy-to-clipboard email, and direct Calendly meeting booking.
- 🔍 **Command Palette (`Ctrl+K` / `Cmd+K`)**:
  - Universal search across skills, case studies, and quick navigation.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router, Server Actions, Partial Prerendering)
- **Library**: React 19 (Hooks, Optimistic UI, Transitions)
- **Language**: TypeScript 5.x (Strict mode)
- **Styling**: Vanilla CSS Design System (CSS Custom Properties, `@property` registered variables, Glassmorphism, Responsive Bento Grids)
- **Icons**: Lucide Icons & Custom SVG Vectors
- **Interactive FX**: Canvas Confetti

---

## 💻 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run dev server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Start production server**:
   ```bash
   npm start
   ```

---

## 📁 Project Structure

```
senior-dev-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Core Design System, CSS variables & animations
│   │   ├── layout.tsx           # SEO metadata, OpenGraph tags, Geist font configuration
│   │   └── page.tsx             # Main Portfolio Page assembling all sections
│   ├── components/
│   │   ├── Navbar.tsx           # Glassmorphic header & status badges
│   │   ├── Hero.tsx             # Hero section with live code teaser
│   │   ├── InteractiveTerminal.tsx # Senior CLI terminal with command execution
│   │   ├── TechStackMatrix.tsx  # Bento grid skills matrix with interactive filters
│   │   ├── ArchitectureSandbox.tsx # Interactive distributed flow simulator
│   │   ├── FeaturedProjects.tsx # Production case studies with deep-dive modals
│   │   ├── CodePlayground.tsx   # Syntax-highlighted senior pattern lab
│   │   ├── ExperienceTimeline.tsx # Career trajectory & leadership milestones
│   │   ├── Testimonials.tsx     # Engineering endorsements
│   │   ├── ContactSection.tsx   # Direct inquiry form & booking hub
│   │   ├── HireModal.tsx        # Priority consultation modal
│   │   ├── CommandPalette.tsx   # Ctrl+K search & action palette
│   │   ├── Icons.tsx            # Custom SVG icons
│   │   └── Footer.tsx           # Smooth back-to-top & copyright tokens
│   ├── data/
│   │   └── portfolioData.ts     # Centralized skills, case studies & bio data
│   └── types/
│       └── portfolio.ts         # TypeScript definitions
└── package.json
```

---

## 🚢 One-Click Deployment

This project is optimized for deployment on **Vercel** or any cloud platform supporting Next.js:

```bash
npx vercel
```
