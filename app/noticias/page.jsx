"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import NoticiaCard from "../../components/NoticiaCard";
import styles from "../../styles/Noticias.module.css";

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

  const cardData = {
    photo: "/rio-redirecionamento.jpg",
    info: "Descrição da imagem",
    title: "Título do Card",
    description: "Descrição do Card",
    link: "/noticias",
  };

  return (
    <div className={styles.Container}>
      <Header bannerTitle={"BORA VIAJAR"} />

      <div className={styles.bannerContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.titleBanner}> Planeje os melhores momentos</h2>
          <h1 className={styles.subtitleBanner}>Bora viajar!</h1>
        </div>
        <button className={styles.buttonBanner}>Comece Já!</button>
      </div>

      <div className={styles.destinoSection}>
        <div className={styles.ContentContainer}>
          <h1 className={styles.Title}>Conheça os melhores destinos</h1>
          <p className={styles.Text}>
            Confira abaixo os melhores lugares para a sua próxima viagem!
          </p>
        </div>

        <div className={styles.destinoCard}>

            <NoticiaCard 
            photo={cardData.photo}
            info={cardData.info}
            title={cardData.title}
            description={cardData.description}
             />
            <NoticiaCard 
            photo={cardData.photo}
            info={cardData.info}
            title={cardData.title}
            description={cardData.description}
             />
            <NoticiaCard 
            photo={cardData.photo}
            info={cardData.info}
            title={cardData.title}
            description={cardData.description}
             />
            <NoticiaCard 
            photo={cardData.photo}
            info={cardData.info}
            title={cardData.title}
            description={cardData.description}
             />
            <NoticiaCard 
            photo={cardData.photo}
            info={cardData.info}
            title={cardData.title}
            description={cardData.description}
             />
            <NoticiaCard 
            photo={cardData.photo}
            info={cardData.info}
            title={cardData.title}
            description={cardData.description}
             />
            <NoticiaCard 
            photo={cardData.photo}
            info={cardData.info}
            title={cardData.title}
            description={cardData.description}
             />
            <NoticiaCard 
            photo={cardData.photo}
            info={cardData.info}
            title={cardData.title}
            description={cardData.description}
             />

           
        </div>

      </div>
    </div>
  );
}
