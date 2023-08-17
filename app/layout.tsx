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

  async function getData() {
    const res = await fetch('https://api.franciskahajdu.de/data.json')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

  const data = await getData();

  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <Nav data={[
          data.menuItems,
          data.settings
        ]} />
        <div className="mt-10">
          <p>home asd</p>
          <p>{data.timeStamp}</p>
          <p>{data.impressum[0].sheetId}</p>
        </div>
        {children}
      </body>
    </html>
  )
}
