import supabase from '@/helpers/supabase'
import { Locale } from '@/i18n-config'
import ImageProfile from '@/images/profile.jpg'
import Image from 'next/image'
import { MdOutlineLocationOn } from 'react-icons/md'
import styles from './profile.module.css'

type Props = {
  lang: Locale
}

const Profile = async (props: Props) => {
  let { data: profile } = await supabase
    .from('profile')
    .select('*')
    .single()

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
          props.lang === 'id' ? profile?.short_description_id : profile?.short_description_en
        }
      </p>
    </section>
  )
}



export default Profile