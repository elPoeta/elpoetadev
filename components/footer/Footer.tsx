import Link from 'next/link'
import React from 'react'
import { Logo } from '../header/Logo'

export const Footer = () => {
  return (
    <footer className="text-slate-900 bg-gray-200 dark:text-gray-200 dark:bg-slate-900 body-font border-t-2 border-t-gray-500 dark:border-t-slate-800">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-slate-900 dark:text-gray-200">
            <Logo fill='#0ea5e9' classNames="w-16 h-16 md:w-24 md:h-24" strokeWidth={0.80277747}  /> 
            <span className="ml-3 text-xl">elPoetaDev</span>
          </a>
          <p className="mt-2 text-sm  text-slate-800 dark:text-gray-400">Air plant banjo lyft occupy retro adaptogen indego</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-slate-900 dark:text-gray-200 tracking-widest text-sm mb-3">Web site</h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/">
                  <a className="text-slate-900 dark:text-gray-200 hover:text-slate-700 dark:hover:text-white">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="text-slate-900 dark:text-gray-200 hover:text-slate-700 dark:hover:text-white">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-slate-900 dark:text-gray-200 hover:text-slate-700 dark:hover:text-white">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-slate-900 dark:text-gray-200 hover:text-slate-700 dark:hover:text-white">About</a>
                </Link>
              </li>
            </nav>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center inset-0 text-gray-400 relative">
            <div className="lg:w-[100%] md:w-1/2 w-full px-4">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13138.566325268608!2d-58.38310044999999!3d-34.5879346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sar!4v1662723058191!5m2!1sen!2sar" width="100%" height="100%" style={{border:0, filter: 'grayscale(1) contrast(1.2) opacity(0.16)' }}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <Link href="/contact">
                <a className="text-white bg-[#0ea5e9] border-0 py-2 px-6 focus:outline-none hover:bg-sky-600  rounded text-lg absolute top-[50%] left-[55%] translate-x-[-55%] translate-y-[-50%]">Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-slate-800 bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-col sm:flex-row">
          <p className="text-slate-900 dark:text-gray-200 text-sm text-center sm:text-left">© {new Date().getFullYear()} elPoetaDev —
            <a href="https://github.com/elPoeta" rel="noopener noreferrer" className="text-slate-800 dark:text-gray-400 ml-1" target="_blank">@elPoeta</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-slate-900 dark:text-gray-200">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5"  role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            </a>
            <a href="https://t.me/elPoetaDeveloper" rel="noopener noreferrer" target="_blank" className="ml-3 text-slate-900 dark:text-gray-200">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Telegram</title>
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            </a>
            <a href="https://twitter.com/elPoetaDev" rel="noopener noreferrer" target="_blank" className="ml-3 text-slate-900 dark:text-gray-200">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <title>Twitter</title>
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="https://discordapp.com/users/1013999474357571594" rel="noopener noreferrer" target="_blank" className="ml-3 text-slate-900 dark:text-gray-200">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>Discord</title>
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/leonardo-tosetto" rel="noopener noreferrer" target="_blank" className="ml-3 text-slate-900 dark:text-gray-200">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <title>Linkedin</title>
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

