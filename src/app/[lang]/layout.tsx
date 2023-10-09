import PageAnalytics from '@/components/analytics/pageAnalytics'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { cookies } from '@/helpers/server/cookies'
import { Locale, i18n } from '@/i18n-config'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'moment/locale/id'
import moment from 'moment'
import Badge from '@/components/badge'
import { Suspense } from 'react'
import Loading from './loading'
import styles from './home.module.css'

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
