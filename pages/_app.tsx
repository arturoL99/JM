import '../styles/globals.scss'
import '../styles/shapes.scss'
import '../styles/tiles.scss'
import '../styles/main.scss'
import '../styles/contacts.scss'
import '../styles/projects.scss'
import '../styles/modal.scss'
import '../styles/imagesContainer.scss'
import '../styles/form.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
