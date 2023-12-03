'use client'
import { capitalize } from '@/helpers/str'
import { Locale, i18n } from '@/i18n-config'

export const Select = (props: { lang: Locale; }) => {

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value as Locale

    // store in cookie expires in a week
    document.cookie = `NEXT_LOCALE=${lang};max-age=${60 * 60 * 24 * 7};sameSite=strict`
    document.location.replace(`/${lang}`)
  }

  return (
    <select
      name="language"
      // defaultValue={cookies().get('NEXT_LOCALE') || props.lang}
      defaultValue={props.lang}
      className='capitalize flex-grow'
      onChange={handleLanguageChange}
    >
      {i18n.locales.map((locale, idx) => (
        <option value={locale} key={idx}>{capitalize(i18n.longLocales[idx])}</option>
      ))}
    </select>
  )
}
