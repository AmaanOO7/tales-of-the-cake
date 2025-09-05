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
