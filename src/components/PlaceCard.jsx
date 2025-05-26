"use client";

import Image from "next/image";
import styles from "../styles/PlaceCard.module.css";

const PlaceCard = ({name, PlaceImage, text, links, alt}) => {

  return (
    <div className={styles.Place}>

          <h1 className={styles.TitlePlace}>{name}/</h1>
          <Image
            className={styles.ImagePlace}
            src={PlaceImage}
            alt={alt}
            width={800}
            height={200}
            priority
          />
          <p className={styles.TextPlace}>
            {text}
          </p>

        <div className={styles.LinkContainer}>
        <a
          href={links}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.LinkButton}
        >
          Ver mais sobre {name}
        </a>
      </div>

        </div>    
  );
}

export default PlaceCard;