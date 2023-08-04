import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import  { store } from '../store/index';
import Layout from '../components/Layout';


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
