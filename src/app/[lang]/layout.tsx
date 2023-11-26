import PageAnalytics from '@/components/analytics/pageAnalytics'
import Badge from '@/components/badge'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { cookies } from '@/helpers/server/cookies'
import { Locale, i18n } from '@/i18n-config'
import { Analytics } from '@vercel/analytics/react'
import moment from 'moment'
import 'moment/locale/id'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import styles from './home.module.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'Hafidz Ubaidillah',
  description: 'Experienced Full-stack Web Developer with a strong proficiency in Laravel and React, bringing two years of professional expertise in creating robust and user-friendly web applications.',
  manifest: '/manifest.json',
  themeColor: '#5663f5',
  authors: [{ name: 'Hafidz Ubaidillah', url: 'https://hafidzubaidillah.com' }],
  robots: 'index, follow',
  icons: [
    '/images/icons/icon-72x72.png',
    '/images/icons/icon-96x96.png',
    '/images/icons/icon-128x128.png',
    '/images/icons/icon-144x144.png',
    '/images/icons/icon-152x152.png',
    '/images/icons/icon-192x192.png',
    '/images/icons/icon-384x384.png',
    '/images/icons/icon-512x512.png'
  ],
  applicationName: process.env.NEXT_PUBLIC_APP_NAME || 'Hafidz Ubaidillah',
  colorScheme: 'light dark',
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}


export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: Locale }
}) {
  const lang = await cookies().locale() || params.lang
  moment.locale(lang)
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Navbar lang={lang} />
        {/* <PageAnalytics> */}
        <main className={styles.main}>
          {children}
        </main>
        {/* </PageAnalytics> */}
        <Analytics />
        {
          typeof window !== 'undefined' && <PageAnalytics />
        }
        <Footer lang={lang} />
        {
          process.env.NEXT_PUBLIC_BADGE && <Badge />
        }
      </body>
    </html>
  )
}
