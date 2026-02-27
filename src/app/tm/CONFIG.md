# Configuration Guide

This document explains how to configure your TM Creative Lab website.

## Quick Start Checklist

- [ ] Update WhatsApp number
- [ ] Configure email form handler
- [ ] Replace logo image
- [ ] Update social media links (if adding)
- [ ] Customize colors
- [ ] Update copyright year

## 1. Contact Information

### WhatsApp Number

**Location**: `contato.html` line 70

```html
<!-- Current (placeholder): -->
<a href="https://wa.me/seunumeroaqui" target="_blank">

<!-- Update to (example for Brazil): -->
<a href="https://wa.me/5511999999999" target="_blank">
```

**Format**: `https://wa.me/[country_code][phone_number]`
- Remove all spaces, dashes, and parentheses
- Include country code without + symbol
- Example: Brazil (55) 11 99999-9999 → `5511999999999`

**More Examples**:
- USA: `https://wa.me/14155552671`
- UK: `https://wa.me/447700900077`
- Argentina: `https://wa.me/5491155554444`

### Email Form Configuration

**Location**: `contato.html` line 82

The contact form currently has no action. You need to add a form handler:

#### Option 1: FormSpree (Easiest - No Backend)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Update the form tag:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

#### Option 2: Netlify Forms (If hosted on Netlify)
```html
<form name="contact" method="POST" data-netlify="true">
```

#### Option 3: Custom Backend
```html
<form action="/api/contact" method="POST">
```

Create a backend endpoint to handle form submissions.

#### Option 4: mailto (Simple but not recommended)
```html
<form action="mailto:your@email.com" method="POST" enctype="text/plain">
```

## 2. Branding

### Logo Image

**Location**: `assets/logo.jpg`

**Requirements**:
- Format: JPG, PNG, or WebP
- Recommended size: 200x200px minimum
- Aspect ratio: 1:1 (square)
- File size: Under 100KB recommended

**Replace**:
1. Delete or rename current `assets/logo.jpg`
2. Add your logo as `assets/logo.jpg`
3. Ensure filename matches exactly (case-sensitive on some servers)

### Company Name

**Locations**: Multiple files

Search and replace "TM Creative Lab" with your company name:
- `index.html`
- `sobre-tm.html`
- `contato.html`
- Footer sections (all pages)

## 3. Colors & Styling

### Color Scheme

**Location**: `styles.css` lines 5-17

```css
:root {
    --accent-pink: #d55c79;      /* Primary accent color */
    --accent-dark: #760000;      /* Main brand color (dark red) */
    --text-primary: #760000;     /* Primary text color */
    --text-secondary: rgba(118, 0, 0, 0.7); /* Lighter text */
    --bg-light: #ffffff;         /* Light backgrounds */
    --bg-pink: #d55c79;          /* Pink backgrounds */
    --bg-dark: #760000;          /* Dark backgrounds */
    --glass-bg: rgba(213, 92, 121, 0.1); /* Glassmorphism effect */
    --glass-border: rgba(118, 0, 0, 0.1); /* Glass borders */
}
```

**To change colors**:
1. Choose your color palette
2. Update the hex codes in `:root` variables
3. Save and refresh browser

