import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>elPoetaDev</title>
        <meta name="description" content="Leonardo Tosetto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <h2>El Poeta Dev</h2>
      </main>
    </div>
  )
}

export default Home
