import supabase from '@/helpers/supabase'
import { Locale } from '@/i18n-config'
import Image from 'next/image'

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {

  let { data: profile, error } = await supabase
    .from('profile')
    .select('*')
    .single()


  console.log({ profile })
  console.log({ error })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 id='fullname'>
        {profile?.fullname}
      </h1>
    </main>
  )
}
