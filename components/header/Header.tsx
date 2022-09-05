import React from 'react'
import { Brand } from './Brand'
import Navbar from './Navbar'
const styles = {

}

export const Header = () => {
  return (
    <header className='dark:bg-slate-800 dark:border-0 border-b-2 border-b-slate-800 flex items-center justify-between md:px-5 md:h-[70px] px-2 h-[60px]'>
      <Brand />
      <Navbar />
    </header>
  )
}

