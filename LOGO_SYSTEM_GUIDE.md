# 🎨 School Logo System Guide

This guide explains how to use and customize the school logo and minimalist fallback placeholders in the Open Primary School Web Platform.

---

## 📌 Overview

The logo system is powered by:
- **Configuration file**: [`src/config/school.config.ts`](file:///c:/Users/sahaini/.gemini/antigravity/scratch/open-primary-school-web/src/config/school.config.ts)
- **Reusable component**: [`src/components/layout/SchoolLogo.astro`](file:///c:/Users/sahaini/.gemini/antigravity/scratch/open-primary-school-web/src/components/layout/SchoolLogo.astro)
- **Integrated locations**: Header navigation bar & Footer across all pages and languages (Bahasa Melayu & English).

---

## ⚙️ Configuration (`src/config/school.config.ts`)

Inside `src/config/school.config.ts`, the `identity` object controls the logo behavior:

```typescript
export const schoolConfig: SchoolConfig = {
  identity: {
    name: "Sekolah Rendah Islam Riyadhus Solihin",
    shortName: "SRIRS",
    // 1. Path to your custom image logo (leave empty string "" if using a fallback)
    logo: "/images/logo.png",
    // 2. Display mode: 'auto' | 'image' | 'crest' | 'monogram' | 'none'
    logoMode: "auto",
    // ...
  },
  // ...
};
```

---

## 🛠️ The 5 Display Modes (`logoMode`)

| Mode | Behavior | Best Used When... |
| :--- | :--- | :--- |
| **`"auto"`** | Uses `logo` if path is provided; automatically falls back to minimalist initial badge if `logo` is empty. | **Default recommended mode.** Works out of the box. |
| **`"image"`** | Enforces displaying the custom image file. | You have an official school logo image ready. |
| **`"crest"`** | Displays a sleek, minimalist academic shield/crest SVG with school accent colors. | School does not yet have a digitized logo, but wants a professional crest symbol. |
| **`"monogram"`** | Displays the school's initial letter (e.g. `S` for SRIRS) on a stylized brand-colored badge. | You prefer a modern, clean typography-first monogram. |
| **`"none"`** | Hides the logo and fallback completely. | You want clean text-only branding (School Name + Motto only). |

---

## 🚀 How-To Examples

### 1. Using Your Own School Logo Image

1. Place your logo image inside the `public/` directory (e.g. `public/images/logo.png` or `public/logo.svg`).
2. Update `src/config/school.config.ts`:
   ```typescript
   identity: {
     name: "Sekolah Rendah Islam Riyadhus Solihin",
     shortName: "SRIRS",
     logo: "/images/logo.png", // Or "/logo.svg"
     logoMode: "auto",
     // ...
   }
   ```
3. Run `npm run dev` to preview your logo in the header and footer.

> [!TIP]
> **Recommended Image Specifications**:
> - **Format**: Transparent SVG (preferred) or PNG with transparent background.
> - **Dimensions**: At least `256 x 256` pixels (square or near-square aspect ratio).
> - **File size**: Under `200 KB` for fast loading.

---

### 2. No Logo Yet? Option A: Minimalist Crest Placeholder

If your school doesn't have an official logo file yet, use the built-in academic crest:

```typescript
identity: {
  name: "Sekolah Rendah Islam Riyadhus Solihin",
  shortName: "SRIRS",
  logo: "",            // Leave empty
  logoMode: "crest",   // 👈 Renders minimalist crest shield icon
  // ...
}
```

---

### 3. No Logo Yet? Option B: Modern Monogram Badge

Display the first letter of the school's `shortName` on a brand-colored badge:

```typescript
identity: {
  name: "Sekolah Rendah Islam Riyadhus Solihin",
  shortName: "SRIRS",
  logo: "",               // Leave empty
  logoMode: "monogram",   // 👈 Renders "S" monogram badge
  // ...
}
```

---

### 4. Text-Only Branding (No Logo & No Placeholder)

To hide the logo container entirely and only show the school name and motto:

```typescript
identity: {
  name: "Sekolah Rendah Islam Riyadhus Solihin",
  shortName: "SRIRS",
  logo: "",
  logoMode: "none", // 👈 Completely removes the logo/badge
  // ...
}
```

---

## 🧩 Using `<SchoolLogo />` in Custom Components

If you build new custom pages or layouts and need the school logo:

```astro
---
import SchoolLogo from "../components/layout/SchoolLogo.astro";
---

<!-- Available sizes: 'sm' (40x40), 'md' (48x48), 'lg' (64x64) -->
<SchoolLogo size="md" />

<!-- Add custom Tailwind styling -->
<SchoolLogo size="lg" class="shadow-lg border-2 border-amber-300" />
```

---

## ❓ Troubleshooting & FAQs

### Why is my logo image not showing?
- Ensure the image file is placed inside the `public/` folder, not `src/`. Files in `public/` are served from the root URL (e.g. `public/logo.png` is accessible at `/logo.png`).
- Check that `logoMode` is not set to `"none"`.

### My logo looks distorted or stretched
- The `SchoolLogo` component uses `object-contain`, ensuring the image aspect ratio is preserved without stretching.
- For best visual alignment in the header, square (`1:1`) or slightly horizontal (`4:3`) logos look cleanest.
