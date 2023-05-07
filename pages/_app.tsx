import '../styles/globals.css'
import type { AppProps } from 'next/app'
import UilReact from '@iconscout/react-unicons/icons/uil-react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
       
      
    </div>
   
  )
}

export default MyApp
