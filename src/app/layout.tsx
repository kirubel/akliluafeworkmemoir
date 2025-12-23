import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'leaflet/dist/leaflet.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moments Unfolded: The Memoir of Aklilu Afework',
  description: 'A heartfelt family tribute preserving the remarkable journey of Aklilu Afework from Gojjam to the world',
  keywords: ['memoir', 'Aklilu Afework', 'Ethiopia', 'Gojjam', 'Debre Markos', 'family history', 'African Development Bank'],
  authors: [{ name: 'Aklilu Afework' }],
  openGraph: {
    title: 'Moments Unfolded: The Memoir of Aklilu Afework',
    description: 'Life is not measured by the number of breaths we take, but by the moments that take our breath away',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-earth-50 text-earth-900`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}