import { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Navigation from '../components/Navigation';
import '../styles/globals.css';
import '../styles/navigation.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [modalPhase, setModalPhase] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div>
      <Head>
        <title>
          Lit Classifieds
          <link rel="icon" href="/favicon.ico" />
        </title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </div>
  )
};

export default MyApp;
