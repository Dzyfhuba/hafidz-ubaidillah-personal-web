import { Locale } from '@/i18-config'
import Image from 'next/image'

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      asd
    </main>
  )
}
