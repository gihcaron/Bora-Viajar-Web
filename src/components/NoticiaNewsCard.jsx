import styles from "../styles/noticaCard.module.css";

import Image from 'next/image';


const NewsCard = ({photo, info, place, name, onClick}) => {


  return (
    <div className={styles.card} 
    onClick={onClick} 
    style={{ cursor: "pointer" }}
    >
      <Image
        className={styles.CardImage}
        src= {photo}
        alt={name}
        width={350}
        height={300}
        priority={true}
      />
      <div className={styles.overlay}></div>
      <div className={styles.cardSection}>
        <h3 className={styles.titulo}>{place}</h3>
        <p className={styles.descricao}>{name}</p>
      </div>
    </div>
  );
};

export default NewsCard;
