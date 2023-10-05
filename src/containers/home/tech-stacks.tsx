import supabase from '@/helpers/supabase'
import styles from './tech-stacks.module.css'

const TechStacks = async () => {
  const { data: categories, error } = await supabase.from('tech_stack_categories').select('*').order('order', { ascending: true })
  
  return (
    <section>
      <h3 className={styles.title}>Tech Stack</h3>

      <div className={styles['category-grid']}>
        {
          categories?.map((category) => (
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
  const { data: items, error } = await supabase.from('tech_stacks').select('*').eq('category_id', id)

  console.log(items)

  return (
    <div className={styles.item}>
      {
        items?.map((item) => (
          <div key={item.id} className={styles['item-container']}>
            <span dangerouslySetInnerHTML={{ __html: item.icon || '' }} />
            <span className={styles['item-text']}>{item.text}</span>
          </div>
        ))
      }
    </div>
  )
}

export default TechStacks