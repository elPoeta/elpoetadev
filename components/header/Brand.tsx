import Link from 'next/link'
import React from 'react'
import { Logo } from './Logo'

export const Brand = () => {
  return (
    <div>
      <Link href='/'>
        <a className='flex items-center justify-center'>
          <Logo fill='#0ea5e9' classNames="w-16 h-16 md:w-24 md:h-24" strokeWidth={0.80277747}  />
          <h1 className='text-2xl px-4 text-gradient-light dark:text-gradient-dark lg:text-4xl lg:px-6'>elPoetaDev</h1>
        </a>
      </Link>
    </div>
  )
}

