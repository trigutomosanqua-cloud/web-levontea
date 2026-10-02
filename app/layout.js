import './globals.css'

export const metadata = {
  title: 'Le Vontea | Segarnya Bikin Seru',
  description: 'Le Vontea, minuman teh 220 ml yang siap menemani setiap aktivitas dan momen seru.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
