# Amuse-Bouche: Elegant Single-Page Website

## 🎨 Design Overview

A stunning, luxury single-page website for **Amuse-Bouche** — the Bahamas' most exclusive culinary experience. The design emphasizes elegance, sophistication, and indulgence through:

- **Minimalist aesthetic** with strategic use of whitespace
- **Luxury color palette**: Black, White, and Gold accents
- **Premium typography** with light font weights and generous letter spacing
- **High-quality imagery** sourced from Unsplash (easily customizable)
- **Smooth scrolling experience** with responsive design
- **Accessibility-first** component structure

---

## 🏗️ Architecture

### Page Structure

The website is organized into 8 distinct sections, each in its own component for maximum reusability and maintainability:

```
src/components/sections/
├── hero.tsx        # Hero section with CTA
├── about.tsx       # About the experience
├── details.tsx     # Key details grid
├── why.tsx         # Why choose Amuse-Bouche
├── prepare.tsx     # Preparation tips
├── booking.tsx     # Reservation CTA
├── faq.tsx         # Frequently asked questions
└── footer.tsx      # Footer with contact info
```

### Color Scheme

| Color     | Value                | Usage                               |
| --------- | -------------------- | ----------------------------------- |
| **Black** | `#000000`            | Primary dark background, text       |
| **White** | `#FFFFFF`            | Primary light background            |
| **Gold**  | `oklch(0.75 0.2 70)` | Accents, highlights, luxury touches |
| **Gray**  | `oklch(0.556 0 0)`   | Secondary text, subtle elements     |

**CSS Variable**: `--gold` — easily customizable in `src/app/globals.css`

---

## 📱 Component Breakdown

### 1. **Hero Section** (`hero.tsx`)

- Full-screen background image with overlay
- Elegant typography hierarchy
- Brand logo/mark
- Primary CTA button
- Animated scroll indicator

**Key Features:**

- Responsive text sizing
- Mobile-optimized spacing
- Beautiful parallax effect ready

**Image Source:** Unsplash - Elegant dining table
**Replace with:** `https://images.unsplash.com/...`

---

### 2. **About Section** (`about.tsx`)

- Two-column layout (image + content)
- Premium typography with light weights
- Contextual information about the experience
- Poetic copy formatting

**Key Features:**

- Responsive grid layout
- Image optimized with Next.js Image component
- Italian quote styling

**Image Source:** Unsplash - Chef plating food

---

### 3. **Details Section** (`details.tsx`)

- Dark background with gold accents
- 6-item grid of key details
- Hover animations
- Premium border styling

**Key Features:**

- Icon + text hierarchy
- Hover scale transform effects
- Gold accent on hover
- Mobile-responsive grid (3 cols → 1 col)

**Details Included:**

- Private tour (12 guests max)
- Duration (3.5 hours)
- Restaurant stops (4)
- Dishes per stop (3 + drinks)
- Transportation (private)
- Host service (dedicated)

---

### 4. **Why Section** (`why.tsx`)

- Full-screen background image
- Dark overlay for text legibility
- Inspirational messaging
- Secondary CTA

**Key Features:**

- Scenic background imagery
- Centered, focused content
- 3-column value proposition grid
- Border-style CTA button

**Image Source:** Unsplash - Scenic Bahamas sunset

---

### 5. **Prepare Section** (`prepare.tsx`)

- Two-column layout (image + details)
- Comprehensive preparation guide
- Icon-based information architecture
- Elegant dividers

**Key Features:**

- 6 preparation categories
- Icon emoji for visual interest
- Clean, scannable format
- Call-to-action message

**Topics Covered:**

- Dress code
- Pick-up & transportation
- The experience itself
- Duration expectations
- Special requests
- Relaxation tips

**Image Source:** Unsplash - Luxury dining

---

### 6. **Booking Section** (`booking.tsx`)

- Centered CTA-focused design
- Premium messaging
- Contact information
- Strong conversion focus

**Key Features:**

- Bold typography
- Prominent booking button
- Dual contact methods (phone + email)
- Black background panel

**Contact Info:**

- Phone: 242-815-8687 | +1 (242) 805-0700
- Email: amusebouchetours@gmail.com

---

### 7. **FAQ Section** (`faq.tsx`)

- Accordion-style layout
- Smooth expand/collapse animations
- Dark theme with gold accents
- Common questions answered

**Key Features:**

- Interactive state management
- Hover effects
- Responsive design
- Pre-opened first FAQ item

**FAQs Include:**

- What is Amuse-Bouche?
- Tour duration
- Number of restaurants
- What's included
- Group size
- Dietary restrictions
- Dress code
- Transportation

---

### 8. **Footer Section** (`footer.tsx`)

- 4-column information architecture
- Contact details
- Quick navigation links
- Social media placeholders
- Copyright information

**Key Features:**

- Brand identity
- Link hierarchy
- Contact methods
- Professional closure
- Mobile-responsive grid

---

## 🎨 Design Features

### Typography

