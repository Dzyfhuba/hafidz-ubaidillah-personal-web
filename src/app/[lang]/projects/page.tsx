import supabase from '@/helpers/supabase'
import styles from './page.module.css'

const Projects = async () => {
  const { data } = await supabase.from('projects').select('*, project_platforms(platforms(id, platform)), project_tech_stacks(tech_stacks(text, icon))')


  return (
    <main className={styles.main}>
      {
        data?.map((project) => (
          <article key={project.id}>
            <h2>{project.name}</h2>
            <div>
              {
                project.project_platforms.map((platform) => (
                  <span key={platform.platforms?.id}>{platform.platforms?.platform}</span>
                ))
              }
            </div>
            <div>
              {
                project.project_tech_stacks.map((tech_stack) => (
                  <span key={tech_stack.tech_stacks?.id}>{tech_stack.tech_stacks?.text}</span>
                ))
              }
            </div>
          </article>
        ))
      }
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}

export default Projects