import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './_components/Navbar/navbar'
import BlurbGrid from './_components/Blurb/blurbgrid'

const poppins = Poppins({ subsets: ['latin'], weight: [ '100', '300', '500', '700', '900']})

export const metadata: Metadata = {
  title: 'Zach Shearer',
  description: 'A portfolio site',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className='w-full max-w-screen-md mx-auto'>
          <BlurbGrid />
          <Navbar />
          <main className='pt-28 p-5 lg:px-0'>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
