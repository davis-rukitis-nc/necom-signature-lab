# NECom Email Signature Lab

A static one-page app for building NECom and event-branded Gmail-ready email signatures.

## Deploy on Cloudflare Pages

Use these settings:

```text
Framework preset: None
Build command: leave empty
Build output directory: public
```

## Deploy as Cloudflare Workers Static Assets

The included `wrangler.toml` points Workers to the static output:

```toml
assets = { directory = "./public" }
```

## Files

```text
public/
  index.html
  styles.css
  app.js
  favicon.svg
  _headers
wrangler.toml
package.json
README.md
```

## Features

- v10 onboarding: cleaner guided product tour copy, no confusing black “Press” badges, softer highlight card styling, and the same real-interface targeting in EN/LV.
- v9 onboarding: guided product tour that highlights the real buttons, tabs, preview controls and copy actions in EN/LV.
- v8 onboarding: first-visit intro overlay with EN/LV guide, reusable help button, and a shadow/glow explainer card.
- v7 UI polish: pill title, vertically centered editor on desktop, wider editor panel, responsive centered preview.
- Contact layout switch: stacked T/E/W rows for mobile-safe signatures, or one-line compact contacts for desktop/thread use.
- Presets default to minimal logo variants where available.
- Wider editor panel and vertically centered desktop workspace.

- Clean NECom header using the light logo and remote PNG favicon.
- English default with Latvian language switch.
- Logo/color brand picker for NECom and event presets.
- Custom brand option.
- Custom dropdowns for design, logo version, info length, and banner placement.
- Left border and top border signature styles only.
- Controlled brand-color palette plus an in-app RGB/HEX custom color picker.
- Separate website link color control for accessibility.
- Editable person, contact, website, logo, info text, and banner fields.
- Modular signature rows.
- Full / Compact / Minimal row presets.
- Optional full-width banner image with position and spacer controls.
- Desktop/mobile preview switch on the right.
- Responsive preview panel that grows with the email content.
- Gmail-style email preview with random EN/LV placeholder emails and proper avatar/sender metadata.
- Copy rendered signature for Gmail.
- Copy raw HTML.
- Table-based inline signature HTML for better Gmail/email-client safety.

## Notes

The guided tour is shown once per browser and can be reopened with the ? button in the header.

The generated signature avoids external CSS and JavaScript. It uses table layout, inline CSS, controlled image widths, a fluid max-width container, a fixed right logo cell, and an optional stacked contact layout to keep the signature readable in desktop Gmail, mobile Gmail, and common email clients.
