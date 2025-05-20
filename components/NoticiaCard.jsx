import styles from "../styles/noticaCard.module.css";

import Image from 'next/image';
import { useRouter } from "next/router";


const NoticiaCard = ({photo, info, title, description, link}) => {
 
    const handleClick = () => {
      router.push(link); // Redireciona para a 
    };

  return (
    <div className={styles.card} onClick={handleClick} style={{ cursor: "pointer" }}>
      <Image
        className={styles.CardImage}
        src= {photo}
        alt={info}
        width={350}
        height={240}
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
