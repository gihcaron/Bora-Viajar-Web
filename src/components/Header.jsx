import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';
import Image from 'next/image';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOutsideClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.topBar}>
        <div className={styles.logo}>
         <Link href="/feed" className={styles.logo}>
  <Image src="/logo.png" alt="Logo Bora" className={styles.logoImage}    width={100}
            height={100}/>
</Link>
        </div>

        <div className={styles.searchBox}>
          <Image src="/lupa.png"
            alt="Buscar"
            className={styles.searchIcon}
            width={20}
            height={20}
          />
          <input type="text" placeholder="Pesquisar" className={styles.searchInput} />
        </div>

        <button className={styles.menuButton} onClick={toggleMenu}>
          <Image src="/menu.png"
            alt="MENU.png"
            className={styles.menuIcon}
            width={30}
            height={30}
          />
        </button>

       <Link href="/login" className={styles.loginLink}>Iniciar sessão</Link>
      </div>

      <nav className={`${styles.navBar} ${menuOpen ? styles.open : ''}`}>
        <Link href="/noticias" className={styles.navLink}>Noticias</Link>
        <Link href="/sobre-nos" className={styles.navLink}>Sobre Nós</Link>
        <Link href="/feed" className={styles.navLink}>Feed</Link>
        <Link href="/contato" className={styles.navLink}>Contato</Link>
      </nav>
    </div>
  );
};

export default Header;