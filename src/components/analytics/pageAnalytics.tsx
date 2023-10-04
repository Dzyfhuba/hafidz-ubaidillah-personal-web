'use client'
import { analytics } from '@/helpers/firebase'
import { logEvent } from 'firebase/analytics'
import { useEffect } from 'react'

const PageAnalytics = () => {
  useEffect(() => {
    logEvent(analytics, 'page_view', {
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_title: document.title
    })
  }, [])

  return (
    <></>
  )
}

export default PageAnalytics