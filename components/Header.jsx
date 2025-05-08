import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.topBar}>
        <div className={styles.logo}>
        <img src="/logo.png" alt="Logo Bora" className={styles.logoImage} />        </div>

        <div className={styles.searchBox}>
  <img src="/lupa.png" alt="Buscar" className={styles.searchIcon} />
  <input type="text" placeholder="Pesquisar" className={styles.searchInput} />
</div>

        <a href="/login" className={styles.loginLink}>Iniciar sessão</a>

        <div className={styles.menuIcon}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>

      <nav className={styles.navBar}>
        <a href="/home" className={styles.navLink}>Notícias</a>
        <a href="/home" className={styles.navLink}>Mais Procurados</a>
        <a href="/home" className={styles.navLink}>Sobre Nós</a>
        <a href="/home" className={styles.navLink}>Feed</a>
        <a href="/home" className={styles.navLink}>home</a>
        <a href="/home" className={styles.navLink}>home</a>
      </nav>
    </div>
  );
};

export default Header;