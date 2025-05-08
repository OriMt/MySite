import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oresti Meta - Cybersecurity Analyst',
  description: 'Portfolio website of Oresti Meta, a Cybersecurity Analyst specializing in digital security and system protection.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
} 