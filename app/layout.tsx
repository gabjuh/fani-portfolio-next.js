import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TableIdContext from '@/providers/AppProvider'
import { tableIds } from '@/helpers/connect'
import Nav from './Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Franciska Hajdu - Portfolio',
  description: 'NextJS Typescript Project by Gábor Juhász',
}

async function fetchData() {
  const res = await fetch(
    "https://api.franciskahajdu.de/data.json",
    { next: { revalidate: 60 }}
  );

  const data: any = await res.json();
  return data;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const data = await fetchData();

  // Select table of next or public 
  // const tableId = tableIds.public;
  const tableId = tableIds.next;

  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <Nav />
        <p>home asd</p>
      </body>
    </html>
  )
}
