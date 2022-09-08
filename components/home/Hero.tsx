import React from 'react'
import { Logo } from '../header/Logo'

export const Hero = () => {
  return (
    <section>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gradient-light dark:text-gradient-dark">elPoeta Tech Dev</h2>
          <p className="mb-8 leading-relaxed">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-[#0ea5e9] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            <button className="ml-4 inline-flex text-slate-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
         <Logo fill='#0ea5e9' classNames="w-[320px] h-[320px] lg:w-[520px] lg:h-[520px]" strokeWidth={0.80277747}  />
        </div>
      </div>
    </section>
  )
}
