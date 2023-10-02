import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import LogoWhite from '@/images/logo-long-bg-white.png'
import { MdClose, MdMenu } from 'react-icons/md'
import { BiMenuAltLeft } from 'react-icons/bi'
import { Locale, i18n } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dzyfhuba Dev',
  description: `Hafidz Ubaidillah is a highly skilled full-stack web developer, 
  specializing in Laravel and Node.js for the back end, and React.js and Flutter for the front end.`,
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}


export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: {lang: Locale}
}) {
  const dictionary = await getDictionary(params.lang)
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <nav className='bg-orange-600 flex items-center px-2 justify-between'>
          <div className="drawer w-min">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="btn btn-ghost drawer-button btn-square">
                <BiMenuAltLeft size={32} color='white'/>
              </label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu p-4 w-full sm:w-80 min-h-full bg-base-200 text-base-content">
                  <label className='self-end btn' htmlFor='my-drawer'>
                    <MdClose size={24} />
                  </label>
                {/* Sidebar content here */}
                <li>
                  <Link href={'/'}>
                    {dictionary.home}
                  </Link>
                </li>
                <li>
                  <Link href={'/'}>
                    {dictionary.projects}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link href="/">
            <h1 className='text-white font-black'>{process.env.NEXT_PUBLIC_APP_NAME}</h1>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
