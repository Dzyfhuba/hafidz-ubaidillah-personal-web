'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const ProjectsFilter = () => {
  const searchParams = useSearchParams()
  const tech = searchParams.get('tech')
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const projects = document.querySelectorAll('[data-project^="project-"]')
      // console.log(projects)
      
      if (!tech) return
      
      projects.forEach((project) => {
        const projectTechs = Array.from(project.querySelectorAll('[data-project^="tech-"]'))
        // console.log({ projectTechs, tech  })
        // projectTechs.forEach((projectTech) => {
        //   if (projectTech.innerHTML?.toLowerCase() != tech.toLowerCase()) {
        //     console.log(projectTech.innerHTML?.toLowerCase(), tech, project.getAttribute('data-project'), projectTech.innerHTML?.toLowerCase() == tech.toLowerCase())
        //     project.classList.remove('hidden')
        //   }
        // })
        // console.log(project.innerHTML)
        console.log(project.querySelectorAll('[data-project^="tech-"]'))
        
        // console.log(projectTechs.filter(a => a.innerHTML?.toLowerCase() == tech.toLowerCase()))
        if (!projectTechs.filter(a => a.innerHTML?.toLowerCase() == tech.toLowerCase()).length) {
          project.classList.add('hidden')
        }
      })
    }
  }, [tech])
  return (
    <></>
  )
}


export default ProjectsFilter