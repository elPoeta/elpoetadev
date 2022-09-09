import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ToastContainer} from 'react-toastify'
import { ThemeProvider } from '../context/theme/ThemeProvider'
import { Layout } from '../components/layout/Layout'

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
  <ThemeProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    <ToastContainer />
  </ThemeProvider>
)
}

export default MyApp
