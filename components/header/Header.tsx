import React from 'react'
import { Brand } from './Brand'
import Navbar from './navBar/Navbar'
const styles = {

}

export const Header = () => {
  return (
    <header className='dark:bg-slate-800 dark:border-0 border-b-2 border-b-slate-800 flex items-center justify-between px-2 h-[60px] lg:px-5 lg:h-[70px]'>
      <Brand />
      <Navbar />
    </header>
  )
}

