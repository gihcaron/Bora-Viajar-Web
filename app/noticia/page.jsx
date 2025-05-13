"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./Noticia.module.css";

export default function Noticias() { 
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }



  return (
    <div className={styles.Container}>
      <Header bannerTitle={"BORA VIAJAR"} />

      <div className={styles.bannerContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.subtitleBanner}>São Paulo</h1>
          <h2 className={styles.titleBanner}> Descubra os melhores destinos</h2>
        </div>
      </div>

    <div className={styles.BlueScreen}></div>

    <div className={styles.ContentContainer}>

    <div className={styles.HeaderContainer}>
        <h1 className={styles.TitleHeder}>Colecione momentos em</h1>
        <h2 className={styles.TitleLocal}>São Paulo</h2>
        <p className={styles.TextContent}>
          São Paulo é uma cidade vibrante e cheia de vida, conhecida por sua diversidade cultural, gastronômica e artística. Com uma infinidade de atrações, desde museus renomados até parques exuberantes, a cidade oferece algo para todos os gostos. Não deixe de visitar o icônico Parque Ibirapuera, o Museu de Arte de São Paulo (MASP) e a Avenida Paulista, que é o coração pulsante da cidade. Além disso, a cena gastronômica é imperdível, com opções que vão desde a tradicional pizza paulistana até restaurantes estrelados. Venha explorar tudo o que São Paulo tem a oferecer!
        </p>

        </div>
    </div>

      
      <Footer />
    
    </div>
  );
}
