import supabase from '@/helpers/supabase'
import { Locale } from '@/i18n-config'
import ImageProfile from '@/images/profile.jpg'
import Image from 'next/image'
import { MdOutlineLocationOn } from 'react-icons/md'
import styles from './home.module.css'

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
    <main className={styles.main}>
      <Image
        src={ImageProfile}
        alt={process.env.NEXT_PUBLIC_APP_NAME}
        className={styles.profileImg}
      />
      <h1 className={styles.fullname}>
        {profile?.fullname}
      </h1>
      <div className={styles['small-info']}>
        <span>
          {`@${profile?.username}`}
        </span>
        <span>
          <MdOutlineLocationOn />{profile?.address}
        </span>
        <span>
          {`${profile?.work} at`}
          <span>&nbsp;{profile?.affiliation}</span>
        </span>
      </div>
      <p className={styles.description}>
        {profile?.short_description}
      </p>
    </main>
  )
}
