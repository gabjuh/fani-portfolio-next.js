import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import Menu from '@/components/menu/Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  )
}
