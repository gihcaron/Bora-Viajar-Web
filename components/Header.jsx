import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.topBar}>
        <div className={styles.logo}>
        <img src="/logo.png" alt="Logo Bora" className={styles.logoImage} />  </div>
{/*TROCAR o img pelo oq o Map ensinou*/}

        <div className={styles.searchBox}>
{          /*<Image src="/icone/lupa.png" alt="Buscar" className={styles.searchIcon} />*/}  <img src="/lupa.png" alt="Buscar" className={styles.searchIcon} />
  <input type="text" placeholder="Pesquisar" className={styles.searchInput} />
</div>

{/*<link href="/login" className={styles.loginLink}>Iniciar sessão</link>*/}   
     <a href="/login" className={styles.loginLink}>Iniciar Sessão</a>

<a href="/login">
  <img src="/MENU.png" alt="Menu Icon" className={styles.menuIcon} />
</a>
      </div>  

<nav className={styles.navBar}>
  <Link href="/noticias" className={styles.navLink}>Noticias</Link>
  <Link href="/home" className={styles.navLink}>Mais procurados</Link>
  <Link href="/sobre-nos" className={styles.navLink}>Sobre Nós</Link>
  <Link href="/feed" className={styles.navLink}>Feed</Link>
  <Link href="/home" className={styles.navLink}>Contato</Link>
  <Link href="/home" className={styles.navLink}>Home</Link>
      </nav>
    </div>
  );
};

export default Header;