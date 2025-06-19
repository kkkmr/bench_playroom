# Standard viewports (Can be varied later)

### 📱 Mobile Devices
- **360×640** – Common Android phones
- **375×667** – iPhone SE
- **390×844** – iPhone 14 Pro
- **414×896** – iPhone XR, 11, 12 Pro Max

### 📱 Tablets
- **768×1024** – iPad (portrait)
- **810×1080** – Surface Go
- **834×1112** – iPad Pro 10.5"
- **1280×800** – Android tablets

### 💻 Laptops & Desktops
- **1366×768** – Standard laptop resolution
- **1440×900** – MacBook Air
- **1536×864** – Common mid-range laptops
- **1920×1080** – Full HD monitors
- **2560×1440** – QHD displays
- **3840×2160** – 4K monitors

### 🧠 Typical CSS Media Query Breakpoints
```css
/* Extra small devices (phones, less than 600px) */
@media (max-width: 599px) {
  /* Styles for small phones */
}

/* Small devices (phones in landscape, 600px and up) */
@media (min-width: 600px) and (max-width: 767px) {
  /* Styles for larger phones */
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 1023px) {
  /* Styles for tablets */
}

/* Large devices (desktops, 1024px and up) */
@media (min-width: 1024px) and (max-width: 1439px) {
  /* Styles for small laptops and desktops */
}

/* Extra large devices (large desktops, 1440px and up) */
@media (min-width: 1440px) {
  /* Styles for large screens */
}

```
# Standard widths

vs - 319
xxs - 320 - 367
xs - 368 - 599
small - 600 - 767
med - 768 - 1023
large - 1024 - 1439
xl - 1440
