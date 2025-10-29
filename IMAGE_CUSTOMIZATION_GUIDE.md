# 🖼️ Image Customization Guide

## Overview

All images in the Amuse-Bouche website use **Unsplash placeholders** that are easy to swap out with your own brand photography. This guide shows you exactly where images are used and how to replace them.

---

## Current Images & Replacement Instructions

### 1. Hero Section - Full-Screen Dining Image

**File:** `src/components/sections/hero.tsx`

**Current Image:**

```
https://images.unsplash.com/photo-1504674900569-6ca3a14cdc58?w=1600&q=80
```

**Current Description:** Elegant dining table setup

**Where to Find Your Image:**

- Professional food photography of elegant dining
- High-end restaurant or fine dining ambiance
- Dimensions: 1600px wide minimum, 16:9 aspect ratio ideal

**How to Replace:**

1. Open `src/components/sections/hero.tsx`
2. Find line with: `src="https://images.unsplash.com/photo-1504674900569-6ca3a14cdc58?..."`
3. Replace the URL with your image URL
4. Keep the `w=1600&q=80` parameters for optimization

**Example Replacement:**

```tsx
<Image
  src="https://your-image-url.com/your-dining-image.jpg?w=1600&q=80"
  alt="Elegant dining table"
  fill
  className="object-cover"
  priority
/>
```

---

### 2. About Section - Chef Plating Image

**File:** `src/components/sections/about.tsx`

**Current Image:**

```
https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80
```

**Current Description:** Chef plating food artistically

**Where to Find Your Image:**

- Action shot of chef preparing/plating food
- Shows culinary skill and artistry
- Dimensions: 800px wide, 4:5 aspect ratio (vertical)
- Professional lighting and composition

**How to Replace:**

1. Open `src/components/sections/about.tsx`
2. Find line with: `src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?..."`
3. Replace with your image URL
4. Maintain aspect ratio (~4:5)

**Example Replacement:**

```tsx
<Image
  src="https://your-image-url.com/chef-plating.jpg?w=800&q=80"
  alt="Chef plating food"
  fill
  className="object-cover"
/>
```

---

### 3. Why Section - Scenic Bahamas Image

**File:** `src/components/sections/why.tsx`

**Current Image:**

```
https://images.unsplash.com/photo-1514432324607-2df08e9b5dbb?w=1600&q=80
```

**Current Description:** Beautiful Bahamas sunset or scenic location

**Where to Find Your Image:**

- Stunning island/location scenery
- Sunset or golden hour preferred
- Dimensions: 1600px wide minimum, 16:9 aspect ratio
- Should evoke luxury and relaxation

**How to Replace:**

1. Open `src/components/sections/why.tsx`
2. Find line with: `src="https://images.unsplash.com/photo-1514432324607-2df08e9b5dbb?..."`
3. Replace with your image URL

**Note:** This section has a dark overlay (`bg-black/65`) applied, so the image will appear darkened. Choose a bright, high-contrast image that looks good darkened.

**Example Replacement:**

```tsx
<Image
  src="https://your-image-url.com/bahamas-sunset.jpg?w=1600&q=80"
  alt="Scenic bahamas sunset"
  fill
  className="object-cover"
/>
```

---

### 4. Preparation Section - Luxury Dining Experience Image

**File:** `src/components/sections/prepare.tsx`

**Current Image:**

```
https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80
```

**Current Description:** Luxury dining experience, table setting, wine service

**Where to Find Your Image:**

- Upscale dining ambiance (wine, plating, service)
- Table settings with elegant details
- Dimensions: 800px wide, 4:5 aspect ratio (vertical)
- Should feel premium and sophisticated

**How to Replace:**

1. Open `src/components/sections/prepare.tsx`
2. Find line with: `src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?..."`
3. Replace with your image URL

**Example Replacement:**

```tsx
<Image
  src="https://your-image-url.com/luxury-dining.jpg?w=800&q=80"
  alt="Luxury dining experience"
  fill
  className="object-cover"
/>
```

---

## 📋 Image Replacement Checklist

- [ ] **Hero Image** - Elegant dining ambiance (primary visual)
  - Dimensions: 1600px+ wide
  - Aspect ratio: 16:9
  - Used: Full-screen background

- [ ] **About Image** - Chef/cooking action shot
  - Dimensions: 800px wide
  - Aspect ratio: 4:5 (vertical)
  - Used: Side-by-side with text

