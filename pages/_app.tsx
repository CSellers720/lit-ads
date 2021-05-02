import { useState } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Navigation from '../components/Navigation';
import ListingModal from '../components/ListingModal';
import { UserData, ListingCategory, ListingType } from '../components/interfaces';
import '../styles/globals.css';
import '../styles/navigation.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [modalPhase, setModalPhase] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({
    phase0: {
      title: '',
      listing: ListingType.Null,
      category: ListingCategory.Null,
    },
    phase1: {
      image: null,
      previewUrl: '',
      description: '',
      date: null,
    },
    phase2: {
      price: 0,
      condition: 4,
      tags: [null],
      email: '',
    },
  });
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
      <Navigation 
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <ListingModal
        showModal={showModal}
        modalPhase={modalPhase}
        userData={userData}
        setShowModal={setShowModal}
        setModalPhase={setModalPhase}
        setUserData={setUserData}
      />
      <Component {...pageProps} />
    </div>
  )
};

export default MyApp;
