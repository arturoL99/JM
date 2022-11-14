import '../styles/globals.scss'
import '../src/components/Shapes/shapes.scss'
import '../src/components/Tiles/tiles.scss'
import '../src/components/Main/main.scss'
import '../src/components/Contact/contacts.scss'
import '../src/components/Projects/projects.scss'
import '../src/components/Contact/modal.scss'
import '../src/components/Projects/ProjectsContainer.scss'
import '../src/components/Contact/form.scss'
import '../src/components/Arrow/arrow.scss'
import '../styles/test.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
