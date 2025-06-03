"use client";

import Icon from "@ant-design/icons";
import styles from "./../styles/Footer.module.css";

import FooterLinks from "./FooterLinks";

const Footer = () => {
  const links = [
    { url: "/feed", text: "Feed" },
    { url: "/noticias", text: "Noticias" },
    { url: "/sobre-nos", text: "Sobre Nós" },
    { url: "/contato", text: "Contato" },
  ];

  const Redes = [
    { url: "#", text: "📸 Instagram" },
    { url: "#", text: "🎵 TikTok" },
    { url: "#", text: "🦜 Twitter" },
    { url: "#", text: "📼 YouTube" },
  ];

  return (
    <div className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.text_container}>
          <div className={styles.brand}>
            <h1 className={styles.logo}>
              {" "}
              Bora<span className={styles.highlight}>Viajar ✈️🌍</span>
            </h1>
          </div>
          <p className={styles.contentTitle}>Onde histórias ganham vida!</p>
          <p className={styles.content}>
            Viva a magia de colecionar momentos, com as melhores viagens nacionais com as melhores companhias. Se junte com a gente, vem pro Bora Viajar!
          </p>
        </div>

        <FooterLinks linkTitle="Links Rápidos" linkList={links} />

        <FooterLinks linkTitle="Redes Sociais" linkList={Redes} />
      </div>

      <div className={styles.footer_bottom}>
        <p>
          {" "}
          © {new Date().getFullYear()}BoraViajar. Todos os direitos reservados.
        </p>

        <div className={styles.Bottom_Link}>
          <a href="#">Termos de Uso</a>
          <a href="#">Política de Privacidade</a>
          <a href="#">Política de Cookies</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
