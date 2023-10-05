import Profile from '@/containers/home/profile'
import SocialMedias from '@/containers/home/social_medias'
import Tags from '@/containers/home/tags'
import TechStacks from '@/containers/home/tech-stacks'
import styles from './home.module.css'

export default async function Home() {

  return (
    <main className={styles.main}>
      <Profile />
      <Tags />
      <SocialMedias />
      <TechStacks />
    </main>
  )
}
