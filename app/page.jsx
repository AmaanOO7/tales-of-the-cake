import React, { useState } from 'react'

const PRODUCTS = [
  { id: 1, name: 'Vanilla Story Cake', price: '₹1,200', desc: 'Light sponge, vanilla buttercream, edible flowers', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=60' },
  { id: 2, name: 'Chocolate Chronicle', price: '₹1,500', desc: 'Rich chocolate ganache, berry compote', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=60' },
  { id: 3, name: 'Almond Biscotti', price: '₹250', desc: 'Crunchy, nutty, perfect with tea', img: 'https://images.unsplash.com/photo-1606756791553-3c8b6f1b2a2f?auto=format&fit=crop&w=800&q=60' },
  { id: 4, name: 'Lemon Zest Cookies', price: '₹200', desc: 'Zingy lemon, melt-in-mouth', img: 'https://images.unsplash.com/photo-1562440499-64e3a44aa3b2?auto=format&fit=crop&w=800&q=60' },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-amber-50 to-white font-poppins text-gray-800">
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
  const [menuOpen, setMenuOpen] = useState(false)

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

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#products" className="hover:underline">Products</a>
          <a href="#about" className="hover:underline">Our Story</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#order" className="rounded-md px-4 py-2 bg-pink-300 text-white font-medium">Order Now</a>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-3">
          <a href="#products" className="block">Products</a>
          <a href="#about" className="block">Our Story</a>
          <a href="#gallery" className="block">Gallery</a>
          <a href="#order" className="block px-4 py-2 bg-pink-300 text-white rounded-md">Order Now</a>
        </div>
      )}
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
        </div>
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition">
            <img src="https://images.unsplash.com/photo-1542826438-6b37ff7d5d3b?auto=format&fit=crop&w=1000&q=60" alt="Beautiful cake with decorations" className="w-full h-96 object-cover"/>
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
                  <a href={`https://wa.me/919931052652?text=Hi%20I%20want%20to%20order%20${encodeURIComponent(p.name)}`} className="block mt-2 text-xs text-pink-500">Quick order</a>
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
        <img src="https://images.unsplash.com/photo-1514512364185-2b63a7c1f1c2?auto=format&fit=crop&w=900&q=60" alt="Bakery interior with cakes" className="w-full h-72 object-cover"/>
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
            <img src={src} alt={`Bakery gallery ${i+1}`} className="w-full h-40 object-cover"/>
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
          <a href={`https://wa.me/919931052652?text=${encodeURIComponent('Hi! I want to place a custom order for a cake.')}`} className="inline-block px-4 py-2 bg-green-400 rounded-md text-white">Message on WhatsApp</a>
          <a href={`mailto:talesofthecake@gmail.com?subject=${encodeURIComponent('Custom Cake Inquiry')}&body=${encodeURIComponent('Hi, I would like to inquire about a custom cake for...')}`} className="inline-block ml-2 px-4 py-2 border rounded-md">Email us</a>
        </div>
      </div>

      {/* Formspree form */}
      <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="bg-white rounded-xl p-6 shadow">
        <div className="grid grid-cols-1 gap-3">
          <input name="name" className="border rounded-md p-3" placeholder="Your name" required />
          <input name="phone" className="border rounded-md p-3" placeholder="Phone or WhatsApp" required />
          <input name="date" type="date" className="border rounded-md p-3" placeholder="Event date" required />
          <textarea name="message" className="border rounded-md p-3" placeholder="Tell us your idea (flavor, size, theme)" rows={4} required></textarea>
          <div className="flex items-center gap-3">
            <button type="submit" className="px-4 py-2 bg-pink-300 text-white rounded-md">Send Inquiry</button>
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
        <div className="text-sm text-gray-600">Contact: <a href="tel:+919931052652" className="text-pink-500">+91 9931052652</a> • <a href="#" className="ml-3 text-pink-500">Instagram</a></div>
      </div>
    </footer>
  )
}
