import './globals.css'

export const metadata = {
  title: 'Tales of the Cake',
  description: 'Every cake tells a story',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