**Color Tools**:
- [Coolors.co](https://coolors.co) - Palette generator
- [Adobe Color](https://color.adobe.com) - Color wheel
- [Paletton](https://paletton.com) - Color scheme designer

### Fonts

**Location**:
- HTML `<head>` section (Google Fonts import)
- `styles.css` (font-family declarations)

**Current Fonts**:
- Space Grotesk - Headings
- Outfit - Alternative headings
- Inter - Body text

**To change**:
1. Visit [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Copy the import link
4. Replace in HTML `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

5. Update CSS:

```css
.font-heading {
    font-family: 'YourFont', sans-serif;
}
```

## 4. Content Customization

### Page Titles & Meta Descriptions

Update in each HTML file's `<head>` section:

```html
<title>Your Title · TM Creative Lab</title>
<meta name="description" content="Your description here" />
```

**SEO Best Practices**:
- Title: 50-60 characters
- Description: 150-160 characters
- Include target keywords
- Make it compelling

### Services

**Location**: `index.html` lines 254-338

Edit service cards:
- Service icons (Material Icons)
- Service titles
- Service descriptions
- Service features list

**Material Icons**: Browse at [fonts.google.com/icons](https://fonts.google.com/icons)

### FAQ Section

**Location**: `index.html` lines 433-461

Add/remove FAQ items:

```html
<li>
    <div class="collapsible-header">
        <span>Your question?</span>
        <i class="material-icons-round">expand_more</i>
    </div>
    <div class="collapsible-body">
        <p>Your answer here.</p>
    </div>
</li>
```

## 5. Images

### Background Images (Unsplash)

**Locations**: Throughout HTML files

Current images load from Unsplash CDN:
```html
<img src="https://images.unsplash.com/photo-[id]?auto=format&fit=crop&w=800&q=80">
```

**To replace**:
1. **Option A**: Use your own images
   - Add images to `assets/` folder
   - Update `src` paths: `src="assets/your-image.jpg"`

2. **Option B**: Use different Unsplash images
   - Browse [unsplash.com](https://unsplash.com)
   - Right-click image → Copy image address
   - Replace URL

### Image Optimization

For better performance:
- Compress images: [tinypng.com](https://tinypng.com)
- Resize to appropriate dimensions
- Convert to WebP: [squoosh.app](https://squoosh.app)

## 6. Animation Settings

### Preloader Duration

**Location**: `scripts.js` line 6

```javascript
setTimeout(function () {
    $('#preloader-page').fadeOut(1000, ...);
}, 1500); // Change this number (milliseconds)
```

- `1500` = 1.5 seconds
- Increase for slower connection audiences
- Decrease for faster experience

### Text Rotation Speed

**Location**: `scripts.js` line 64

```javascript
setInterval(() => {
    // ...
}, 4000); // Change this number (milliseconds)
```

### Particle Count

**Location**: `scripts.js` line 29

```javascript
"number": { "value": 40, ... } // Change particle count
```

- Lower number = Better performance
- Higher number = More impressive effect
- Default: 40

## 7. Navigation Links

**Location**: All HTML files (navigation bar)

```html
<ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="sobre-tm.html">Sobre</a></li>
    <li><a href="servicos.html">Serviços</a></li>
    <li><a href="processo.html">Processo</a></li>
    <li><a href="impacto-social.html">Impacto</a></li>
    <li><a href="contato.html">Contato</a></li>
</ul>
```

To add/remove pages:
1. Add/remove `<li>` items
2. Ensure links match filename exactly
3. Update navigation in all HTML files for consistency

## 8. Social Media Links

Currently not implemented. To add:

**In footer** (all HTML files):

```html
<div class="social-links" style="margin: 20px 0;">
    <a href="https://instagram.com/yourhandle" target="_blank" style="margin: 0 10px;">
        <i class="material-icons-round">instagram</i>
    </a>
    <a href="https://facebook.com/yourpage" target="_blank" style="margin: 0 10px;">
        <i class="material-icons-round">facebook</i>
    </a>
    <!-- Add more as needed -->
</div>
```

## 9. Analytics & Tracking

### Google Analytics 4

Add before `</head>` in all HTML files:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Replace `G-XXXXXXXXXX` with your Measurement ID.

### Facebook Pixel

Add before `</head>`:

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
/></noscript>
```

## 10. Advanced Configuration

### Backup Before Changes

Always create a backup:
```bash
# Make a copy of your project folder
cp -r TM TM-backup-2026-02-26
```

### Version Control

Initialize git repository:
```bash
cd TM
git init
git add .
git commit -m "Initial commit"
```

### Testing

Test after each change:
- Desktop browsers (Chrome, Firefox, Safari)
- Mobile devices (iOS Safari, Chrome Mobile)
- Different screen sizes
- Network throttling (slow 3G simulation)

## Support

For technical issues:
- Check browser console (F12 → Console)
- Validate HTML: [validator.w3.org](https://validator.w3.org)
- Validate CSS: [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/)
- Check responsive: [responsivedesignchecker.com](https://responsivedesignchecker.com)

---

**Last Updated**: 2026-02-26
