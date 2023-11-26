'use client'
import ProjectList from '@/containers/projects/project-list'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Loading from './loading'


const Projects = () => {
  const params = useSearchParams()

  return (
    <>
      <Suspense fallback={<Loading />}>
        <ProjectList params={params} />
      </Suspense>
      {/* <ProjectsFilter /> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </>
  )
}

export default Projects
