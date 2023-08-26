import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"


const IndexPage: React.FC<PageProps> = () => {
  const [data, setData] = React.useState()
  const getData = () => {
    const myHeaders = new Headers();
    myHeaders.append("X-API-KEY", "YLBYh9yKQgBui29zQH9gKJhOOFXUhZ");

    fetch("https://api.goapi.id/v1/stock/idx/prices?symbols=AALI", {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    })
      .then(async response => {
        const data = await response.json()
        setData(data.data)
      })
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  React.useEffect(() => {
    getData()
  }, [])
  return (
    <main>
      check
      {
        JSON.stringify(data)
      }
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
