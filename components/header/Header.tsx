import React from 'react'
import Brand from './Brand'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='dark:bg-gray-900 bg-blue-200'>
      <Brand />
      <Navbar />
    </header>
  )
}

export default Header