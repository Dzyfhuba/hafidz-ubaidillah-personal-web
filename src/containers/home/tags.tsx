import supabase from '@/helpers/supabase'
import styles from './tags.module.css'

const Tags = async () => {
  let { data: tags } = await supabase.from('tags').select('*')

  const colors = [
    '#731DD8',
    '#FAC748',
    '#BF0603',
    '#2E933C',
  ]
  
  return (
    <section className={styles.tags}>
      {
        tags?.map(tag => (
          <span key={tag.id} className={styles.tag}>
            <span dangerouslySetInnerHTML={{ __html: tag.icon?.replaceAll('currentColor', getRandom(colors)) || '' }}/>
            <span>{tag.text}</span>
          </span>
        ))
      }
    </section>
  )
}

// get random element from array
const getRandom = (arr: Array<any>) => arr[Math.floor(Math.random() * arr.length)]

export default Tags