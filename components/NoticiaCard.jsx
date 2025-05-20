import styles from "../styles/noticaCard.module.css";

import Image from 'next/image';


const NoticiaCard = ({photo, info, name, text, link}) => {

    const handleClick = () => {
       if (link) router.push(link);
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
        <h3 className={styles.titulo}>{name}</h3>
        <p className={styles.descricao}>{text}</p>
      </div>
    </div>
  );
};

export default NoticiaCard;
