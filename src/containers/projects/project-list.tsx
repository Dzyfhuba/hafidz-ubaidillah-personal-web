import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from './project-list.module.css'
import { ReadonlyURLSearchParams, usePathname, useRouter } from 'next/navigation'

type Props = {
  params: ReadonlyURLSearchParams
}

const ProjectList = (props: Props) => {
  const [data, setData] = useState<typeData>([])
  const router = useRouter()
  const pathname = usePathname()


  useEffect(() => {
    getData(props.params.get('tech') || '')
  }, [props.params])

  const getData = async (tech: string) => {
    const data = await axios.get('/api/projects', {
      params: {
        tech: tech
      }
    }).then((response) => {
      return response.data as typeData
    }).catch((error) => {
      console.log(error)
      return [] as typeData
    })
    setData(data)
  }

  return (
    <>
      {
        data?.map((project) => (
          <article key={project.id} className='project' data-project={`project-${project.id}`}>
            <h3 className={styles.h3}>
              {project.name}
              <span>
                {
                  project.project_platforms.map((platform) => (
                    <a key={platform.platforms?.id} className={styles.platform} href={platform.link || '/'} target='_blank'>
                      <span dangerouslySetInnerHTML={{ __html: platform.platforms?.icon || '' }} />
                    </a>
                  ))
                }
              </span>
            </h3>
            <div className={styles['tech-stack-container']}>
              {
                project.project_tech_stacks.map((tech_stack) => (
                  // <span key={tech_stack.tech_stacks?.id} className={styles['tech-stack'] + (props.params.get('tech') == tech_stack.tech_stacks?.text ? ' btn-neutral':' btn-outline')} onClick={() => {
                  <span key={tech_stack.tech_stacks?.id} className={props.params.get('tech') == tech_stack.tech_stacks?.text ? styles['tech-stack-active']:styles['tech-stack']} onClick={() => {
                    if (props.params.get('tech') == tech_stack.tech_stacks?.text) {
                      router.replace('/projects')
                    } else {
                      router.replace(`/projects?tech=${tech_stack.tech_stacks?.text || ''}`, {})
                    }
                  }}>
                    <span dangerouslySetInnerHTML={{ __html: tech_stack.tech_stacks?.icon || '' }} />
                    <span data-project={`tech-${project.id}`}>{tech_stack.tech_stacks?.text}</span>
                  </span>
                ))
              }
            </div>
          </article>
        ))
      }
    </>
  )
}

export default ProjectList


type typeData = {
  id: number;
  name: string | null;
  order: number | null;
  // platforms: {
  //   id: number;
  //   platform: string | null;
  //   icon: string | null;
  // }[];
  status: string | null;
  // tech_stack: {
  //   id: number;
  //   text: string | null;
  //   icon: string | null;
  // }[];
  project_platforms: {
    id: number;
    link: string | null;
    platform_id: number | null;
    project_id: number | null;
    platforms: {
      id: number;
      platform: string | null;
      icon: string | null;
    } | null;
  }[];
  project_tech_stacks: {
    id: number;
    project_id: number | null;
    tech_stack_id: number | null;
    tech_stacks: {
      id: number;
      text: string | null;
      icon: string | null;
    } | null;
  }[];
}[]