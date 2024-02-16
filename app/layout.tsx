import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const fraktion = localFont({
  src: '../public/fonts/PPFraktionSans-Variable.ttf',
  variable: '--font-fraktion',
})

export const metadata: Metadata = {
  title: 'Michael Ong | Portfolio',
  description: 'Porfolio page for Michael Ong.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning className="dark" lang="en">
      <body className={cn('antialiased', inter.variable, fraktion.variable)}>{children}</body>
    </html>
  )
}
