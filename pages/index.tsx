import type { NextPage } from 'next'
import { Hero } from '../components/home/Hero'

const Home: NextPage = () => {
  return (
    <div className=''>
      <main className='container overflow-x-hidden'>
        <Hero />
      </main>
    </div>
  )
}

export default Home
