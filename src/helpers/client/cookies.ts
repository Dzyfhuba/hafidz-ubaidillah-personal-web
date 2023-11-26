'use client'
export const cookies = () => {
  return {
      get: (name: string) => {
          const cookie = document.cookie.split('; ').find(row => row.startsWith(name))
          return cookie?.split('=')[1]
      }
  }
}