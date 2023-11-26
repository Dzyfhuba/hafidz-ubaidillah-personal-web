import supabase from '@/helpers/supabase'
import NoImage from '@/images/no-image.jpg'
import Image from 'next/image'
import styles from './social_medias.module.css'

const SocialMedias = async () => {
  const { data } = await supabase.from('social_medias').select('*')

  return (
    <section className={styles['social-medias']}>
      {
        data?.map((social_media) => (
          <a key={social_media.id} href={social_media.link || '/'} target="_blank" rel="noreferrer" className={styles['social-media']}>
            <Image src={social_media.icon_source || NoImage} alt={social_media.label || ''} width={24} height={24} />
          </a>
        ))
      }
    </section>
  )
}

export default SocialMedias