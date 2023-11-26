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
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
        </Head>
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
