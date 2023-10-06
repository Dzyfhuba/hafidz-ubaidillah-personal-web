import Link from 'next/link'
import styles from './footer.module.css'
import supabase from '@/helpers/supabase'
import moment from 'moment'
import { Locale } from '@/i18n-config'

type Props = {
  lang: Locale
}

const Footer = async (props: Props) => {
  const { data: setting } = await supabase.from('setting').select('*').single()
  return (
    <footer className={styles.footer}>
      <span>
        Copyright &copy; 2023 <Link href='/' className={styles.link}>Hafidz Ubaidillah</Link>
      </span>
      <span>
        Update: {moment(setting?.updated_at).format('DD MMMM YYYY')}
      </span>
    </footer>
  )
}

export default Footer