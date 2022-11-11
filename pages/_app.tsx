import '../styles/globals.css'
import '../styles/shapes.css'
import '../styles/tiles.css'
import '../styles/main.css'
import '../styles/contacts.css'
import '../styles/projects.css'
import '../styles/modal.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
