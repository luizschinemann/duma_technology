# TM Creative Lab - Website

![TM Creative Lab](assets/logo.jpg)

## Overview

TM Creative Lab is a modern, artistic portfolio website showcasing creative services including branding, social media management, audiovisual production, and consulting. Built with a focus on premium aesthetics and smooth user experience.

## Features

- **7 Interconnected Pages**
  - Home (landing page with hero, services, process, FAQ)
  - About TM (company mission and philosophy)
  - About Founder (creator background)
  - Services (detailed service offerings)
  - Process (4-step methodology)
  - Social Impact (CSR initiatives)
  - Contact (WhatsApp and email form)

- **Modern UI/UX**
  - Animated preloader with logo
  - Particle.js background effects
  - Smooth scroll navigation
  - Glassmorphism card effects
  - Interactive process hover states
  - Responsive mobile navigation
  - Collapsible FAQ sections
  - Rotating circular text button

- **Premium Design Elements**
  - Rain animation effects
  - Service marquee banner
  - Split background sections
  - Floating card layouts
  - Backdrop blur effects

## Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with modern features
  - CSS Grid & Flexbox
  - CSS Variables
  - Glassmorphism effects
  - Keyframe animations
- **JavaScript (jQuery 3.6.3)** - DOM manipulation and interactions

### Frameworks & Libraries
- **Materialize CSS 1.0.0** - Material Design UI framework
- **Animate.css 4.1.1** - CSS animation library
- **Particles.js 2.0.0** - Interactive particle backgrounds

### Fonts
- **Space Grotesk** - Headings and body text
- **Outfit** - Alternative headings
- **Inter** - Body copy
- **Material Icons** - Icon set

## Project Structure

```
TM/
├── index.html              # Main landing page (504 lines)
├── sobre-tm.html          # About company page
├── sobre-tally.html       # About founder page
├── servicos.html          # Services page
├── processo.html          # Work process page
├── impacto-social.html    # Social impact page
├── contato.html           # Contact page
├── styles.css             # All styling (724 lines)
├── scripts.js             # JavaScript logic (104 lines)
├── assets/
│   └── logo.jpg          # Company logo
└── README.md             # This file
```

## Installation & Setup

### 1. Clone or Download
```bash
# Clone this repository (if using git)
git clone <repository-url>

# Or simply download and extract the ZIP
```

### 2. Configuration

#### Update Contact Information
Edit the placeholder WhatsApp link in HTML files:

```html
<!-- Find this line in your HTML files: -->
<a href="https://wa.me/seunumeroaqui">

<!-- Replace with your actual number (country code + number, no spaces): -->
<a href="https://wa.me/5511999999999">
```

#### Update Email Form Action
Edit `contato.html` to point your email form to your backend or service:

```html
<form action="your-email-handler.php" method="POST">
```

### 3. Running Locally

#### Option 1: Simple HTTP Server (Python)
```bash
# Python 3
python -m http.server 8000

# Then open: http://localhost:8000
```

#### Option 2: Live Server (VS Code)
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

#### Option 3: Static File Server (Node.js)
```bash
npm install -g http-server
http-server
```

## Deployment

This is a static website and can be deployed to any hosting platform:

### Recommended Platforms
- **Netlify** - Drag & drop deployment
- **Vercel** - Git integration
- **GitHub Pages** - Free hosting
- **Cloudflare Pages** - Fast CDN
- **Traditional Web Hosting** - Upload via FTP

### Deployment Steps (Netlify Example)
1. Create account at [netlify.com](https://netlify.com)
2. Drag your project folder to Netlify dashboard
3. Done! Your site is live

### Custom Domain
Most platforms allow custom domain configuration in their settings.

## Customization Guide

### Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --accent-pink: #d55c79;      /* Primary pink accent */
    --accent-dark: #760000;      /* Dark red/burgundy */
    --text-primary: #760000;     /* Primary text color */
    --text-secondary: rgba(118, 0, 0, 0.7); /* Secondary text */
    --bg-light: #ffffff;         /* Light backgrounds */
    --glass-bg: rgba(213, 92, 121, 0.1); /* Glassmorphism */
}
```

### Fonts
Change font imports in HTML `<head>`:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap">
```

Then update CSS:

```css
.font-heading {
    font-family: 'YourFont', sans-serif;
}
```

### Content
Edit text directly in HTML files. All content is in Portuguese (Brazilian).

### Images
- Replace `assets/logo.jpg` with your logo
- Update Unsplash URLs with your own images
- Recommended logo size: 200x200px minimum

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimization

### For Production
1. **Minify CSS/JS**
   ```bash
   # Use online tools or build tools like:
   npm install -g clean-css-cli uglify-js
   cleancss -o styles.min.css styles.css
   uglifyjs scripts.js -o scripts.min.js
   ```

2. **Optimize Images**
   - Compress images with TinyPNG or Squoosh
   - Convert to WebP format for better compression
   - Lazy load images below the fold

3. **CDN Considerations**
   - All external libraries load from CDN
   - Consider self-hosting for better control

## SEO Optimization

### Add Meta Tags
Already included basic meta tags. Consider adding:

```html
<!-- Open Graph (Facebook) -->
<meta property="og:title" content="TM Creative Lab">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yoursite.com/og-image.jpg">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="TM Creative Lab">
```

### Create Sitemap
Create `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yoursite.com/sobre-tm.html</loc>
    <priority>0.8</priority>
  </url>
  <!-- Add other pages -->
</urlset>
```

## Troubleshooting

### Preloader Won't Disappear
- Check browser console for JavaScript errors
- Ensure jQuery loads before scripts.js
- Timeout is set to 1500ms in scripts.js

### Particles Not Showing
- Verify particles.js CDN is accessible
- Check if `#particles-js` element exists
- Console will show errors if library fails to load

### Mobile Navigation Not Working
- Ensure Materialize JS is loaded
- Check if jQuery is loaded first
- Sidenav initialized in scripts.js

### Images Not Loading
- Check file paths are correct
- Verify Unsplash URLs are accessible
- Replace with local images if needed

## File Size Reference

- **HTML files**: ~150-500 lines each
- **styles.css**: 724 lines (~24KB unminified)
- **scripts.js**: 104 lines (~3KB unminified)
- **Total project size**: ~30KB (without images)

## Dependencies

All dependencies load from CDN (no local installation):

```json
{
  "jquery": "3.6.3",
  "materialize-css": "1.0.0",
  "animate.css": "4.1.1",
  "particles.js": "2.0.0"
}
```

## Contributing

This is a client project. For modifications:
1. Create a backup before making changes
2. Test thoroughly on multiple devices
3. Validate HTML/CSS
4. Check responsive breakpoints

## License

Copyright © 2026 TM Creative Lab. All rights reserved.

## Support

For questions or support:
- Email: [Add your email]
- WhatsApp: [Add your WhatsApp]
- Website: [Add your website]

## Changelog

### Version 1.0.0 (2026-02-26)
- Initial release
- 7 pages with full content
- Responsive design
- Interactive animations
- Particle effects
- FAQ section
- Contact forms

---

**Built with ❤️ for TM Creative Lab**
