import PageAnalytics from '@/components/analytics/pageAnalytics'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { cookies } from '@/helpers/server/cookies'
import { Locale, i18n } from '@/i18n-config'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'Hafidz Ubaidillah',
  description: `Hello and welcome to my website profile! 
  I'm Hafidz, an independent Software Engineer with a solid 2 years of professional experience. 
  Feel free to explore my portfolio and learn more about my skills and projects.`,
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
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Navbar lang={lang} />
        {/* <PageAnalytics> */}
        {children}
        {/* </PageAnalytics> */}
        <Analytics />
        {
          typeof window !== 'undefined' && <PageAnalytics />
        }
        <Footer />
      </body>
    </html>
  )
}
