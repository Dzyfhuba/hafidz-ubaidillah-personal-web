import { cookies } from '@/helpers/server/cookies'
import supabase from '@/helpers/supabase'
import ImageProfile from '@/images/profile.jpg'
import Image from 'next/image'
import { MdOutlineLocationOn } from 'react-icons/md'
import styles from './profile.module.css'

const Profile = async () => {
  let { data: profile } = await supabase
    .from('profile')
    .select('*')
    .single()

  const locale = await cookies().locale()
  return (
    <section>
      <Image
        src={ImageProfile}
        alt={process.env.NEXT_PUBLIC_APP_NAME}
        className={styles.profileImg}
        priority
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
        {
          locale === 'id' ? profile?.short_description_id : profile?.short_description_en
        }
      </p>
    </section>
  )
}

export default Profile