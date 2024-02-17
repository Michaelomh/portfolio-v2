import type { Metadata } from 'next'
import { Urbanist, JetBrains_Mono, PT_Mono } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/shared/TailwindIndicator/TailwindIndicator'

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

const rubikMonoOne = PT_Mono({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik-mono-one',
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
    <html suppressHydrationWarning lang="en">
      <body
        className={cn(
          'bg-stone-900 font-sans text-white antialiased',
          urbanist.variable,
          jetbrainsMono.variable,
          rubikMonoOne.variable,
        )}
      >
        {children}
        <TailwindIndicator />
      </body>
    </html>
  )
}
