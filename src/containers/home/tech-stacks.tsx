import supabase from '@/helpers/supabase'
import styles from './tech-stacks.module.css'
import Image from 'next/image'
import Link from 'next/link'

const TechStacks = async () => {
  const { data } = await supabase.from('tech_stack_categories').select('*').order('order', { ascending: true })
  
  return (
    <section>
      <h3 className={styles.title}>Tech Stack</h3>

      <div className={styles['category-grid']}>
        {
          data?.map((category) => (
            <div key={category.id} className={styles['category-container']}>
              <h4 className={styles['category-title']}>{category.text}</h4>
              <Item categoryId={category.id} />
            </div>
          ))
        }
      </div>
    </section>
  )
}

const Item = async ({ categoryId: id }: {categoryId: number}) => {
  const { data: items } = await supabase.from('tech_stacks').select('*').eq('category_id', id)

  return (
    <div className={styles.item}>
      {
        items?.map((item) => (
          <Link key={item.id} className={styles['item-container']} href={`/projects?tech=${item.text}`}>
            {
              item.icon_source && <Image src={item.icon_source} alt={item.text || ''} width={20} height={20} />
            }
            {
              item.icon && <span dangerouslySetInnerHTML={{ __html: item.icon || '' }} />
            }
            <span className={styles['item-text']}>{item.text}</span>
          </Link>
        ))
      }
    </div>
  )
}

export default TechStacks