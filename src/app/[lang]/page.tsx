import Profile from '@/containers/home/profile'
import SocialMedias from '@/containers/home/social_medias'
import Tags from '@/containers/home/tags'
import TechStacks from '@/containers/home/tech-stacks'
import styles from './home.module.css'
import { Locale, i18n } from '@/i18n-config'
import Certificates from '@/containers/home/certificates'
import Experiences from '@/containers/home/experiences'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

type Props = {
  params: { lang: Locale }
}

export default async function Home({ params }: Props) {

  return (
    <main className={styles.main}>
      <Profile lang={params.lang} />
      <Tags />
      <SocialMedias />
      <div className="divider"></div>
      <TechStacks />
      <div className="divider"></div>
      <Experiences lang={params.lang} />
      <div className="divider"></div>
      <Certificates lang={params.lang} />
    </main>
  )
}
