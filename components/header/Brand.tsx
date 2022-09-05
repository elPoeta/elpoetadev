import Link from 'next/link'
import React from 'react'
import { useTheme } from '../../context/theme/useTheme';
import { Logo } from './Logo'

export const Brand = () => {
  const {
    state: { colorTheme }
  } = useTheme();
  
  return (
    <div>
      <Link href='/'>
        <a className='flex items-center justify-center'>
          <Logo fill={colorTheme === 'dark' ? '#0ea5e9' : '#0ea5e9'} classNames="md:w-24 md:h-24 w-14 h-14" strokeWidth={0.80277747}  />
          <h1 className='md:text-3xl md:px-4 text-xl px-2'>elPoetaDev</h1>
        </a>
      </Link>
    </div>
  )
}

