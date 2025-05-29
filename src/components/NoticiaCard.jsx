import styles from "../styles/noticaCard.module.css";

import Image from 'next/image';


const NoticiaCard = ({photo, info, title, description, onClick}) => {


  return (
    <div className={styles.card} 
    onClick={onClick} 
    style={{ cursor: "pointer" }}
    >
      <Image
        className={styles.CardImage}
        src= {photo}
        alt={info}
        width={350}
        height={250}
        priority={true}
      />
      <div className={styles.overlay}></div>
      <div className={styles.cardSection}>
        <h3 className={styles.titulo}>{title}</h3>
        <p className={styles.descricao}>{description}</p>
      </div>
    </div>
  );
};

export default NoticiaCard;
