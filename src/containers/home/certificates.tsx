import { getDictionary } from '@/get-dictionary'
import supabase from '@/helpers/supabase'
import { Locale } from '@/i18n-config'
import styles from './certificates.module.css'
import Image from 'next/image'

type Props = {
  lang: Locale
}

const Certificates = async (props: Props) => {
  const { data } = await supabase.from('certificates').select('*')
  const t = await getDictionary(props.lang)

  return (
    <section>
      <h3 className={styles.h3}>
        {t.certificates}
      </h3>
      <div className={styles.container}>
        {
          data?.map(item => (
            <a key={item.id} rel='noreferrer' href={item.link || '/'} className={styles.item}>
              <Image src={item.icon || ''} alt={item.label || ''} width={12} height={12} />
              {item.label}
            </a>
          ))
        }
      </div>
    </section>
  )
}

export default Certificates