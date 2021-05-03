import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import styles from '../styles/Listing.module.css';
import ShowMoreText from 'react-show-more-text';

function Listing({ userData: { phase0, phase1, phase2 } }): JSX.Element {
  const [tagList, setTagList] = useState<Array<string>>([]);
  
  useEffect(() => {
    let tags: Array<string> = [];
    for (let k in phase2.tags) {
      if (phase2.tags[k].checked) {
        tags.push(k);
      }
    }
    setTagList(tags);
  });

  const listing = 
    <Card className={styles.card}>
      <Card.Img
        variant="top"
        src={phase1.previewUrl}
        className={styles.cardImg}
      />
      <Card.Body>
        <Card.Title>{phase0.title}</Card.Title>
        <Card.Subtitle>
          {phase0.listing}:
          <span className={styles.category}>
            {phase0.category}
          </span>
          <span className={styles.price}>
            ${new Intl.NumberFormat('en-US').format(phase2.price)}
          </span>
        </Card.Subtitle>
        <Card.Subtitle className={styles.condition}>
          Condition: {phase2.condition}%
        </Card.Subtitle>
        <ShowMoreText
          lines={3}
          more="show more"
          less="show less"
          expanded={false}
          width={300}
          className={styles.description}
        >
          {phase1.description}
        </ShowMoreText>
        <Card.Text>
          Contact:
          <span className={styles.email}>
            {phase2.email}
          </span>
        </Card.Text>
        <Card.Text className={styles.expiry}>
          Listing expires {phase1.date.toLocaleDateString()}
        </Card.Text>
        <Card.Text>
          Tags:
          <br />
          {tagList.map((tag, index, arr) => {
            if (index !== arr.length - 1) {
              return <span className={styles.tagList}>{tag}, </span>
            }
            return <span className={styles.tagList}>{tag}</span>
          })}
        </Card.Text>
      </Card.Body>
    </Card>

  return listing;
};

export default Listing;
