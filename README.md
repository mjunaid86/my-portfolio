# Executive Technology Portfolio — Muhammad Junaid Khan

> **Technology & Digital Transformation Leader**  
> Aviation MRO • Digital Products • Cloud & Platform Engineering • AI Innovation

A modern, high-performance personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**, positioned specifically for senior technology leadership, digital transformation, and applied engineering innovation.

Live URL: [https://portfoliojunaid.vercel.app/](https://portfoliojunaid.vercel.app/)  
LinkedIn: [https://www.linkedin.com/in/muhammadjkhan/](https://www.linkedin.com/in/muhammadjkhan/)

---

## 🏛️ Architecture & Philosophy

Rather than a junior developer portfolio focusing solely on language checklists, this platform communicates executive technical leadership, enterprise architecture depth, and business impact:

- **Executive Aesthetic:** Dark navy/blue enterprise palette (`#060a17` to `#0b1329`) with precision cyan/blue accents and subtle glassmorphic depth.
- **Dynamic Theme Mode:** Dark mode by default with an instant Light Mode toggle persisted via `localStorage`.
- **Transformation Pipeline:** Interactive 5-stage transformation lifecycle visualization (`Business → Digital Platform → Data → Cloud → AI`).
- **Interactive Project Explorer:** Modal drawer with structured problem statements, technical solutions, roles, architecture flows (e.g. BMS/LMS Pickslip sync), and verified business impact.
- **Applied AI Section:** Highlights real engineering workflows—Gemini Code Review Bot pipeline, reusable AI Agent Skills, and AI-assisted development practices.
- **Enterprise Architectural Stack:** Visual multi-tier breakdown from presentation portals down to cloud infrastructure and CI/CD pipelines.
- **Zero Backend Required:** Fully static architecture optimized for instant CDN edge delivery on Vercel.

---

## 🗂️ Project Structure

```
my-portfolio/
├── index.html                  # SEO & Open Graph metadata, Inter typography
├── package.json                # Dependencies and build scripts
├── postcss.config.js           # PostCSS Tailwind processor
├── tailwind.config.js          # Enterprise navy/cyan palette & class-based dark mode
├── vite.config.js              # Vite React configuration
├── src/
│   ├── main.jsx                # Application root entry point
│   ├── App.jsx                 # App shell & ThemeProvider integration
│   ├── index.css               # Tailwind directives, custom scrollbars, glass utilities
│   ├── context/
│   │   └── ThemeContext.jsx    # Theme provider (Light / Dark mode persistence)
│   ├── data/
│   │   ├── projects.js         # 7 key initiatives (Aerotrade, MDC, RMC, Pickslip sync, etc.)
│   │   ├── experience.js       # ADE/AirAsia, Maxis, IRS, EA-Link career timeline
│   │   ├── skills.js           # Categorized matrix & 5-tier architecture stack
│   │   ├── expertise.js        # 10 core leadership competency cards
│   │   ├── aiInnovation.js     # Gemini Bot pipeline, agent skills & AI-assisted development
│   │   └── education.js        # Higher education (Univ. of Manchester) & certifications
│   └── components/
│       ├── Navbar.jsx          # Sticky navigation, scroll-spy, theme toggle, mobile drawer
│       ├── Hero.jsx            # Executive positioning & 5-node transformation lifecycle
│       ├── About.jsx           # Leadership bio & 4 verified enterprise statistics
│       ├── Expertise.jsx       # 10 core leadership capability cards
│       ├── Projects.jsx        # Category filters & portfolio grid
│       ├── ProjectCard.jsx     # Card component with role & tech highlights
│       ├── ProjectModal.jsx    # Accessible modal drawer with architecture diagrams
│       ├── AIInnovation.jsx    # Gemini Code Review Bot & Reusable Agent Skills
│       ├── Experience.jsx      # Expandable professional timeline
│       ├── Skills.jsx          # Architecture stack & categorized technology groups
│       ├── Education.jsx       # Degrees and training credentials
│       ├── Contact.jsx         # Contact cards, copy-email action & LinkedIn CTA
│       └── Footer.jsx          # Executive branding & back-to-top navigation
```

---

## 🚀 Local Development

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

### 2. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
Generates a highly optimized, minified production bundle in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ☁️ Deployment to Vercel

The website is designed for zero-configuration deployment on **Vercel**.

### Option A: Via Vercel Git Integration (Recommended)
1. Push your code to your GitHub/GitLab repository.
2. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New Project"**.
3. Import your repository (`my-portfolio`).
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**. Your portfolio will be live in under 60 seconds.

### Option B: Via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly from terminal
vercel
```

---

## 🔒 Confidentiality & Data Integrity
In accordance with enterprise guidelines:
- No internal AirAsia or ADE proprietary source code, private endpoints, or internal credentials are exposed.
- All metrics and statistics (e.g. 12+ years, 4+ aviation platforms, 3M+ daily transactions, 5-minute data refresh) are strictly backed by verified public resume milestones.

---

## 📄 License
© 2026 Muhammad Junaid Khan. All rights reserved.
