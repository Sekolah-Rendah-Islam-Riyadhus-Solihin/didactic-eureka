# 🏫 Open Primary School Web Platform

An open-source, white-label, accessible website template designed specifically for **Primary Schools (Government & Private)**. Built with **Astro**, **Tailwind CSS**, and optimized for zero-cost static deployment on **Cloudflare Pages**, with a built-in roadmap for future **Laravel** backend expansion.

---

## 🌟 Key Features

1. **White-Label & Reusable**: Easily customize the school's identity, crest, colors, and features from a single configuration file (`src/config/school.config.ts`).
2. **Government vs. Private Presets**:
   - **Government Primary School**: Displays catchment zone rules, registration documentation checklists, and government welfare programs (free breakfast, uniform grants). Suppresses tuition fee tables.
   - **Private Primary School**: Displays multi-term tuition fee schedules, bursary/scholarship guidelines, and online tour application.
3. **Primary-School Specific Information Architecture**:
   - 🚨 Emergency / Weather Notice Bar
   - 🥗 Weekly Canteen Nutrition Menu
   - 🚌 Drop-off / Pick-up Gate traffic directions (Gates A, B, C)
   - 📅 Academic Term Dates & Weekly Circulars
   - 🛡️ Child Safeguarding & Safety Policies
4. **Cloudflare Pages Ready**: Zero Node.js runtime required for Phase 1. Generates 100/100 Lighthouse score static HTML with instant global CDN distribution.
5. **Laravel Ready**: Built-in pathways for decoupled backend expansion (Parent Portal button, REST API inquiry submission, automated deploy webhooks).

---

## 🚀 Quick Start Guide

### 1. Run Development Server
```bash
npm install
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 2. Build for Production
```bash
npm run build
```
This generates the optimized static build in the `dist/` directory.

---

## ⚙️ How to Customize for Any School

Open `src/config/school.config.ts`:

### A. Switch School Type
```typescript
// Toggle between 'government' and 'private'
schoolType: "government", // or "private"
```

### B. Customize School Identity & Colors
```typescript
identity: {
  name: "Oakridge Primary School",
  shortName: "Oakridge Primary",
  tagline: "Inspiring curious minds, fostering kind hearts.",
  motto: "Learning Together, Growing Forever",
  establishedYear: 1984,
  affiliation: "Department of Education & Early Childhood Development",
  // ...
},
branding: {
  primary: "#065f46",       // School primary brand color (injected into CSS vars)
  primaryHover: "#047857",
  primaryLight: "#ecfdf5",
  secondary: "#d97706",
  // ...
}
```

### C. Enable / Disable Specific Sections
```typescript
features: {
  showTuitionFees: false,          // Set to true for private schools
  showZoningCatchment: true,       // Set to true for government schools
  showGovernmentAssistance: true,  // Free breakfast & uniform subsidies
  showBusRoutes: true,             // Gate directions & bus schedules
  showCanteenMenu: true,           // Weekly healthy meal menu
  showParentPortalButton: true,    // Button linking to Laravel portal
  portalUrl: "https://portal.school.edu",
}
```

---

## ☁️ Deploying to Cloudflare Pages

### Option 1: Via Cloudflare Dashboard (Recommended)
1. Push this repository to GitHub or GitLab.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/), go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository and configure:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Click **Save and Deploy**. Your school website is live on a global edge network!

### Option 2: Via Wrangler CLI
```bash
npm run build
npx wrangler pages deploy dist --project-name=open-primary-school
```

---

## 🐘 Expanding with Laravel in the Future

When your school is ready for dynamic services (student records, parent portals, grades, or fee payments), pair this Astro frontend with a Laravel backend using any of the following patterns:

1. **Parent / Teacher Portal Subdomain**:
   - Keep Astro on `www.school.edu` (Cloudflare Pages).
   - Host Laravel on `portal.school.edu` (using Laravel Filament, Livewire, or Inertia).
   - Parents log in via the "Parent Portal" button in the Astro navigation header.
2. **Headless REST API (`/api/inquiries`)**:
   - The admissions form on `/admissions` can send JSON directly to your Laravel API:
     ```javascript
     await fetch('https://api.school.edu/api/admissions', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData)
     });
     ```
3. **Automated Deploy Webhook**:
   - When school staff post a new circular inside Laravel Filament Admin, trigger a Cloudflare Pages Deploy Hook to automatically re-publish the Astro static site in seconds!
