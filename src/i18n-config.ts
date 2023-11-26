export const i18n = {
  defaultLocale: 'id',
  locales: ['id', 'en'],
  longLocales: ['indonesia', 'english']
} as const

export type Locale = (typeof i18n)['locales'][number]
