import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { Locale, i18n } from './i18n-config'

import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { cookies } from 'next/headers'

export function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  )

  const cookiesLocale = cookies().get('NEXT_LOCALE')?.value as unknown as Locale

  let locale = matchLocale(languages, locales, cookiesLocale || i18n.defaultLocale)

  // // get locale from cookies if exists
  if (cookies().has('NEXT_LOCALE'))
    locale = matchLocale(languages, locales, cookies().get('NEXT_LOCALE')?.value as unknown as Locale)

  return locale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  // if (
  //   [
  //     '/manifest.json',
  //     '/favicon.ico',
  //     // Your other files in `public`
  //   ].includes(pathname)
  // )
  //   return

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // if (locale === 'id') {
    //   // rewrite to /id
    //   return NextResponse.rewrite(
    //     new URL(
    //       `/${i18n.defaultLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
    //       request.url
    //     )
    //   )
    // }

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    // return NextResponse.redirect(
    //   new URL(
    //     `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
    //     request.url
    //   )
    // )

    // cookies().set('NEXT_LOCALE', locale as string)

    // rewrite to /i18n
    return NextResponse.rewrite(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}