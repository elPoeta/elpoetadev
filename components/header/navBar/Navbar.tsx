import React from 'react'
import { MenuButton } from './MenuButton'
import ThemeButton from './ThemeButton'

const Navbar = () => {
  return (
    <nav>
      <ThemeButton classNames='hidden lg:flex lg:w-6 lg:h-6 lg:cursor-pointer' />
      <MenuButton />
    </nav>
  )
}

export default Navbar