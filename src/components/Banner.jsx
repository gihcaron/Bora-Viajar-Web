import styles from '../styles/Banner.module.css';
import Image from 'next/image';

const Banner = ({ imgSrc, imgAlt, text, reversed }) => {
    return (
        <div className={`${styles.banner} ${reversed ? styles.reversed : ''}`}>
            <div className={styles.imageContainer}>
        <Image
        src={imgSrc}
        alt={imgAlt}
        width={600}
        height={400}
        className={styles.image}
        />
        </div>
        <div className={styles.textContainer}>
        <p>{text}</p>
        </div>
    </div>
    );
}

export default Banner; 