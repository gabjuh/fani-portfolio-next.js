import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Franciska Hajdu - Portfolio',
  description: 'NextJS Typescript Project by Gábor Juhász',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <Nav />
        <p>home asd</p>
      </body>
    </html>
  )
}
