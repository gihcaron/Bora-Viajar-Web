"use client";

import Image from "next/image";
import styles from "../styles/PlaceCard.module.css";
import { useState } from "react";

const PlaceCard = ({name, image, text, links, alt,}) => {
  
  return (
    <div className={styles.Place}>

          <h1 className={styles.TitlePlace}>{name}</h1>
          <Image
            className={styles.ImagePlace}
            src={`http://localhost:3000/uploads/` + image}
            alt={alt}
            width={800}
            height={200}
            priority
          />
          <p className={styles.TextPlace}>
            {text}
          </p>
        <div className={styles.LinkContainer}>
          { links && (
        <a
          href={links}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.LinkButton}
        >
          Ver mais sobre {name} 
        </a>
          )}
      </div>

        </div>    
  );
}

export default PlaceCard;