import Head from 'next/head';
import '../styles/globals.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
      <Head>
        <title>
          Lit Classifieds
          <link rel="icon" href="/favicon.ico" />
        </title>
      </Head>

      <Component {...pageProps} />
    </div>
  )
};

export default MyApp;
