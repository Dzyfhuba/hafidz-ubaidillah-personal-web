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
import Navbar from '@/components/navbar'
import { cookies } from '@/helpers/server/cookies'

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
  const lang = await cookies().locale() || params.lang
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Navbar lang={lang} />
        {children}
      </body>
    </html>
  )
}
