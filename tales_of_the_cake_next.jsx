/*
Tales of the Cake - Next.js + Tailwind single-file starter
Place this file as `app/page.jsx` (Next.js 13+ App Router) or `pages/index.jsx` for Pages Router.
Requires: Tailwind CSS configured. Replace placeholder images and text with actual photos/content.

Features included:
- Hero with CTA
- Product grid with hover cards
- About / Our Story section
- Gallery (lightbox-ready hooks commented)
- Custom Orders form (mailto fallback) + WhatsApp quick-order link
- Testimonials carousel (simple)
- Footer with contact & social links

How to use:
1. Create Next.js app: `npx create-next-app@latest --experimental-app`
2. Install Tailwind and configure (https://tailwindcss.com/docs/guides/nextjs)
3. Drop this file in `app/page.jsx` (or `pages/index.jsx`) and run `npm run dev`.
4. Replace images (unsplash links) with your own `public/` images for best branding.

Design notes:
- Uses Tailwind utility classes for layout, spacing, and colors.
- Color tokens use a warm-pastel palette inspired by bakery themes.
- Use "Dancing Script" (for headings) + "Poppins" (for body). Add to root html or via Google Fonts.
*/

import React from 'react'

/*
ADDITIONAL ASSETS & DEPLOYMENT
Below this file (in the canvas) you'll find:
1) package.json (ready)
2) tailwind.config.js + postcss.config.js
3) globals.css (with Tailwind imports)
4) README with Vercel deployment steps
5) logo.svg (SVG file you can copy to /public/logo.svg)
6) color-palette.md (recommended color tokens and usage)

Replace `YOURNUMBER` and contact details in the code above with real values before deploying.
*/



const PRODUCTS = [
  { id: 1, name: 'Vanilla Story Cake', price: '₹1,200', desc: 'Light sponge, vanilla buttercream, edible flowers', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=60' },
  { id: 2, name: 'Chocolate Chronicle', price: '₹1,500', desc: 'Rich chocolate ganache, berry compote', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=60' },
  { id: 3, name: 'Almond Biscotti', price: '₹250', desc: 'Crunchy, nutty, perfect with tea', img: 'https://images.unsplash.com/photo-1606756791553-3c8b6f1b2a2f?auto=format&fit=crop&w=800&q=60' },
  { id: 4, name: 'Lemon Zest Cookies', price: '₹200', desc: 'Zingy lemon, melt-in-mouth', img: 'https://images.unsplash.com/photo-1562440499-64e3a44aa3b2?auto=format&fit=crop&w=800&q=60' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-cream-50 to-white font-poppins text-gray-800">
      <Header />
      <Hero />
      <section className="max-w-7xl mx-auto px-6 py-14">
        <Intro />
        <Products />
      </section>
      <section className="bg-white/60 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <About />
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <Gallery />
      </section>
      <section className="bg-amber-50/60 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Testimonials />
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <CustomOrder />
      </section>
      <Footer />
    </main>
  )
}

function Header(){
  return (
    <header className="backdrop-blur-sm sticky top-0 z-50 bg-white/60 border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to-amber-300 flex items-center justify-center shadow-md">
            <span className="text-white font-dancing text-lg">T</span>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Tales of the Cake</h1>
            <p className="text-xs text-gray-500">Every cake tells a story</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#products" className="hover:underline">Products</a>
          <a href="#about" className="hover:underline">Our Story</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#order" className="rounded-md px-4 py-2 bg-pink-300 text-white font-medium">Order Now</a>
        </nav>
      </div>
    </header>
  )
}

function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-dancing mb-4">Every Cake<br/>Tells a Story</h2>
          <p className="text-lg text-gray-600 mb-6">Handcrafted cakes, biscuits and pastries — baked with love and a pinch of magic. Custom orders available for birthdays, weddings and celebrations.</p>
          <div className="flex gap-4">
            <a href="#products" className="px-5 py-3 bg-pink-300 rounded-md text-white font-medium shadow">Explore Products</a>
            <a href="#order" className="px-5 py-3 border rounded-md text-gray-700">Custom Orders</a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2 5a2 2 0 012-2h3.5a.5.5 0 01.5.5V5H4a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1h-4V3.5a.5.5 0 01.5-.5H16a2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V5z"/></svg>
              <span>Freshly baked daily</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a6 6 0 016 6v3a5 5 0 01-5 5H9a5 5 0 01-5-5V8a6 6 0 016-6z"/></svg>
              <span>Custom designs</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition">
            <img src="https://images.unsplash.com/photo-1542826438-6b37ff7d5d3b?auto=format&fit=crop&w=1000&q=60" alt="cakes" className="w-full h-96 object-cover"/>
          </div>
          <div className="absolute -bottom-6 left-6 grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1603133872870-4f2c45e7a9c6?auto=format&fit=crop&w=400&q=60" className="w-44 h-28 rounded-lg object-cover shadow"/>
            <img src="https://images.unsplash.com/photo-1551024709-8f23befc6c3e?auto=format&fit=crop&w=400&q=60" className="w-44 h-28 rounded-lg object-cover shadow"/>
          </div>
        </div>
      </div>
    </section>
  )
}