- [ ] **Why Image** - Scenic/sunset location
  - Dimensions: 1600px+ wide
  - Aspect ratio: 16:9
  - Used: Full-screen background (will be darkened)

- [ ] **Prepare Image** - Premium dining setting
  - Dimensions: 800px wide
  - Aspect ratio: 4:5 (vertical)
  - Used: Side-by-side with checklist

---

## 🎯 Best Practices

### Optimal Image Specifications

1. **Resolution**
   - Minimum: 1600px wide for desktop hero images
   - Minimum: 800px wide for vertical images
   - Use high-quality originals (quality 80+ is fine)

2. **Format**
   - JPG: Best for photographs
   - PNG: If transparency needed (not recommended for photos)
   - WebP: Modern format for best compression

3. **Compression**
   - Aim for 100-200KB file size per image
   - Use Unsplash, Pexels, or image optimization tools
   - Next.js Image component will auto-optimize

4. **Content Suggestions**

   **Hero Image:**
   - Elegant table setting with soft lighting
   - Wine glasses, fine china, upscale ambiance
   - Could include servers in action
   - Warm, inviting lighting preferred

   **About Image:**
   - Chef plating food (action shot)
   - Focus on hands and precision
   - Beautiful, artistic presentation
   - Professional kitchen setting

   **Why Image:**
   - Scenic, aspirational location
   - Sunset or golden hour preferred
   - Could be beach, resort, or restaurant view
   - Evokes luxury and relaxation

   **Prepare Image:**
   - Premium dining experience
   - Wine service, elegant table setting
   - Could show guests enjoying meal
   - Warm, sophisticated lighting

---

## 🔄 How Next.js Image Component Works

All images use the Next.js `Image` component, which automatically:

✅ **Optimizes images** - Converts to modern formats (WebP)
✅ **Lazy loads** - Images load only when needed
✅ **Responsive sizing** - Different sizes for different devices
✅ **Prevents layout shift** - Reserves space for images
✅ **Serves from CDN** - Fast global distribution

No additional configuration needed after replacing URLs.

---

## 📸 Free High-Quality Image Sources

If you don't have professional photography yet:

### Unsplash

- Free, high-quality images
- No attribution required
- https://unsplash.com/

**Search Terms:**

- "fine dining"
- "chef plating"
- "luxury restaurant"
- "sunset island"

### Pexels

- Free stock photos
- https://www.pexels.com/

### Pixabay

- Free images
- https://pixabay.com/

### Paid Options (Better Quality)

- **Shutterstock** - $29+/month
- **Getty Images** - Premium pricing
- **Alamy** - Professional images
- **Adobe Stock** - $9.99+/month

---

## 🎨 Color Customization

While you're customizing images, you might also want to adjust the accent color.

**Current Gold Color:**

```css
--gold: oklch(0.75 0.2 70);
```

**File:** `src/app/globals.css`

**To Change:**

1. Open `src/app/globals.css`
2. Find the `:root` section
3. Modify the `--gold` variable
4. Use OKLCH format: `oklch(lightness saturation hue)`

**Example: Warmer Gold**

```css
--gold: oklch(0.78 0.25 60); /* More saturated, warmer */
```

**Example: Silver**

```css
--gold: oklch(0.85 0.05 260); /* Cool, subtle accent */
```

---

## ✅ Verification After Replacement

After updating images:

1. **Run dev server**

   ```bash
   bun run dev
   ```

   Visit `http://localhost:3000` and verify images display correctly

2. **Check responsiveness**
   - Open DevTools (F12)
   - Resize to mobile (320px)
   - Resize to tablet (768px)
   - Check desktop (1024px+)

3. **Verify image quality**
   - Images should be sharp and clear
   - Loading should be fast (< 2 seconds)
   - No distortion or stretching

4. **Build for production**
   ```bash
   bun run build
   ```
   Verify no build errors

---

## 🚀 Deployment Considerations

When deploying to production:

1. **Use CDN URLs** if available (faster than local)
2. **Ensure image URLs are HTTPS** (required for production)
3. **Optimize for mobile** (Next.js does this automatically)
4. **Monitor Core Web Vitals** (Lighthouse scores)

---

**Remember:** Quality images are crucial for luxury brands. Invest in professional photography or use high-quality stock images for best results. ✨
