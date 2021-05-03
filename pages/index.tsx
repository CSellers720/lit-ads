import styles from '../styles/Home.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Listing from '../components/Listing';

export default function Home() {
  const [listings, setListings] = useState<any>(null);
  useEffect(() => {
    axios.get('/api/listings/')
      .then((data) => {
        setListings(data.data);
      });
  }, [])

  return (
    <div className={styles.container}>
      {listings &&
        listings.map((data) => (
          <Listing userData={data} />
        ))
      }
    </div>
  )
};