function Intro(){
  return (
    <div className="text-center max-w-3xl mx-auto mb-10">
      <h3 className="text-2xl font-semibold">Fresh. Handcrafted. Memorable.</h3>
      <p className="text-gray-600 mt-3">At Tales of the Cake, every item is baked with premium ingredients and a story behind it. We love celebrations, personal touches, and creating joyful moments.</p>
    </div>
  )
}

function Products(){
  return (
    <section id="products">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-xl font-semibold">Popular Picks</h4>
        <a href="#gallery" className="text-sm text-pink-500">View full menu</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCTS.map(p => (
          <div key={p.id} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="h-48 overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover"/>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h5 className="font-semibold">{p.name}</h5>
                  <p className="text-xs text-gray-500 mt-1">{p.desc}</p>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{p.price}</div>
                  <a href={`https://wa.me/91YOURNUMBER?text=Hi%20I%20want%20to%20order%20${encodeURIComponent(p.name)}`} className="block mt-2 text-xs text-pink-500">Quick order</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function About(){
  return (
    <div id="about" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h4 className="text-2xl font-semibold mb-4">Our Story</h4>
        <p className="text-gray-600 mb-4">Started in a small kitchen with a big dream, "Tales of the Cake" crafts personal and memorable treats. Every recipe is tested, every design is planned with care, and every customer becomes part of our story.</p>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>• Fresh ingredients sourced locally</li>
          <li>• Custom designs for events & parties</li>
          <li>• Delivery & pick-up available</li>
        </ul>
      </div>
      <div className="rounded-2xl overflow-hidden shadow">
        <img src="https://images.unsplash.com/photo-1514512364185-2b63a7c1f1c2?auto=format&fit=crop&w=900&q=60" alt="bakery" className="w-full h-72 object-cover"/>
      </div>
    </div>
  )
}

function Gallery(){
  const photos = [
    'https://images.unsplash.com/photo-1505253212956-7aef3b8d4f67?auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1551022370-6f1b6c51f8f6?auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1542834369-f10ebf06d3cb?auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1547898524-6e8c8db0f3f5?auto=format&fit=crop&w=900&q=60'
  ]

  return (
    <div id="gallery">
      <h4 className="text-xl font-semibold mb-6">Gallery</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((src,i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow">
            <img src={src} className="w-full h-40 object-cover"/>
          </div>
        ))}
      </div>
    </div>
  )
}

function Testimonials(){
  const items = [
    { name: 'Pooja', text: 'Best cake for my daughter\'s birthday — moist & beautiful!' },
    { name: 'Ravi', text: 'Custom design was perfect. Everyone loved it.' },
    { name: 'Sana', text: 'Fresh biscuits, amazing packaging.' },
  ]
  return (
    <div>
      <h4 className="text-xl font-semibold mb-6">Love from customers</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((t,i) => (
          <div key={i} className="bg-white rounded-xl p-6 shadow">
            <p className="text-gray-700">“{t.text}”</p>
            <div className="mt-4 text-sm font-medium">— {t.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CustomOrder(){
  return (
    <div id="order" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h4 className="text-2xl font-semibold mb-3">Custom Orders & Events</h4>
        <p className="text-gray-600 mb-4">Tell us your idea and we will bring it to life. Fill the form or message us on WhatsApp for a quick response.</p>

        <div className="space-y-3">
          <a href={`https://wa.me/91YOURNUMBER?text=${encodeURIComponent('Hi! I want to place a custom order for a cake.')}`} className="inline-block px-4 py-2 bg-green-400 rounded-md text-white">Message on WhatsApp</a>
          <a href={`mailto:yourbakery@example.com?subject=${encodeURIComponent('Custom Cake Inquiry')}&body=${encodeURIComponent('Hi, I would like to inquire about a custom cake for...')}`} className="inline-block ml-2 px-4 py-2 border rounded-md">Email us</a>
        </div>
      </div>
      <form className="bg-white rounded-xl p-6 shadow">
        <div className="grid grid-cols-1 gap-3">
          <input className="border rounded-md p-3" placeholder="Your name" />
          <input className="border rounded-md p-3" placeholder="Phone or WhatsApp" />
          <input className="border rounded-md p-3" placeholder="Event date" />
          <textarea className="border rounded-md p-3" placeholder="Tell us your idea (flavor, size, theme)" rows={4}></textarea>
          <div className="flex items-center gap-3">
            <button type="button" className="px-4 py-2 bg-pink-300 text-white rounded-md">Send Inquiry</button>
            <small className="text-xs text-gray-500">We will reply within 24 hours</small>
          </div>
        </div>
      </form>
    </div>
  )
}

function Footer(){
  return (
    <footer className="mt-12 border-t bg-white/60">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h5 className="font-semibold">Tales of the Cake</h5>
          <p className="text-sm text-gray-600">Made with ❤️. Pickup & delivery across town.</p>
        </div>
        <div className="text-sm text-gray-600">Contact: <a href="tel:+91YOURNUMBER" className="text-pink-500">+91 YOURNUMBER</a> • <a href="#" className="ml-3 text-pink-500">Instagram</a></div>
      </div>
    </footer>
  )
}

/*
Tailwind config tip (extend colors):
module.exports = {
  theme: {
    extend: {
      colors: {
        'pink-300': '#ff9fb1',
        'cream-50': '#fff9f2',
      },
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
    }
  }
}
*/

---

## Additional files (copy these into your project)

### package.json

```json
{
  "name": "tales-of-the-cake",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "13.5.6",
    "react": "18.2.0",
    "react-dom": "18.2.0"
  },
  "devDependencies": {
    "autoprefixer": "10.4.14",
    "postcss": "8.4.24",
    "tailwindcss": "3.4.7"
  }
}
```

### tailwind.config.js

```js
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bakery-pink': '#FFB6C1',
        'bakery-cream': '#FFF3E0',
        'bakery-amber': '#FFD54F'
      },
      fontFamily: {
        dancing: ['"Dancing Script"', 'cursive'],
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
```

### postcss.config.js

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

### globals.css (add to /app/globals.css or /styles/globals.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body {
  font-family: 'Poppins', sans-serif;
}

/* small helpers */
.font-dancing { font-family: 'Dancing Script', cursive; }
```

### README — Deploy to Vercel

1. Push repo to GitHub.
2. Sign in to Vercel and import the GitHub repository.
3. Build command: `npm run build`, Output directory: (leave blank)
4. Set environment variables if you later add API keys (not required for this starter).
5. Deploy — Vercel will give you a URL. Update contact info in `app/page.jsx`.

---

### logo.svg (save to /public/logo.svg)

```svg
<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tales of the Cake logo">
  <defs>
    <linearGradient id="g" x1="0" x2="1">
      <stop offset="0%" stop-color="#FFB6C1"/>
      <stop offset="100%" stop-color="#FFD54F"/>
    </linearGradient>
  </defs>
  <rect width="200" height="60" rx="12" fill="url(#g)" />
  <g transform="translate(18,10)">
    <text x="0" y="28" font-family="'Dancing Script', cursive" font-size="28" fill="#fff">Tales of the Cake</text>
  </g>
</svg>
```

### color-palette.md

- Primary: `#FFB6C1` (bakery-pink)
- Secondary: `#FFF3E0` (bakery-cream)
- Accent: `#FFD54F` (bakery-amber)
- Text: `#2D3748` (dark slate)

Usage suggestions: use bakery-pink for CTAs, bakery-cream for page backgrounds, and bakery-amber for accents like badges and icons.

---

### Quick customization checklist
- Replace `YOURNUMBER` in `app/page.jsx` with bakery WhatsApp number.
- Replace `yourbakery@example.com` with the real email.
- Replace Unsplash placeholders with `/public/` images for best loading.
- Add Google Fonts link for Poppins and Dancing Script in `app/head` or `_document`.

---

### AI image prompts (ready to generate 6 hero images)

Use these prompts with an image generator to create branded hero product images.

1) "Studio photo of a three-tier vanilla cake decorated with pastel buttercream flowers, soft natural lighting, shallow depth of field, bakery branding, high resolution"
2) "Close-up of glossy chocolate ganache cake slice with berry compote, cinematic lighting, mouth-watering detail, high resolution"
3) "Flatlay of assorted biscuits and cookies on a rustic wooden board, pastel props, warm sunlight, top-down composition"
4) "Artisan almond biscotti stacked beside a cup of tea, cozy home kitchen vibe, high detail"
5) "Elegant wedding cake with lace piping and fresh flowers on a marble table, editorial style, high resolution"
6) "Assorted mini pastries and cupcakes in a gift box with ribbon, product shot, soft shadows, high resolution"

If you want, I can generate these 6 images for you and add them to the project `public/` folder. Say 'Generate images' and I will create them.

---

End of additions.

