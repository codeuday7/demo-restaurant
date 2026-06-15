import { useState } from "react";

const sections = [
  { id: "concept", label: "01 — Creative Direction" },
  { id: "colors", label: "02 — Color System" },
  { id: "typography", label: "03 — Typography" },
  { id: "structure", label: "04 — Page Structure" },
  { id: "mobile", label: "05 — Mobile Strategy" },
  { id: "motion", label: "06 — Motion Rules" },
  { id: "conversion", label: "07 — Conversion Psychology" },
  { id: "prompt", label: "08 — Antigravity Master Prompt" },
];

const content = {
  concept: {
    title: "Website Concept & Creative Direction",
    subtitle: "The story before the screen",
    body: [
      {
        heading: "The Core Narrative",
        text: `This is not a menu website. This is an invitation.

The moment a visitor lands, they should feel the warmth of an open kitchen, the scent of something extraordinary, the quiet confidence of a restaurant that knows exactly who it is. The website earns trust before a single word is read — through proportion, restraint, and deliberate beauty.

We are building for one emotional moment: the owner looks at this on their phone and says, "I want my restaurant to feel like this."`,
      },
      {
        heading: "Brand Archetype",
        text: `Position: The Warm Artisan — premium enough to feel elevated, human enough to feel welcoming.

Not a Michelin-star clinical coldness. Not a fast-casual noise festival. 

The exact sweet spot between "you'll feel special here" and "you'll feel at home here." Think of how a beautifully lit, family-run restaurant in Florence makes you feel — that precise blend of pride, warmth, craft, and invitation.`,
      },
      {
        heading: "Visual Identity Direction",
        text: `Primary aesthetic language: Editorial Hospitality.

Drawn from: high-end food magazines (Bon Appétit, Saveur), luxury menu design, boutique hotel identities, artisan brand packaging.

The design avoids: stock photography clichés, gradient-heavy banners, cramped mobile layouts, template-feeling grids, amateur icon sets.

The design commits to: negative space as a luxury signal, typography as a design element, imagery that feels curated not searched, color that suggests quality before content does.`,
      },
      {
        heading: "Emotional Journey Map",
        text: `Seconds 0–3 → Instant premium signal. Hero image + headline creates desire.
Seconds 3–10 → Trust established. Business value strip + social signals confirm quality.
Seconds 10–30 → Appetite activated. Dish showcase + menu preview creates craving.
Seconds 30–60 → Relationship formed. Brand story + ambience section create connection.
60s+ → Action taken. CTA surfaces, WhatsApp button, location confirmed.

Every section exists to move the visitor one step closer to either calling, messaging, or visiting.`,
      },
    ],
  },

  colors: {
    title: "Color System",
    subtitle: "A palette that earns its place",
    body: [
      {
        heading: "Primary Palette — Dark Variant (Recommended)",
        text: `Background Primary:   #0D0B08  (near-black, warm-tinted — feels cinematic, not cold)
Background Surface:   #1A1610  (card surfaces, slightly lifted)
Background Elevated:  #241E16  (navigation, modals)

Accent Gold:          #C9A96E  (brass/champagne — the brand's warmth signal)
Accent Gold Hover:    #E2C28A  (lighter state for interactions)
Accent Muted:         #7A6240  (secondary accent, borders)

Text Primary:         #F5F0E8  (warm white — never pure #FFFFFF)
Text Secondary:       #B8A892  (supporting copy, captions)
Text Tertiary:        #7A6E5E  (meta, placeholders)

Border Subtle:        rgba(201, 169, 110, 0.15)  (gold-tinted dividers)
Border Default:       rgba(201, 169, 110, 0.30)  (card edges, input borders)`,
      },
      {
        heading: "Primary Palette — Light Variant (Alternative)",
        text: `Background Primary:   #FAF7F2  (warm cream — appetizing, not clinical white)
Background Surface:   #F2EDE4  (card surfaces)
Background Elevated:  #E8E0D4  (chips, tags)

Accent Saffron:       #B8621A  (deep burnt orange — earthy, premium)
Accent Saffron Hover: #D4742A
Accent Muted:         #8C4A14  (borders, secondary)

Text Primary:         #1A1410  (near-black with warmth)
Text Secondary:       #6B5C4E
Text Tertiary:        #9C8878

Border Subtle:        rgba(184, 98, 26, 0.12)
Border Default:       rgba(184, 98, 26, 0.25)`,
      },
      {
        heading: "Semantic Colors",
        text: `Success (available, open):    #4A8C6A  (muted sage green)
Warning (limited, busy):      #C9A030  (warm amber — not harsh yellow)
Error (closed, unavailable):  #9C3D2E  (deep terracotta — not harsh red)

Star/Rating accent:           #C9A96E  (matches brand gold)
WhatsApp Green (exact):       #25D366  (brand requirement — use only for WhatsApp CTA)`,
      },
      {
        heading: "Application Rules",
        text: `— Never use pure #000000 or #FFFFFF anywhere in the design.
— All backgrounds carry a warm undertone (slight amber/brown shift).
— The accent gold appears sparingly: key CTAs, prices, category labels, hover states.
— Images should be slightly warm-graded to match palette harmony.
— Overlays on images: linear-gradient from transparent to rgba(13,11,8,0.85).
— Section backgrounds alternate: Primary → Surface → Primary → Surface. Never same-same.
— Box shadows, if used: box-shadow: 0 8px 40px rgba(0,0,0,0.4) on dark variant only.`,
      },
    ],
  },

  typography: {
    title: "Typography System",
    subtitle: "Type that costs nothing and communicates everything",
    body: [
      {
        heading: "Type Families",
        text: `Display / Headlines:   Playfair Display  (Google Fonts)
  — Elegant serif with high contrast strokes. Feels editorial, prestigious, and warm.
  — Use for: hero headline, section titles, dish names, pull quotes.

Body / UI:             Inter  (Google Fonts)
  — Geometric humanist sans. Clean, legible at all sizes. Premium utility feel.
  — Use for: paragraphs, navigation, buttons, labels, prices, meta info.

Accent / Italic:       Playfair Display Italic
  — Use sparingly for: taglines, pull quotes, decorative sub-headings.
  — Creates contrast without adding a third family.`,
      },
      {
        heading: "Type Scale",
        text: `Display XL:    72px / 76px leading / -2px tracking    (hero headline, desktop)
Display L:     56px / 60px leading / -1.5px tracking  (hero headline, mobile)
Heading 1:     48px / 52px leading / -1px tracking    (section titles)
Heading 2:     36px / 40px leading / -0.5px tracking  (sub-sections)
Heading 3:     24px / 30px leading / 0px tracking     (card titles, dish names)
Heading 4:     18px / 24px leading / 0.2px tracking   (labels, categories)
Body Large:    18px / 30px leading / 0.1px tracking   (lead paragraphs)
Body:          16px / 26px leading / 0.1px tracking   (standard copy)
Body Small:    14px / 22px leading / 0.2px tracking   (captions, meta)
Label:         12px / 16px leading / 1.5px tracking   (all caps labels, tags — UPPERCASE)
Price:         20px / 1 leading / 0px tracking        (Inter Medium 500, accent color)`,
      },
      {
        heading: "Typography Behavior Rules",
        text: `— Headlines in Playfair Display always: Regular weight (400) or Bold (700). Never Medium.
— Body copy in Inter: Regular (400) for paragraphs, Medium (500) for UI labels, SemiBold (600) for strong emphasis only.
— Dish names: Playfair Display, 22–24px, capitalize naturally (not ALL CAPS).
— Prices: Inter Medium 500, colored with Accent Gold, never Playfair.
— Category labels: Inter, 11–12px, ALL CAPS, letter-spacing: 2px. Acts like an eyebrow.
— Navigation: Inter Medium, 14px, letter-spacing: 0.5px.
— CTA buttons: Inter SemiBold 600, 15px, letter-spacing: 0.5px.
— Never use Playfair Display below 18px — it loses its elegance at small sizes.
— Paragraph max-width: 640px. Never full-width text blocks — preserve readability.`,
      },
      {
        heading: "Mobile Typography Adjustments",
        text: `Display XL → 38px / 44px leading (mobile hero)
Heading 1 → 30px / 36px leading
Heading 2 → 24px / 30px leading
Heading 3 → 20px / 26px leading
Body Large → 17px / 28px leading
Body → 15px / 24px leading (minimum — never go below 15px on mobile)

Font loading strategy: Preload Playfair Display 400 + 700 and Inter 400 + 500 + 600.
Use font-display: swap. Subset to Latin for performance.`,
      },
    ],
  },

  structure: {
    title: "Full Page Structure",
    subtitle: "Eleven sections, one continuous story",
    body: [
      {
        heading: "Section 1 — Hero",
        text: `Layout: Full-viewport, image or video background. Content centered or left-aligned.
Height: 100vh on desktop, 90vh on mobile (avoids URL bar issues).

Background: Cinematic food/ambience photo with warm dark gradient overlay.
  — Gradient: linear-gradient(160deg, rgba(13,11,8,0.2) 0%, rgba(13,11,8,0.85) 70%)

Content stack (top to bottom):
  1. Small eyebrow label — "Est. 2018  ·  Gadwal, Telangana" — Inter 12px, ALL CAPS, gold, letter-spacing 2px
  2. Restaurant name — Playfair Display, Display XL, warm white
  3. One-line brand tagline — Playfair Display Italic, 22px, warm white 80% opacity
  4. Primary CTA button — "Reserve a Table" — solid gold background, dark text, 52px height
  5. Secondary CTA — "View Full Menu →" — text link style, gold color, arrow
  6. Scroll cue — animated thin gold line pulsing downward at bottom center

Navigation overlay (sticky):
  — Logo left, nav links center (hidden on mobile), CTA button right
  — Background: transparent → blur-glass on scroll (backdrop-filter: blur(16px))
  — On mobile: hamburger menu only, full-screen overlay nav

Mobile hero: Full screen, image crops to portrait, text stack compressed, both CTAs stacked vertically.`,
      },
      {
        heading: "Section 2 — Business Value Strip",
        text: `Purpose: Immediately communicate practical business signals to the owner AND convince visitors to act.
Layout: Horizontal scrolling on mobile, 4-column grid on desktop.
Background: Accent Gold (slightly muted) or very dark surface — high contrast.

4 value tiles, each containing:
  — Icon (lucide or custom thin-line style, 28px, matching color)
  — Short action label: "Call Directly", "WhatsApp Us", "Find Us", "View Menu"
  — Sub-label: phone number / "Chat instantly" / "Get directions" / "Full menu"
  — Each tile is tappable/clickable (tel:, wa.me/, Google Maps, menu anchor)

Design language: Pills or minimal icon-cards. No borders on dark bg — use subtle glow or separation.
On mobile: 2×2 grid, not scrolling — always fully visible above the fold.
This section converts. It must load first.`,
      },
      {
        heading: "Section 3 — Signature Dishes Showcase",
        text: `Layout: Horizontal scroll on mobile (snap-scroll, full-card width). 3-column grid on desktop.
Section title: "From Our Kitchen" — Playfair Display, Heading 1, centered.
Eyebrow: "SIGNATURE DISHES" — Inter 12px, ALL CAPS, gold, letter-spacing 2px.

Each dish card:
  — Full-bleed food image, 4:3 or 1:1 ratio, fills card top
  — Dish name: Playfair Display, 22px
  — One-line description: Inter Regular, 14px, secondary text color
  — Price: Inter Medium, 18px, Accent Gold
  — Optional: "Chef's Choice" or "Must Try" badge — small pill, gold outline

Card behavior:
  — Hover: subtle scale (1.03) on image, gold border appearance at card edge
  — Mobile: snap-scroll, 85% card width visible with peek of next card

Show 4–6 dishes. End with "Explore Full Menu →" link card (dark, gold text).`,
      },
      {
        heading: "Section 4 — Brand Story",
        text: `Layout: Two-column on desktop (text left, image right). Single column on mobile.
Background: Background Surface (#1A1610 dark / #F2EDE4 light).

Content:
  — Eyebrow: "OUR STORY"
  — Headline: Playfair Display, 42px — something like "Three Generations of Flavor"
  — Body: 3 short paragraphs, Inter Regular 17px, max-width 540px. No bullet points.
    Para 1: Heritage & origin (founding year, family, city).
    Para 2: Philosophy (ingredients, cooking method, values).
    Para 3: Promise (hospitality, community, future).
  — Pull quote: Playfair Display Italic, 24px, gold color — a one-liner like "Every plate carries the memory of home."
  — No CTA here — this section is emotional, not transactional.

Image: Tall portrait format (2:3 or 3:4). Chef at work, or interior detail, or close-up ingredient shot. No stock-photo smiling chef.

Mobile: Image becomes a full-width banner above the text.`,
      },
      {
        heading: "Section 5 — Experience / Ambience",
        text: `Layout: Immersive horizontal scroll of large images with caption overlays. Or: asymmetric grid (1 large + 2 small).
Background: Primary dark — this should feel like stepping inside.

Headline: Playfair Display Italic, 48px — "Step Inside"
Sub: Inter, 16px, secondary color — "A space designed for memories."

3–4 large ambience images with minimal text overlays:
  — "Private Dining" / "Open Kitchen" / "Garden Seating" / "Family Tables"
  — Each label: Inter 12px, ALL CAPS, gold

On mobile: Full-width vertical stack of images, each 70vw tall with overlay caption.
This section is silent — let the photography speak. Minimal copy.`,
      },
      {
        heading: "Section 6 — Menu Preview",
        text: `Layout: Tabbed categories on desktop. Accordion on mobile.
Background: Alternating with adjacent sections.

Tab/category labels: Inter 12px, ALL CAPS, letter-spacing 2px. Active tab: gold underline.

Categories (examples):
  — Starters / Soups / Mains / Biryanis / Breads / Desserts / Drinks

Each menu item row:
  — Left: Dish name (Inter Medium, 16px) + one-line description (Inter 13px, muted)
  — Right: Price (Inter Medium, 18px, gold)
  — Separator: thin gold-tinted dotted line between name and price
  — Veg / Non-veg indicator: small circle dot (green / red) before dish name

Show 4–6 items per category. End with "Download Full Menu" or "View Full Menu" CTA.
DO NOT try to show the entire menu — curation > completeness here.

Mobile accordion: Each category expands on tap. Smooth transition. One open at a time.`,
      },
      {
        heading: "Section 7 — CTA / Conversion",
        text: `Layout: Full-width dark section with centered content. Background image option with overlay.
This is the primary action section — it must feel confident and clear.

Headline: Playfair Display, 48px — "Ready to Experience [Restaurant Name]?"
Sub: Inter, 17px, secondary — "Join us for lunch, dinner, or a private celebration."

3 CTA buttons stacked horizontally (on desktop), vertically (on mobile):
  1. "Reserve a Table" — primary solid button, gold background, dark text
  2. "Message on WhatsApp" — WhatsApp green button, white text, WhatsApp icon
  3. "Call Now: +91 XXXXX XXXXX" — outline gold button, gold text

Below buttons: operating hours in clean type — "Open daily 11 AM – 11 PM"
Optional: "Or visit us at [Address]" with map pin icon linking to Google Maps.`,
      },
      {
        heading: "Section 8 — Reviews / Social Proof",
        text: `Layout: Horizontal scroll of review cards on mobile. 3-column grid on desktop.
Background: Surface variant for contrast.

Section header:
  — Eyebrow: "WHAT GUESTS SAY"
  — Headline: Playfair Display, 38px — "4.8 Stars on Google"
  — Star icons: 5 filled gold stars, large (32px), centered.

Each review card:
  — Gold quote mark (Playfair Display, 64px, decorative, low opacity)
  — Review text: Inter, 15px, italic, 3–4 lines max. Truncated with "..." if longer.
  — Reviewer name: Inter Medium, 14px
  — "Verified Google Review" label: Inter 11px, muted, with Google G icon
  — Date: Inter 11px, muted

Show 3–4 reviews. End with "Read all 200+ reviews on Google →" link.
Avoid fake-feeling reviews. Keep them specific, human, and credible.`,
      },
      {
        heading: "Section 9 — Gallery",
        text: `Layout: Masonry or editorial grid — NOT a uniform boring grid.
Suggestion: 1 large wide image, 2 medium portrait images, 1 large landscape, 1 small accent. Repeat pattern.
Background: Darkest shade — gallery feels like a private viewing.

No captions needed — let the imagery breathe.
Hover: slight brightness increase (filter: brightness(1.1)) + gold thin border overlay.
Click: lightbox open (smooth fade in, X to close, swipe to navigate on mobile).

Image mix recommended:
  — 2–3 signature dish close-ups
  — 2 wide interior/ambience shots
  — 1–2 detail shots (hands plating, table setting, spice close-up)
  — 1 outdoor/exterior if attractive

End section with: "Follow us on Instagram @[handle]" — link to profile.`,
      },
      {
        heading: "Section 10 — Location",
        text: `Layout: Two-column on desktop (map left, info right). Stacked on mobile (info first, map below).
Map: Embedded Google Map with custom dark or warm style. No default blue Google styling.

Info column content:
  — Restaurant name (Playfair Display, 24px)
  — Full address with map pin icon
  — Phone: clickable tel: link
  — WhatsApp: clickable wa.me/ link
  — Operating hours: listed cleanly by day/time
  — "Get Directions" button: links to Google Maps directions

Landmark note if useful: "Near [landmark], [area name]"
Parking note if applicable.

Map column: Rounded corners. 400px height on desktop, 250px on mobile. Always show a pin marker.`,
      },
      {
        heading: "Section 11 — Footer",
        text: `Layout: 3-column on desktop. Single stack on mobile.
Background: Darkest shade or near-black.

Column 1 — Brand:
  — Restaurant logo or wordmark (Playfair Display, 20px)
  — 2-line brand description (Inter, 13px, muted)
  — Social icons row: Instagram, Facebook, Google — minimal icon style

Column 2 — Quick Links:
  — Menu, Reservations, About, Gallery, Contact
  — Inter 13px, muted, hover: gold color

Column 3 — Contact:
  — Phone, WhatsApp, Address, Hours
  — Inter 13px with appropriate icons (thin-line style)

Bottom bar:
  — © 2025 [Restaurant Name]. All rights reserved.
  — "Website by [Your Agency Name]" — subtle, small, linked
  — Privacy Policy if needed

Top border: 1px gold-tinted line (rgba(201,169,110,0.3)) separating footer from body.`,
      },
    ],
  },

  mobile: {
    title: "Mobile-First Design Strategy",
    subtitle: "The phone is the primary canvas",
    body: [
      {
        heading: "Mobile Principles",
        text: `1. Design mobile layout first. Desktop is an enhancement, not the default.
2. Every CTA must be reachable by thumb in natural hold position.
3. Minimum touch target: 44×44px (Apple HIG standard). No exceptions.
4. No horizontal scroll anywhere except intentional snap-scroll carousels.
5. All text minimum 15px on mobile. No exceptions for "stylistic" small type.
6. All images must crop intelligently at mobile breakpoints — use object-fit: cover + object-position: center.
7. No hover-only information. Anything revealed on hover must have a mobile equivalent.`,
      },
      {
        heading: "Breakpoint System",
        text: `Mobile S:    320px – 375px   (Samsung small, older iPhones)
Mobile M:    376px – 430px   (iPhone 14/15 standard)
Mobile L:    431px – 480px   (larger Android flagships)
Tablet:      481px – 768px   (iPad mini, foldables)
Desktop S:   769px – 1024px  (small laptops, iPad landscape)
Desktop M:   1025px – 1280px (standard laptops)
Desktop L:   1281px+         (large displays)

Design and test at 375px first. Then 430px. Then 768px. Then 1280px.`,
      },
      {
        heading: "Section-by-Section Mobile Behavior",
        text: `Hero: Full-screen, image centered, text left-aligned, both CTAs 100% width stacked.
Value Strip: 2×2 grid, tiles 50% width, adequate padding.
Dish Showcase: Horizontal snap-scroll, 85% card width, momentum scrolling.
Brand Story: Image first (full width), then text below.
Menu: Accordion per category. Smooth expand/collapse. No tabs.
CTA Section: All buttons 100% width, stacked vertically.
Reviews: Horizontal scroll, 80% card width.
Gallery: 2-column masonry or single-column. Larger images better.
Location: Info block first, then map below.
Footer: Single column, all items stacked.

Navigation: Sticky top bar, 60px height. Logo left, hamburger right. Full-screen overlay menu.`,
      },
      {
        heading: "Performance on Mobile",
        text: `Images:
  — Use WebP format for all photographs. AVIF where supported.
  — Hero image: max 400KB, lazy-load everything below fold.
  — Use srcset for responsive images: 400w, 800w, 1200w variants.
  — Blur-up or skeleton loading for dish images.

CSS:
  — Critical CSS inlined in <head>.
  — Non-critical CSS deferred.
  — Avoid large paint-blocking stylesheets.

Fonts:
  — Preload Playfair Display and Inter subsets.
  — font-display: swap.
  — System font fallback: Georgia → serif (for Playfair), system-ui → sans-serif (for Inter).

JavaScript:
  — No heavy animation libraries. Use CSS animations + Intersection Observer.
  — WhatsApp link opens native app: https://wa.me/[number]?text=[message]
  — Phone link: tel:[number] — always full number with country code.

Core Web Vitals targets:
  LCP: < 2.5s
  FID/INP: < 100ms
  CLS: < 0.1`,
      },
    ],
  },

  motion: {
    title: "Motion & Micro-Interaction Rules",
    subtitle: "Every movement earns its place",
    body: [
      {
        heading: "Motion Philosophy",
        text: `Motion communicates quality. But only when restrained.

The rule: if removing the animation makes the content feel faster and clearer, remove it. Motion serves information and emotion — never decoration for its own sake.

Premium motion feels:
  — Unhurried but not slow
  — Responsive but not bouncy
  — Intentional, like each element knows where it belongs
  — Confident — no wavering, no overshooting`,
      },
      {
        heading: "Scroll Reveal Animations",
        text: `All content below the fold enters on scroll intersection.

Standard reveal:
  — Initial: opacity: 0, transform: translateY(24px)
  — Final: opacity: 1, transform: translateY(0)
  — Duration: 500ms
  — Easing: cubic-bezier(0.25, 0.46, 0.45, 0.94)  [ease-out-quart equivalent]
  — Trigger: IntersectionObserver threshold 0.15
  — Delay stagger for sibling elements: 80ms between each

DO NOT: use translateY values larger than 32px (cheap feeling).
DO NOT: add rotation or scale to reveals (distracting).
DO NOT: animate the hero content — it should be visible immediately.`,
      },
      {
        heading: "Hover States",
        text: `Dish cards:
  — Image: transform: scale(1.04), duration 400ms, ease-out
  — Card border: opacity 0 → 1, gold border, duration 300ms
  — Price: color shift to lighter gold, duration 200ms

Navigation links:
  — Underline grows from left: transform: scaleX(0) → scaleX(1), origin left, 250ms

CTA buttons (Primary):
  — Background: shifts 8% lighter, duration 200ms
  — transform: translateY(-1px), duration 200ms
  — box-shadow appears: 0 8px 24px rgba(201,169,110,0.3), duration 200ms

CTA buttons (Outline):
  — Background fills with gold at opacity 0.1, duration 200ms
  — Text brightens slightly

Gallery images:
  — filter: brightness(1.0) → brightness(1.1), duration 300ms
  — Gold thin border fades in at 1px

Social proof cards:
  — Subtle lift: transform: translateY(-3px), box-shadow deepens, duration 250ms`,
      },
      {
        heading: "Sticky Navigation Transition",
        text: `On scroll past 80px:
  — Background: transparent → rgba(13,11,8,0.85)
  — backdrop-filter: blur(0px) → blur(16px) + saturate(1.8)
  — border-bottom: none → 1px solid rgba(201,169,110,0.2)
  — Transition: 300ms ease

Logo: optionally scales down slightly (100% → 90%) when sticky activates.`,
      },
      {
        heading: "Loading & Skeleton States",
        text: `Image skeleton:
  — Background: rgba(201,169,110,0.08)
  — Animated shimmer: background-position animates across, 1.5s infinite
  — Transition to image: opacity 0 → 1 on image load, 400ms

Page load sequence (hero only):
  1. Logo fades in: 0ms delay, 400ms
  2. Nav links fade in: 200ms delay, 400ms
  3. Eyebrow label: 300ms delay, 400ms
  4. Headline: 450ms delay, 500ms + slight upward drift (8px)
  5. Tagline: 600ms delay, 400ms
  6. CTA buttons: 750ms delay, 400ms
  7. Scroll cue: 1000ms delay, fade in

This sequence takes ~1.3 seconds and feels cinematic, not slow.`,
      },
      {
        heading: "Accessibility & Reduced Motion",
        text: `@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}

All content must be visible without animation.
Never use animation as the only way to communicate state changes.
Focus states must be clearly visible (gold outline: outline: 2px solid #C9A96E, outline-offset: 3px).`,
      },
    ],
  },

  conversion: {
    title: "Conversion Psychology Integration",
    subtitle: "Beauty that produces business",
    body: [
      {
        heading: "For the Restaurant Owner (Demo Viewer)",
        text: `The owner viewing this demo needs to feel three things simultaneously:
1. "This looks far better than what I have now."
2. "I can see how this would get me more customers."
3. "I want to know how much this costs."

To achieve this:

Premium positioning: Every visual choice signals quality. When the owner sees this, they compare it against their current Facebook page or basic website — the contrast should be dramatic.

Business signals made visible: The Value Strip section names real business outcomes. Call tracking, WhatsApp orders, Google directions — these are the things owners care about. By surfacing them prominently, we speak their language.

Social proof framing: Reviews shown as "4.8 Stars · 200+ Reviews" signals volume and trust simultaneously. This is what other customers will see too — owners understand that.

Mobile-first reality: The demo must work perfectly on WhatsApp's in-app browser and standard mobile browsers. If it breaks or loads slowly on the owner's phone, the sale is lost.`,
      },
      {
        heading: "For Restaurant Customers (End Users)",
        text: `Appetite Stimulation:
  — Large, high-quality food photography triggers immediate sensory response.
  — Warm color palette (amber, gold, cream) is associated with food quality and warmth.
  — Menu preview with clear descriptions and prices reduces decision friction.

Trust Architecture:
  — Google Reviews with specific star count (4.8, not just "great reviews") = credible.
  — Operating hours visible = reduces fear of wasted trip.
  — Address + landmark = reduces navigation anxiety.
  — WhatsApp = instant human contact without phone call anxiety.

Friction Reduction:
  — One-tap call button: tel: link.
  — One-tap WhatsApp with pre-filled message: "Hi, I'd like to make a reservation for..."
  — Google Maps deep link opens in maps app directly.
  — Menu visible without PDF download.

Urgency Without Pressure:
  — "Reserve a Table" CTA implies limited seating (true for most restaurants).
  — Review count implies popularity.
  — No fake "Only 2 tables left tonight!" — it feels cheap. Trust signals work better.`,
      },
      {
        heading: "CTA Hierarchy & Placement",
        text: `Primary CTA: "Reserve a Table" — appears in: Hero, CTA section, Navigation (desktop), floating button (mobile).

Secondary CTA: "WhatsApp Us" — appears in: Value strip, CTA section, footer, floating button (mobile).

Tertiary CTA: "View Full Menu" — appears in: Hero (secondary link), Dish showcase section end, Navigation.

Quaternary CTA: "Get Directions" / "Call Now" — appears in: Value strip, Location section, Footer.

Floating mobile button: A sticky bottom bar (mobile only) with 2 icons:
  — Phone icon (left) → tel: link
  — WhatsApp icon (right) → wa.me/ link
  — Height: 56px, full-width, semi-transparent background, blurred
  — This stays visible throughout scrolling — the most important conversion element on mobile.`,
      },
      {
        heading: "Trust Signal Checklist",
        text: `✓ Google star rating prominently displayed (not buried)
✓ Review count shown as a number ("200+ reviews" not "many reviews")
✓ Operating hours visible without requiring a click
✓ Phone number visible in navigation and footer
✓ Physical address clearly shown
✓ Social media links visible (implies active business)
✓ Imagery appears authentic and appetizing (not stock-photo generic)
✓ Menu prices visible (no mystery = lower hesitation)
✓ WhatsApp available (modern, immediate, trusted channel in India)
✓ Website loads quickly (slow loading = doubt about professionalism)`,
      },
    ],
  },

  prompt: {
    title: "Antigravity Master Prompt",
    subtitle: "Production-ready build instructions",
    isPrompt: true,
    body: `Build a complete, production-ready restaurant website for [RESTAURANT NAME] located in [CITY, STATE], India. This is a mobile-first, premium hospitality website. Follow every instruction below exactly.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BRAND IDENTITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Restaurant Name: [RESTAURANT NAME]
Location: [FULL ADDRESS, CITY, STATE]
Phone: [PHONE NUMBER WITH COUNTRY CODE]
WhatsApp: [WHATSAPP NUMBER — same or different]
Google Maps Link: [PASTE GOOGLE MAPS URL]
Instagram: [HANDLE]
Operating Hours: [e.g., "Mon–Sun: 11:00 AM – 11:00 PM"]
Established: [YEAR]
Cuisine Type: [e.g., "Family Restaurant · Bamboo-Themed Dining · North & South Indian Cuisine"]
Tagline: [e.g., "Where Nature Meets Flavor"]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COLOR SYSTEM — USE EXACTLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CSS Custom Properties (define in :root):

  --bg-primary:      #0D0B08;
  --bg-surface:      #1A1610;
  --bg-elevated:     #241E16;
  --accent-gold:     #C9A96E;
  --accent-gold-light: #E2C28A;
  --accent-muted:    #7A6240;
  --text-primary:    #F5F0E8;
  --text-secondary:  #B8A892;
  --text-tertiary:   #7A6E5E;
  --border-subtle:   rgba(201, 169, 110, 0.15);
  --border-default:  rgba(201, 169, 110, 0.30);
  --whatsapp-green:  #25D366;
  --overlay-dark:    rgba(13, 11, 8, 0.85);

NEVER use pure #000000 or #FFFFFF. All colors must derive from the above palette.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TYPOGRAPHY — USE EXACTLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Import from Google Fonts:
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600&display=swap');

CSS Variables:
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body:    'Inter', system-ui, sans-serif;

Type scale:
  --text-display-xl: clamp(38px, 6vw, 72px);
  --text-display-l:  clamp(30px, 4.5vw, 56px);
  --text-h1:         clamp(28px, 3.5vw, 48px);
  --text-h2:         clamp(22px, 2.8vw, 36px);
  --text-h3:         clamp(18px, 2vw, 24px);
  --text-h4:         18px;
  --text-body-lg:    clamp(16px, 1.5vw, 18px);
  --text-body:       clamp(15px, 1.3vw, 16px);
  --text-body-sm:    14px;
  --text-label:      12px;
  --text-price:      clamp(18px, 1.8vw, 20px);

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GLOBAL CSS RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: var(--text-body);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}
img { max-width: 100%; height: auto; display: block; object-fit: cover; }

Section spacing:
  padding: clamp(64px, 8vw, 120px) clamp(16px, 5vw, 80px);

Max content width: 1280px, centered with margin: 0 auto.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1 — NAVIGATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Structure: Fixed top, full-width, z-index: 1000.
Height: 72px desktop, 60px mobile.
Default state: background transparent.
Scrolled state (after 80px): background rgba(13,11,8,0.88), backdrop-filter: blur(16px) saturate(1.5), border-bottom: 1px solid var(--border-subtle). Transition: all 300ms ease.

Layout (desktop): Logo left → Nav links center → CTA button right.
  Logo: restaurant name in Playfair Display 500 20px var(--accent-gold).
  Nav links: Inter 500 14px letter-spacing 0.5px var(--text-secondary). Hover: var(--accent-gold) + underline grows left-to-right (scaleX 0→1 transform on ::after pseudo).
  Links: Home, Menu, About, Gallery, Contact.
  CTA: "Reserve a Table" button — background var(--accent-gold), color var(--bg-primary), border-radius 4px, padding 10px 22px, font Inter 600 14px. Hover: background var(--accent-gold-light), transform translateY(-1px).

Mobile nav:
  Logo left, hamburger menu icon right (3 horizontal lines, 24px, var(--text-primary)).
  On hamburger tap: full-screen overlay slides in from right (100vw × 100vh), background var(--bg-elevated), z-index 999.
  Overlay content: vertical nav links in Playfair Display 32px centered, "Reserve a Table" button, close (×) icon top right.
  Links animate in from right with 80ms stagger.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2 — HERO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Height: 100vh desktop, 90vh mobile (use min-height: -webkit-fill-available for iOS).
Position: relative, overflow: hidden.

Background: Full-cover image (food or interior — cinematic, not stock). Provide [HERO_IMAGE_URL].
Overlay: linear-gradient(160deg, rgba(13,11,8,0.15) 0%, rgba(13,11,8,0.85) 65%, rgba(13,11,8,0.95) 100%).

Content wrapper: absolute, centered vertically and horizontally (or left-aligned with left: clamp(16px, 8vw, 120px)).

Content stack (top to bottom):
  1. Eyebrow line:
     text: "[CITY] · Est. [YEAR] · [CUISINE TYPE]"
     font: Inter 500 11px, letter-spacing: 2.5px, ALL CAPS, color: var(--accent-gold), margin-bottom: 20px.
     Add a thin 1px gold horizontal line (24px wide) before the text.

  2. Restaurant name headline:
     tag: <h1>
     text: [RESTAURANT NAME] (may span two lines if long)
     font: Playfair Display 700, var(--text-display-xl), color: var(--text-primary), line-height: 1.05, letter-spacing: -1px.
     On mobile: center-aligned.

  3. Tagline:
     tag: <p>
     text: [TAGLINE]
     font: Playfair Display 400 italic, clamp(18px, 2vw, 24px), color: rgba(245,240,232,0.8), margin-top: 16px, margin-bottom: 40px.

  4. CTA group:
     Display: flex, gap: 16px.
     Mobile: flex-direction: column, each button 100% width.

     Button A — Primary:
       text: "Reserve a Table"
       style: background var(--accent-gold), color var(--bg-primary), padding 16px 36px, border-radius 4px, font Inter 600 15px letter-spacing 0.5px, border: none.
       hover: background var(--accent-gold-light), transform translateY(-2px), box-shadow: 0 12px 32px rgba(201,169,110,0.25).
       transition: all 250ms ease.
       link: anchor to #reserve or reservation form.

     Button B — Secondary:
       text: "View Full Menu →"
       style: background transparent, color var(--accent-gold), border: 1.5px solid var(--accent-gold), padding 15px 32px, border-radius 4px, font Inter 500 15px.
       hover: background rgba(201,169,110,0.08), transform translateY(-2px).
       link: anchor to #menu.

  5. Scroll cue:
     Centered at bottom of hero, position: absolute, bottom: 32px.
     Thin vertical line (1px, 40px tall) in var(--accent-gold), opacity 0.6.
     Animation: line fades in and out + slight translation, 2s infinite ease-in-out.
     Below it: "Scroll" in Inter 11px letter-spacing 2px var(--text-tertiary) uppercase.

Hero animation sequence (CSS keyframes, plays on load):
  .hero-eyebrow: animation-delay: 0.2s, fadeInUp 0.5s ease forwards.
  .hero-headline: animation-delay: 0.4s, fadeInUp 0.6s ease forwards.
  .hero-tagline: animation-delay: 0.6s, fadeInUp 0.5s ease forwards.
  .hero-cta: animation-delay: 0.8s, fadeInUp 0.5s ease forwards.
  Initial opacity: 0 for all. Transform translateY(20px) → translateY(0).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3 — BUSINESS VALUE STRIP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: var(--accent-gold). (This high-contrast break between hero and main content signals clarity.)
Padding: 20px clamp(16px, 5vw, 80px).

Layout: 4 tiles in a row on desktop. 2×2 grid on mobile.
Each tile: display flex, align-items center, gap 12px. Padding 12px 16px.
Dividers between tiles: 1px solid rgba(13,11,8,0.2) — vertical on desktop, none on mobile.

Tile 1:
  Icon: phone handset (SVG thin-line or Feather icon), 24px, color var(--bg-primary).
  Label: "Call Directly" — Inter 600 14px var(--bg-primary).
  Sub: [PHONE NUMBER] — Inter 400 13px rgba(13,11,8,0.7).
  Link: tel:[PHONE].

Tile 2:
  Icon: chat bubble / WhatsApp outline, 24px, var(--bg-primary).
  Label: "Message on WhatsApp" — Inter 600 14px var(--bg-primary).
  Sub: "Chat with us instantly" — Inter 400 13px rgba(13,11,8,0.7).
  Link: https://wa.me/[WHATSAPP]?text=Hi%2C%20I%27d%20like%20to%20make%20a%20reservation.

Tile 3:
  Icon: map pin outline, 24px, var(--bg-primary).
  Label: "Find Us" — Inter 600 14px var(--bg-primary).
  Sub: "[AREA, CITY]" — Inter 400 13px rgba(13,11,8,0.7).
  Link: [GOOGLE_MAPS_URL] — opens in new tab.

Tile 4:
  Icon: fork and knife / menu outline, 24px, var(--bg-primary).
  Label: "View Menu" — Inter 600 14px var(--bg-primary).
  Sub: "Full menu with prices" — Inter 400 13px rgba(13,11,8,0.7).
  Link: anchor to #menu.

Hover each tile: background rgba(13,11,8,0.08), transition 200ms.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4 — SIGNATURE DISHES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

id="dishes", background: var(--bg-primary).

Section header (centered):
  Eyebrow: "SIGNATURE DISHES" — Inter 500 11px letter-spacing 2.5px var(--accent-gold) uppercase.
  Headline: "From Our Kitchen" — Playfair Display 700 var(--text-h1) var(--text-primary), margin-top 12px.
  Sub: "Crafted with tradition, served with pride." — Inter 400 17px var(--text-secondary), margin-top 12px, max-width 480px, centered.
  Header margin-bottom: 56px.

Cards grid:
  Desktop: CSS grid, 3 columns, gap 28px.
  Mobile: horizontal scroll container, display flex, gap 20px, overflow-x scroll, scroll-snap-type x mandatory, -webkit-overflow-scrolling touch, padding-bottom 16px.
  Card mobile width: 80vw, flex-shrink: 0, scroll-snap-align: start.

Each dish card:
  Container: background var(--bg-surface), border-radius 8px, overflow hidden, border: 1px solid var(--border-subtle). transition: all 350ms ease.
  Hover: border-color var(--border-default), transform translateY(-4px), box-shadow: 0 20px 40px rgba(0,0,0,0.4).

  Image area: height 240px desktop / 200px mobile, width 100%, img with object-fit cover.
  Optional badge (top-left on image): absolute, "Chef's Pick" or "Must Try" — Inter 600 10px ALL CAPS, background var(--accent-gold), color var(--bg-primary), padding 4px 10px, border-radius 2px.

  Content area: padding 24px.
    — Veg indicator: circle dot (10px, border-radius 50%) green #4A8C6A or red #9C3D2E, inline-block, margin-right 8px.
    — Dish name: Playfair Display 700 var(--text-h3) var(--text-primary), line-height 1.2.
    — Description: Inter 400 14px var(--text-secondary), margin-top 8px, line-height 1.6.
    — Price: Inter 600 var(--text-price) var(--accent-gold), margin-top 16px. Format: "₹ [AMOUNT]".

Add dishes: [LIST 4–6 DISH NAMES, DESCRIPTIONS, PRICES, IMAGE URLS].

Final element after cards:
  Centered link: "Explore Our Full Menu →" — Inter 600 15px var(--accent-gold), text-decoration none, letter-spacing 0.5px.
  On hover: letter-spacing increases slightly (0.8px), transition 200ms.

Scroll-reveal: Each card reveals on viewport entry — opacity 0 → 1, translateY(24px) → 0, 500ms ease, stagger 100ms.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5 — BRAND STORY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

id="about", background: var(--bg-surface).

Desktop layout: CSS grid, 2 columns (55% text + 45% image), gap 80px, align-items center.
Mobile layout: Image stacked first (full width, 300px height), text below.

Text column:
  Eyebrow: "OUR STORY" — Inter 500 11px letter-spacing 2.5px var(--accent-gold) uppercase.
  Headline: Playfair Display 700 var(--text-h1) var(--text-primary), margin-top 12px.
    Use: "[Something emotionally evocative about the restaurant's heritage]"
  Body: 3 paragraphs, Inter 400 var(--text-body-lg) var(--text-secondary), line-height 1.75, max-width 560px.
    Para 1: [Origin story — founding year, family, city, initial vision]
    Para 2: [Philosophy — ingredients, cooking style, what makes it unique]
    Para 3: [Hospitality commitment — how guests feel, community role]
  
  Pull quote:
    Style: Playfair Display 400 italic, 22px, var(--accent-gold), margin: 32px 0.
    Border-left: 3px solid var(--accent-gold), padding-left: 24px.
    Text: "[One-sentence poetic quote about food, family, or hospitality]"

Image column:
  Single image, border-radius 6px, overflow hidden.
  Aspect ratio: 3:4 (portrait) on desktop.
  Full-width on mobile, height 280px, object-position center.
  Image: [STORY_IMAGE_URL] — chef, kitchen detail, or ingredient close-up.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 6 — EXPERIENCE / AMBIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

id="experience", background: var(--bg-primary).

Section header (centered, margin-bottom 56px):
  Headline: Playfair Display 400 italic var(--text-display-l) var(--text-primary) — "Step Inside"
  Sub: Inter 400 17px var(--text-secondary) — "A space designed for unforgettable moments."

Image layout (desktop): Asymmetric grid —
  Row 1: 1 large wide image (60% width) + 1 portrait image (40% width), height 420px.
  Row 2: 2 equal images side by side, height 280px. Gap 12px between all.
  Each image: border-radius 4px, overflow hidden.

Image layout (mobile): Vertical stack, each image full-width.
  Height alternates: 260px / 200px / 260px / 200px.

Caption overlays (on each image):
  Absolute bottom-left: padding 16px.
  Text: Inter 500 11px letter-spacing 2px var(--accent-gold) uppercase.
  Background: linear-gradient(0deg, rgba(13,11,8,0.7) 0%, transparent 100%).
  Labels: "Garden Seating" / "Private Dining" / "Open Kitchen" / "Family Tables" (adapt to restaurant).

Hover each image: filter brightness(1.0) → brightness(1.08), transition 300ms.

Images: [AMBIENCE_IMAGE_1], [AMBIENCE_IMAGE_2], [AMBIENCE_IMAGE_3], [AMBIENCE_IMAGE_4].

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 7 — MENU PREVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

id="menu", background: var(--bg-surface).

Section header (centered, margin-bottom 48px):
  Eyebrow: "OUR MENU" — standard eyebrow style.
  Headline: "A Menu Worth Savoring" — Playfair Display 700 var(--text-h1).
  Sub: "Fresh ingredients. Time-honored recipes. Served with love." — Inter secondary, 16px.

Category tabs (desktop):
  Horizontal row of tab buttons.
  Each tab: Inter 500 13px letter-spacing 1.5px uppercase, color var(--text-secondary).
  Active: color var(--accent-gold), border-bottom: 2px solid var(--accent-gold).
  Inactive hover: color var(--text-primary).
  Tab change: fade in/out active panel, 200ms.

Accordion (mobile):
  Each category is an accordion row.
  Header: Inter 600 15px var(--text-primary), padding 16px 0, border-bottom var(--border-subtle).
  Expand icon: + / ×, var(--accent-gold).
  Only one open at a time.
  Expand animation: max-height transition, 300ms ease.

Each menu item row:
  Display: flex, justify-content: space-between, align-items: flex-start.
  Padding: 14px 0. Border-bottom: 1px dashed var(--border-subtle).

  Left side:
    — Veg dot (10px circle) + Dish name: Inter 500 15px var(--text-primary).
    — Description: Inter 400 13px var(--text-tertiary), margin-top 4px.

  Right side:
    — Price: Inter 600 var(--text-price) var(--accent-gold), white-space nowrap.

Show 5–6 items per category.

Categories and items: [INSERT MENU DATA HERE — category name, items with name/description/price/veg status]

Footer of section:
  Centered: "View the Complete Menu" — gold outline button or gold text link.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 8 — RESERVATION / CTA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

id="reserve", background: var(--bg-elevated) OR dark image with overlay.

If using background image: [CTA_BG_IMAGE_URL] with overlay rgba(13,11,8,0.88).
Content: centered, max-width 720px, margin 0 auto.

Eyebrow: "READY TO VISIT?" — standard.
Headline: Playfair Display 700 var(--text-h1) — "Join Us for an Unforgettable Meal"
Sub: Inter 400 17px var(--text-secondary) — "Book a table, order online, or simply stop by. We're ready for you."
Margin-bottom before buttons: 48px.

Button group: flex, justify-content center, gap 16px, flex-wrap wrap.
Mobile: flex-direction column, each button 100% width, max-width 360px, centered.

Button 1 — Reserve:
  "Reserve a Table"
  style: background var(--accent-gold), color var(--bg-primary), padding 18px 40px, border-radius 4px, Inter 600 15px, letter-spacing 0.5px.
  hover: background var(--accent-gold-light), transform translateY(-2px).

Button 2 — WhatsApp:
  "Message on WhatsApp"
  style: background #25D366, color #FFFFFF, padding 18px 40px, border-radius 4px, Inter 600 15px.
  Prepend WhatsApp logo SVG (16px, white) with 8px margin-right.
  hover: filter brightness(1.1), transform translateY(-2px).

Button 3 — Call:
  "Call: [PHONE NUMBER]"
  style: background transparent, color var(--accent-gold), border: 1.5px solid var(--accent-gold), padding 17px 32px, border-radius 4px, Inter 500 15px.
  hover: background rgba(201,169,110,0.08).
  link: tel:[PHONE].

Below buttons: margin-top 32px.
  Hours line: Inter 500 14px var(--text-secondary) — "Open [DAYS] · [TIME RANGE]"
  Small map pin icon + "Find us at [SHORT ADDRESS]" — Inter 400 14px var(--text-tertiary), link to Google Maps.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 9 — REVIEWS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

id="reviews", background: var(--bg-primary).

Section header (centered, margin-bottom 48px):
  Eyebrow: "WHAT OUR GUESTS SAY"
  Star row: 5 stars (★) in var(--accent-gold), font-size 28px, displayed as row, centered.
  Headline: Playfair Display 700 var(--text-h2) — "4.8 Stars · 200+ Happy Guests" (update with real numbers).
  Sub: Inter 400 16px var(--text-secondary) — "Rated on Google by people who love great food."

Review cards grid:
  Desktop: 3-column CSS grid, gap 24px.
  Mobile: horizontal scroll (same snap-scroll approach as dishes), 85vw card width.

Each review card:
  Background: var(--bg-surface), border: 1px solid var(--border-subtle), border-radius 8px, padding 28px.

  Decorative quote mark: Playfair Display 400, 72px, var(--accent-gold) opacity 0.25, line-height 0.8, margin-bottom -8px.
  Review text: Playfair Display 400 italic, 15px, var(--text-secondary), line-height 1.75, display -webkit-box, -webkit-line-clamp 4, overflow hidden.
  
  Divider: 1px var(--border-subtle), margin 20px 0.

  Reviewer row:
    — Initials avatar: 36×36px circle, background var(--accent-muted), color var(--text-primary), Inter 600 13px, centered.
    — Name: Inter 600 14px var(--text-primary).
    — Row of 5 small stars: font-size 12px var(--accent-gold).
    — "Verified Google Review" tag: Inter 400 11px var(--text-tertiary), with small colored-G icon (24×24px SVG).
    — Date: Inter 400 11px var(--text-tertiary).

Reviews data: [INSERT 3–4 REAL REVIEWS — reviewer name, review text, date]

Below cards: Centered link — "Read all [N]+ reviews on Google →" — Inter 600 14px var(--accent-gold).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 10 — GALLERY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

id="gallery", background: var(--bg-elevated).

Section header (centered, margin-bottom 48px):
  Eyebrow: "OUR GALLERY"
  Headline: Playfair Display 700 var(--text-h1) — "A Feast for the Eyes"

Desktop grid layout (editorial masonry):
  CSS grid: grid-template-columns: repeat(3, 1fr), grid-auto-rows: 200px, grid-auto-flow: dense, gap: 12px.
  Large images: grid-column span 2 OR grid-row span 2 for variety.
  Apply class .wide (span 2 cols) or .tall (span 2 rows) to 2 of the 6 images for visual dynamism.

Mobile grid:
  2-column grid. gap 8px. All images uniform height 160px.

Each image item:
  overflow hidden, border-radius 4px, cursor pointer.
  img: width 100%, height 100%, object-fit cover, transition transform 400ms ease.
  Hover: img transform scale(1.06). Add gold border overlay via ::after pseudo element (position absolute, inset 0, border 1.5px solid var(--accent-gold), opacity 0 → 0.6, transition 300ms).

Lightbox:
  On click: fullscreen overlay, background rgba(13,11,8,0.95), z-index 9999.
  Image centered, max-height 85vh, max-width 90vw, border-radius 4px.
  Prev/Next arrow buttons: left and right edges, 48px targets, Inter.
  Close button: top-right ×, 32px.
  Mobile: swipe left/right to navigate (touch events).
  Transition: overlay fades in 250ms, image scales in from 0.94 → 1.

Gallery images: [GALLERY_IMAGE_1 through GALLERY_IMAGE_6 — mix of food, interior, and detail shots]

Below gallery: Centered — "Follow us on Instagram @[HANDLE] →" — Inter 600 14px var(--accent-gold).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 11 — LOCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

id="contact", background: var(--bg-surface).

Desktop layout: 2-column grid (48% info + 52% map), gap 60px, align-items start.
Mobile: info block first (full width), then map below (full width, height 300px).

Info column:
  Eyebrow: "FIND US"
  Headline: Playfair Display 700 var(--text-h2) — "[Restaurant Name]"
  Margin-bottom: 32px.

  Contact rows (each: icon + label):
    Icon style: thin-line SVG, 20px, var(--accent-gold).
    Label: Inter 400 15px var(--text-primary). Sub-label: var(--text-secondary) 13px.

    — Map pin icon: "[FULL ADDRESS]"
    — Phone icon: "[PHONE]" — link tel:
    — Chat icon: "WhatsApp: [NUMBER]" — link wa.me/
    — Clock icon: "[OPERATING HOURS — all days/times]"

  Landmark note: Inter 400 13px var(--text-tertiary) italic — "Near [LANDMARK] · [NEIGHBORHOOD]"
  Parking note if applicable.

  Directions button: margin-top 32px.
    "Get Directions on Google Maps →"
    style: outline gold button, full-width on mobile, auto width on desktop.
    href: [GOOGLE_MAPS_URL], target="_blank".

Map column:
  Embedded Google Map iframe.
  src: https://maps.google.com/maps?q=[ENCODED_ADDRESS]&output=embed
  width: 100%, height: 420px desktop / 280px mobile.
  border: none. border-radius: 8px. overflow: hidden.
  Wrapper: border-radius 8px, overflow hidden, border: 1px solid var(--border-subtle).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 12 — FOOTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: #080604 (darkest possible while still warm-tinted, not pure black).
Border-top: 1px solid var(--border-subtle).
Padding: 64px clamp(16px, 5vw, 80px) 32px.

Desktop: 3-column grid, gap 60px.
Mobile: single column, items stacked, gap 40px.

Column 1 — Brand:
  Restaurant name: Playfair Display 700 20px var(--accent-gold).
  Tagline/description: Inter 400 14px var(--text-tertiary), margin-top 12px, max-width 260px.
  Social icons row: margin-top 24px, gap 16px.
    Icons: Instagram, Facebook, Google. Each 22px, var(--text-secondary). Hover: var(--accent-gold).
    Link to actual social pages.

Column 2 — Quick Links:
  Heading: "Quick Links" — Inter 600 12px letter-spacing 1.5px var(--text-tertiary) uppercase.
  Links: Home, Menu, About, Gallery, Contact, Reserve a Table.
  Style: Inter 400 14px var(--text-secondary), display block, padding 6px 0, hover var(--accent-gold) transition 200ms.

Column 3 — Contact:
  Heading: "Get in Touch" — same as Column 2 heading style.
  Items (each with icon + text):
    — Phone: [PHONE]
    — WhatsApp: [NUMBER]
    — Address: [SHORT ADDRESS]
    — Hours: [HOURS SUMMARY]
  Style: Inter 400 14px var(--text-secondary). Icon: 14px var(--accent-muted).

Bottom bar:
  Margin-top: 48px. Border-top: 1px solid var(--border-subtle). Padding-top: 24px.
  Display flex, justify-content space-between, align-items center. Mobile: column, center-aligned.

  Left: "© [YEAR] [RESTAURANT NAME]. All rights reserved." — Inter 400 12px var(--text-tertiary).
  Right: "Crafted by [YOUR AGENCY]" — Inter 400 12px var(--text-tertiary), link to agency. Hover: var(--accent-gold).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FLOATING MOBILE CTA BAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Display: none on desktop. Visible on mobile only (max-width: 768px).
Position: fixed, bottom 0, left 0, right 0, z-index 998.
Height: 56px.
Background: rgba(13,11,8,0.92), backdrop-filter blur(16px).
Border-top: 1px solid var(--border-subtle).

Layout: 2 equal buttons side by side.

Left button:
  Icon: phone SVG (24px, var(--text-primary)) + "Call" text below (Inter 500 10px var(--text-secondary)).
  Background: transparent.
  href: tel:[PHONE].

Divider: 1px vertical var(--border-subtle).

Right button:
  WhatsApp icon (24px, #25D366) + "WhatsApp" text below (Inter 500 10px var(--text-secondary)).
  Background: transparent.
  href: https://wa.me/[WHATSAPP]?text=Hi%2C%20I%27d%20like%20to%20know%20more.

Tap active state: background rgba(201,169,110,0.1).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SCROLL REVEAL JAVASCRIPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Use Intersection Observer API. No external animation library.

Add class "reveal" to all section headings, paragraphs, cards, buttons, and images below the fold.

Initial CSS for .reveal:
  opacity: 0; transform: translateY(24px); transition: opacity 500ms ease, transform 500ms ease;

On intersection (threshold 0.15):
  Add class "revealed": opacity: 1; transform: translateY(0);

For sibling card groups, apply staggered delays using nth-child:
  .reveal:nth-child(1) { transition-delay: 0ms; }
  .reveal:nth-child(2) { transition-delay: 80ms; }
  .reveal:nth-child(3) { transition-delay: 160ms; }

Respect prefers-reduced-motion:
  @media (prefers-reduced-motion: reduce) { .reveal { opacity: 1; transform: none; transition: none; } }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PERFORMANCE REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

— All images: lazy loading (loading="lazy") except hero image (eager).
— Hero image: preloaded via <link rel="preload">.
— Google Fonts: preconnected via <link rel="preconnect">.
— No jQuery. No Bootstrap. No large frameworks.
— Vanilla JS only for interactions.
— CSS compiled from custom properties. No utility class bloat.
— Target: Lighthouse score 90+ on mobile.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILE DELIVERY CHECKLIST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Deliver:
  ✓ index.html — complete, semantic, accessible HTML
  ✓ styles.css — organized with CSS custom properties, mobile-first media queries
  ✓ main.js — nav scroll behavior, mobile menu, scroll reveal, lightbox, accordion
  ✓ All images in /images/ folder (WebP format preferred)
  ✓ favicon.ico or favicon.svg

HTML must include:
  ✓ <meta charset="UTF-8">
  ✓ <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ✓ <meta name="description" content="[Restaurant description for SEO]">
  ✓ <meta property="og:title">, og:description, og:image (social sharing)
  ✓ <title>[Restaurant Name] — [Tagline] | [City]</title>
  ✓ Semantic HTML5 elements: <header>, <nav>, <main>, <section>, <article>, <footer>
  ✓ Alt text on all images
  ✓ ARIA labels on icon-only buttons
  ✓ Skip-to-content link for accessibility

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
VARIABLES TO REPLACE BEFORE GENERATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Replace all bracketed placeholders with real data before building:

[RESTAURANT NAME]
[FULL ADDRESS, CITY, STATE]
[PHONE NUMBER WITH COUNTRY CODE]
[WHATSAPP NUMBER]
[GOOGLE_MAPS_URL]
[INSTAGRAM HANDLE]
[OPERATING HOURS]
[YEAR] (established year)
[CUISINE TYPE]
[TAGLINE]
[HERO_IMAGE_URL]
[STORY_IMAGE_URL]
[AMBIENCE_IMAGE_1–4]
[GALLERY_IMAGE_1–6]
[CTA_BG_IMAGE_URL]
[DISH DATA — name, description, price, image URL, veg/non-veg]
[MENU DATA — categories and items]
[REVIEW DATA — reviewer names, review texts, dates]
[GOOGLE REVIEW COUNT AND RATING]
[YOUR AGENCY NAME AND URL]`,
  },
};

