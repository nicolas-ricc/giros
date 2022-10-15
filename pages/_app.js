import '../styles/globals.css'
import '../styles/article.css'
import '../styles/loadingState.css'
import '../styles/cards.css'
import '../styles/feed.css'
import '../styles/artwork.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Layout from '../components/Layout/Layout'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import {useState} from 'react'

config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  
  const [queryClient] = useState(() => new QueryClient())
  return <QueryClientProvider client={queryClient}><Hydrate state={pageProps.dehyratedState}><Layout><Component {...pageProps} /></Layout></Hydrate></QueryClientProvider>
}

export default MyApp
