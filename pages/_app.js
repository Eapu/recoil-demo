import { RecoilRoot } from 'recoil'
import './styles.css'
import 'semantic-ui-css/semantic.min.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