export default function App() {
  const [active, setActive] = useState("concept");
  const [copied, setCopied] = useState(false);

  const current = content[active];

  const handleCopy = () => {
    const text = content.prompt.body;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "system-ui, sans-serif", background: "#0D0B08", color: "#F5F0E8" }}>
      {/* Sidebar */}
      <div style={{
        width: "240px", flexShrink: 0, background: "#1A1610",
        borderRight: "1px solid rgba(201,169,110,0.15)",
        display: "flex", flexDirection: "column", padding: "24px 0"
      }}>
        <div style={{ padding: "0 20px 24px", borderBottom: "1px solid rgba(201,169,110,0.15)" }}>
          <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#C9A96E", fontWeight: 600, textTransform: "uppercase", marginBottom: "6px" }}>Antigravity</div>
          <div style={{ fontSize: "15px", fontWeight: 600, color: "#F5F0E8" }}>Restaurant Master Prompt</div>
          <div style={{ fontSize: "12px", color: "#7A6E5E", marginTop: "4px" }}>Premium · Mobile-First · Conversion-Ready</div>
        </div>
        <nav style={{ flex: 1, padding: "16px 0", overflowY: "auto" }}>
          {sections.map(s => (
            <button key={s.id} onClick={() => setActive(s.id)} style={{
              display: "block", width: "100%", textAlign: "left",
              padding: "10px 20px", background: active === s.id ? "rgba(201,169,110,0.1)" : "transparent",
              border: "none", borderLeft: active === s.id ? "2px solid #C9A96E" : "2px solid transparent",
              color: active === s.id ? "#C9A96E" : "#B8A892",
              fontSize: "13px", fontWeight: active === s.id ? 600 : 400,
              cursor: "pointer", transition: "all 200ms ease", lineHeight: 1.4
            }}>
              {s.label}
            </button>
          ))}
        </nav>
        <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(201,169,110,0.15)", fontSize: "11px", color: "#7A6E5E" }}>
          Built for restaurant cold outreach. Adapt for any dining client.
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, overflowY: "auto", padding: "40px 48px" }}>
        <div style={{ maxWidth: "840px" }}>
          {/* Header */}
          <div style={{ marginBottom: "40px", paddingBottom: "28px", borderBottom: "1px solid rgba(201,169,110,0.2)" }}>
            <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#C9A96E", fontWeight: 600, textTransform: "uppercase", marginBottom: "8px" }}>
              {sections.find(s => s.id === active)?.label}
            </div>
            <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#F5F0E8", lineHeight: 1.2, marginBottom: "8px", fontFamily: "Georgia, serif" }}>
              {current.title}
            </h1>
            <p style={{ fontSize: "16px", color: "#B8A892", fontStyle: "italic" }}>{current.subtitle}</p>
          </div>

          {/* Prompt section */}
          {current.isPrompt ? (
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                <div style={{ fontSize: "14px", color: "#B8A892" }}>
                  Production-ready. Replace all <span style={{ color: "#C9A96E", fontFamily: "monospace", background: "rgba(201,169,110,0.1)", padding: "2px 6px", borderRadius: "3px" }}>[BRACKETED]</span> fields before building.
                </div>
                <button onClick={handleCopy} style={{
                  background: copied ? "rgba(74,140,106,0.2)" : "rgba(201,169,110,0.15)",
                  border: `1px solid ${copied ? "rgba(74,140,106,0.4)" : "rgba(201,169,110,0.3)"}`,
                  color: copied ? "#4A8C6A" : "#C9A96E",
                  padding: "8px 18px", borderRadius: "4px", fontSize: "13px",
                  fontWeight: 600, cursor: "pointer", transition: "all 200ms ease",
                  flexShrink: 0, marginLeft: "16px"
                }}>
                  {copied ? "✓ Copied" : "Copy Prompt"}
                </button>
              </div>
              <pre style={{
                background: "#241E16", border: "1px solid rgba(201,169,110,0.2)",
                borderRadius: "6px", padding: "28px", fontSize: "12.5px",
                lineHeight: 1.7, color: "#D4C8B8", overflow: "auto",
                whiteSpace: "pre-wrap", wordBreak: "break-word",
                fontFamily: "ui-monospace, 'Cascadia Code', Menlo, monospace",
                maxHeight: "none"
              }}>
                {current.body}
              </pre>
            </div>
          ) : (
            /* Document sections */
            <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
              {current.body.map((block, i) => (
                <div key={i} style={{
                  background: "#1A1610", border: "1px solid rgba(201,169,110,0.12)",
                  borderRadius: "6px", padding: "28px 32px"
                }}>
                  <h3 style={{
                    fontSize: "13px", fontWeight: 600, letterSpacing: "1.5px",
                    textTransform: "uppercase", color: "#C9A96E", marginBottom: "16px"
                  }}>
                    {block.heading}
                  </h3>
                  <pre style={{
                    fontFamily: "ui-monospace, 'Cascadia Code', Menlo, monospace",
                    fontSize: "13px", lineHeight: 1.75, color: "#D4C8B8",
                    whiteSpace: "pre-wrap", wordBreak: "break-word", margin: 0
                  }}>
                    {block.text}
                  </pre>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
