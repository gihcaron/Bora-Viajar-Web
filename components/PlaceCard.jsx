"use client";

import Image from "next/image";
import styles from "../styles/PlaceCard.module.css";

const PlaceCard = ({PlaceName, PlaceImage, PlaceDescription}) => {

  return (
    <div className={styles.Place}>

          <h1 className={styles.TitlePlace}>{PlaceName}</h1>
          <Image
            className={styles.ImagePlace}
            src={PlaceImage}
            alt="São Paulo"
            width={800}
            height={200}
            priority
          />
          <p className={styles.TextPlace}>
            {PlaceDescription}
          </p>

        </div>    
  );
}

export default PlaceCard;