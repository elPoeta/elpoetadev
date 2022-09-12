import type { NextPage } from 'next'
import { Footer } from '../components/footer/Footer'
import { Hero } from '../components/home/Hero'

const Home: NextPage = () => {
  return (
    <div className=''>
      <main className='overflow-x-hidden'>
        <Hero />
        <Footer />
      </main>
    </div>
  )
}

export default Home
