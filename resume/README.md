# Jeremy Angelo Lim — Professional Portfolio Website (Vercel Ready)

A modern, high-performance, and responsive portfolio website designed for **Jeremy Angelo Lim** (Administrative & Operations Support Specialist), showcasing expertise in **Virtual Assistance**, **Administrative Coordination**, **Bookkeeping & Payroll Support**, **IT Support**, and **Custom Web-Based Systems Automation (PHP / MySQL)**.

---

## 🚀 Live Features

- **⚡ Zero-Build / Instant Load**: Pure modern HTML5, CSS3, and ES6+ JavaScript. No complex build tools required; deploys instantly to Vercel in seconds.
- **🎨 Glassmorphism Tech-Admin Aesthetic**: Dark slate theme with emerald/cyan neon accents, subtle dot matrix background, and responsive glass panels.
- **🌓 Light / Dark Mode**: Seamless theme switcher with persistent local storage.
- **🔍 Interactive Project & Systems Gallery**: Filter systems by category (Systems & Automation, Admin & Knowledge Base, IT & Infrastructure) with interactive architecture diagrams and detail modals.
- **⚡ Searchable Tools & Tech Radar**: Real-time interactive search filter across 30+ productivity tools, databases, IT ops software, and multimedia equipment.
- **🗂️ Interactive Core Competency Pillars**: Tabbed interface breaking down Administrative, Bookkeeping, IT Support, and Process Automation skills.
- **🖨️ ATS-Compliant 1-Click Printable Resume**: Built-in print engine (`window.print()` + dedicated `@media print` CSS) that formats the entire resume into a clean PDF ready for recruiters.
- **📋 One-Click Copy & Toast Notifications**: Quick copy for email, phone, and Discord with toast feedback.
- **📱 100% Mobile & Tablet Responsive**: Optimized from 320px mobile screens to 4K ultra-wide monitors.

---

## 📁 Project Structure

```
/
├── index.html              # Main semantic HTML5 portfolio document
├── vercel.json             # Vercel deployment configuration & security headers
├── package.json            # Project manifest & local preview scripts
├── README.md               # Documentation and deployment guide
├── assets/
│   └── favicon.svg         # Modern vector monogram favicon
├── css/
│   └── styles.css          # Design system, glassmorphism, responsive styles & print sheet
└── js/
    ├── data.js             # Central data file (Update your details, projects, and skills here)
    └── app.js              # Core interactivity (filtering, search, modals, clipboard, theme)
```

---

## ⚡ How to Deploy to Vercel in 60 Seconds

### Option 1: Deploy via GitHub (Recommended)
1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Jeremy Angelo Lim portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** ➔ **"Project"**.
4. Import your GitHub repository.
5. Leave all settings at default and click **"Deploy"**.
6. Your portfolio is live with a global CDN and automatic HTTPS!

### Option 2: Deploy via Vercel CLI
1. Install Vercel CLI (if you have Node.js installed):
   ```bash
   npm i -g vercel
   ```
2. Run in the project directory:
   ```bash
   vercel
   ```
3. Follow the quick prompts to deploy instantly.

---

## 🛠️ How to Customize Your Information

All content is cleanly separated in `js/data.js`. Open `js/data.js` to update:

1. **Email & Phone Number**:
   ```javascript
   email: "your.actual.email@gmail.com",
   phone: "+63 9XX XXX XXXX",
   linkedin: "https://linkedin.com/in/yourprofile",
   github: "https://github.com/yourhandle"
   ```
2. **Projects**: Add, edit, or remove projects in the `projects` array.
3. **Skills & Tools**: Customize the items in `coreSkillPillars` and `toolCategories`.

---

## 💻 Local Preview (Testing on your computer)

You can run a local test server using Python:

```bash
python3 -m http.server 3000
```
Then open `http://localhost:3000` in your web browser.

---

## 📄 License
MIT License © 2026 Jeremy Angelo Lim