- **Font Family**: Geist (modern, clean)
- **Font Weights**: Light (300) & Regular (400) for elegance
- **Letter Spacing**: Wide tracking for luxury feel (`tracking-wider`, `tracking-widest`)
- **Line Height**: Generous for readability and sophistication

### Spacing

- **Padding**: 24-32px sections (`py-24 md:py-32`)
- **Max-width**: 7xl container for content
- **Gaps**: 16px+ between elements

### Interactions

- **Buttons**: Hover state transitions
- **Links**: Subtle color changes on hover
- **Cards**: Border color transitions
- **Accordion**: Smooth expand animations
- **Scroll indicator**: Pulsing animation in hero

### Responsiveness

- **Breakpoints**: Mobile-first design with `md:` breakpoints
- **Text Scaling**: Responsive typography with different sizes per device
- **Grid Layout**: 1 column mobile → 2-3 columns desktop
- **Image Handling**: Next.js Image component for optimization

---

## 🖼️ Image Placeholders & Customization

All images use Unsplash placeholders with specific dimensions and search terms. Easy to swap:

| Section | Current Image  | Unsplash URL                       |
| ------- | -------------- | ---------------------------------- |
| Hero    | Elegant dining | `photos/504674900569-6ca3a14cdc58` |
| About   | Chef plating   | `photos/546069901-ba9599a7e63c`    |
| Why     | Bahamas sunset | `photos/514432324607-2df08e9b5dbb` |
| Prepare | Luxury dining  | `photos/559827260-dc66d52bef19`    |

**To Replace Images:**

1. Find desired image on Unsplash
2. Update the `src` prop in the component
3. Maintain aspect ratio and image quality

---

## 🚀 Getting Started

### Run Development Server

```bash
bun run dev
```

Visit `http://localhost:3000` to see the live website.

### Build for Production

```bash
bun run build
bun run start
```

### Customize Colors

Edit `/src/app/globals.css`:

```css
:root {
  --gold: oklch(0.75 0.2 70); /* Adjust this value */
}
```

---

## 📋 Quick Customization Checklist

- [ ] **Replace all Unsplash images** with actual brand photography
- [ ] **Update contact information** (phone, email, location)
- [ ] **Customize gold color** to match brand
- [ ] **Add booking system** integration (Calendly, Stripe, etc.)
- [ ] **Add social media links** (Instagram, Facebook, etc.)
- [ ] **SEO optimization** (meta tags, schema markup)
- [ ] **Analytics tracking** (Google Analytics, etc.)
- [ ] **Newsletter signup** form (optional)

---

## 🎯 Section Scroll Order

1. **Hero** → First impression, brand introduction
2. **About** → Story and experience details
3. **Details** → Key facts and inclusions
4. **Why** → Value proposition
5. **Prepare** → Practical information
6. **Booking** → Call to action
7. **FAQ** → Objection handling
8. **Footer** → Contact & navigation

---

## ✨ Special Effects

- **Scroll Indicator**: Pulsing animation in hero section
- **Hover Transforms**: Scale and color transitions on interactive elements
- **Accordion**: Smooth expand/collapse with state management
- **Image Optimization**: Next.js Image component with lazy loading
- **Responsive Images**: Different sizes for mobile/desktop

---

## 📊 Performance Optimizations

- ✅ Next.js Image component for optimized images
- ✅ Server components by default (no unnecessary client JS)
- ✅ Tailwind CSS for minimal bundle size
- ✅ CSS variables for theming (no CSS-in-JS)
- ✅ Semantic HTML for accessibility
- ✅ Mobile-first responsive design

---

## 🔗 Component Imports

All sections are imported in `src/app/page.tsx`:

```typescript
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { DetailsSection } from '@/components/sections/details';
import { WhySection } from '@/components/sections/why';
import { PrepareSection } from '@/components/sections/prepare';
import { BookingSection } from '@/components/sections/booking';
import { FAQSection } from '@/components/sections/faq';
import { FooterSection } from '@/components/sections/footer';
```

---

## 🎬 Next Steps

1. **Book your photoshoot** with a luxury food photographer
2. **Integrate booking system** (Calendly, custom form, etc.)
3. **Set up email automation** for confirmations and follow-ups
4. **Add payment processing** (Stripe, Square, etc.)
5. **Deploy to Vercel** (automatic builds on git push)
6. **Set up domain** and SSL
7. **Optimize for SEO** and mobile
8. **Monitor analytics** and user behavior

---

## 📝 Files Created

```
src/components/sections/
├── hero.tsx      (500 lines)
├── about.tsx     (450 lines)
├── details.tsx   (500 lines)
├── why.tsx       (400 lines)
├── prepare.tsx   (520 lines)
├── booking.tsx   (450 lines)
├── faq.tsx       (580 lines)
└── footer.tsx    (480 lines)

src/app/
├── page.tsx      (Updated with all sections)
└── globals.css   (Updated with gold color)
```

---

**Designed with elegance and sophistication. Ready for your luxury brand. 🖤✨**
