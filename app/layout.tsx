import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google';
import Nav from './components/Nav'
import Footer from './components/Footer'
import { ParallaxProvider } from 'react-scroll-parallax'
import Link from 'next/link'
import { showMaintenance } from './maintenance.server'

const inter = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Portfolio - Franciska Hajdu',
  description: 'NextJS Typescript Project by Gábor Juhász',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  async function getData() {
    const res = await fetch(`https://${process.env.NEXT_PUBLIC_BACKEND_API}/data.json`,
      { cache: 'no-store' }
    )
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

  // TEMPORARY maintenance mode: no menu, only a minimal footer with the legal links.
  if (showMaintenance()) {
    return (
      <html lang="de" data-theme="autumn">
        <body className={inter.className}>
          {children}
          <footer className="py-6 text-center text-sm text-gray-500 bg-base-200">
            <Link className="mx-3 link link-hover" href="/">Startseite</Link>
            <Link className="mx-3 link link-hover" href="/impressum">Impressum</Link>
            <Link className="mx-3 link link-hover" href="/agb">AGB</Link>
          </footer>
        </body>
      </html>
    )
  }

  const data = await getData();

  return (
    // <html lang="en" data-theme="dark">
    // <ParallaxProvider>
    <html lang="en" data-theme="autumn">
      <body className={inter.className}>
        <Nav data={[
          data.menuItems,
          data.settings
        ]} />
        {children}
        <Footer data={data.settings} timeStamp={data.timeStamp} />
      </body>
    </html>
    // </ParallaxProvider>
  )
}
