# ⚡ Muscle Nation — Elite Training & Fitness

A modern, responsive landing page for **Muscle Nation**, crafted to deliver a high-energy fitness experience with dark neon aesthetics, smooth animations, and interactive member engagement.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Contact Details (Primary & Alternative)](#-contact-details)
- [Project Architecture](#-project-architecture)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Customization](#-customization)
- [License](#-license)

---

## 🏋️‍♂️ Overview

**Muscle Nation** is designed for fitness centers, athletic clubs, and personal training brands. It combines modern typography, neon accents (`#22ff88`), glassmorphism cards, and interactive components to convert prospective athletes and members into active community participants.

---

## ✨ Key Features

1. **Modern Dark & Neon Theme**
   - High-contrast sleek dark theme with neon-green glow accents (`#22ff88`) and translucent glassmorphism panels.
2. **Hero Presentation**
   - Engaging headline, bold call-to-actions (*Get Started* & *View Programs*), and a floating glass feature card.
3. **Expert Trainers Roster**
   - Profiles of top specialists across HIIT, Strength Coaching, Flexibility/Yoga, and Bodybuilding.
4. **Smart Training Benefits**
   - Feature highlight cards detailing science-backed training, rapid results, and dedicated coaching.
5. **Dynamic Testimonial Carousel**
   - Real member feedback displayed in an automated, interactive carousel with star ratings and focus zoom effects.
6. **Tiered Membership Pricing**
   - Clean pricing table comparing **Starter**, **Basic**, **Standard** (highlighted recommendation), and **Premium** plans.
7. **Interactive Inquiry Form & Alternative Contact Channels**
   - Client-side validated contact form with instant visual confirmation.
   - Comprehensive contact hub featuring primary and alternative facilities, direct phone lines, WhatsApp hotlines, and support emails.
8. **Responsive Mobile Navigation**
   - Mobile-optimized sliding menu drawer with touch-friendly navigation links.

---

## 📞 Contact Details

Muscle Nation provides multi-channel communication for new members and existing athletes:

| Channel | Primary Details | Alternative / Support Channel |
| :--- | :--- | :--- |
| **📍 Facility Address** | 450 Muscle Way, Suite 100, New York, NY 10001 | 88 Iron Pulse Blvd, Brooklyn, NY 11201 (Annex Hub) |
| **📞 Phone Desk** | `+1 (800) 555-6872` *(Toll Free)* | `+1 (555) 924-8700` *(Direct Hotline)* |
| **💬 WhatsApp** | `+1 (800) 555-6872` | `+1 (555) 924-8700` *(Rapid Coaching Desk)* |
| **✉️ Email** | `contact@musclenation.com` | `support@musclenation.com` *(Member Care)* |
| **⏰ Operating Hours** | Mon – Fri: 5:00 AM – 11:00 PM | Sat – Sun: 7:00 AM – 9:00 PM |

---

## 📂 Project Architecture

```text
Muscle-Nation/
│
├── index.html        # Main semantic markup and page structure
├── Styles.css        # Comprehensive styling, layout, responsive design & animations
├── Script.js         # Slider carousel, scroll animations, mobile menu & form handling
├── README.md         # Project documentation and guidelines
└── Images/           # Visual assets, trainer portraits, backgrounds and icons
```

---

## 🛠️ Tech Stack

- **HTML5**: Semantic tags, accessibility attributes, and responsive layout foundations.
- **CSS3**: Vanilla CSS with Flexbox, CSS Grid, backdrop-filter glassmorphism, and custom animations.
- **JavaScript (ES6+)**: DOM manipulation, slider transforms, intersection/scroll detection, and form validation.
- **Font Awesome 7**: Vector icons for gym facilities, social channels, and contact badges.

---

## 🚀 Getting Started

No build tools or complex dependencies required. You can launch the site immediately:

### Option 1: Direct File Opening
Simply double-click `index.html` or open it with your favorite web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Live Server (VS Code)
1. Install the **Live Server** extension in VS Code.
2. Right-click `index.html` and choose **"Open with Live Server"**.
3. The site will run automatically at `http://127.0.0.1:5500`.

### Option 3: Local Node HTTP Server
```bash
# Using npx serve
npx serve .
```

---

## ⚙️ Customization

- **Branding & Colors**: Update accent colors in `Styles.css` by adjusting `#22ff88` and `#1ee07a`.
- **Contact Details**: Edit the `.contact-info` and `.footer-contact` sections in `index.html`.
- **Pricing & Plans**: Adjust plan prices, features, and highlighted tiers in the `#pricing` section of `index.html`.
- **Trainer Profiles**: Replace images in the `Images/` folder and edit coach names and specialties in `#trainers`.

---

## 📄 License

This project is open-source and free for personal and commercial fitness gym landing page applications.

© 2026 **Muscle Nation**. All rights reserved.
