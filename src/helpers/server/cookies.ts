import { Locale } from '@/i18n-config'
import { cookies as cook } from 'next/headers'

export const cookies = () => {
  return {
    locale: async () => cook().get('NEXT_LOCALE')?.value as unknown as Locale
  }
}