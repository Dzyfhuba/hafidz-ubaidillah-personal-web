import Profile from '@/containers/home/profile'
import Tags from '@/containers/home/tags'
import supabase from '@/helpers/supabase'
import { Locale } from '@/i18n-config'
import styles from './home.module.css'
import TechStacks from '@/containers/home/tech-stacks'

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {

  return (
    <main className={styles.main}>
      <Profile />
      <Tags />
      <TechStacks />
    </main>
  )
}
