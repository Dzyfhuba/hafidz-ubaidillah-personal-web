'use client'
import axios from 'axios'
import { Suspense, useEffect, useState } from 'react'
import styles from './page.module.css'
import Loading from './loading'
import ProjectList from '@/containers/projects/project-list'
import { useSearchParams } from 'next/navigation'


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
