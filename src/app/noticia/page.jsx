"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PlaceCard from "../../components/PlaceCard";
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

      <div className={styles.CityContainer}>

        <div className={styles.HeaderContainer}>
          <h1 className={styles.TitleHeder}>Colecione momentos em</h1>
          <h2 className={styles.TitleLocal}>São Paulo</h2>
          <p className={styles.TextContent}>
            São Paulo é uma cidade vibrante e cheia de vida, conhecida por sua diversidade cultural, gastronômica e artística. Com uma infinidade de atrações, desde museus renomados até parques exuberantes, a cidade oferece algo para todos os gostos!
          </p>

        <PlaceCard
          PlaceName="Avenida Paulista"
          PlaceImage="/rio-redirecionamento.jpg"
          PlaceDescription="A Avenida Paulista é um dos principais cartões-postais de São Paulo, conhecida por sua arquitetura moderna, museus, centros culturais e uma variedade de opções de compras e gastronomia. É um local vibrante que reflete a diversidade e a energia da cidade."
        />
        <PlaceCard
          PlaceName="Avenida Paulista"
          PlaceImage="/rio-redirecionamento.jpg"
          PlaceDescription="A Avenida Paulista é um dos principais cartões-postais de São Paulo, conhecida por sua arquitetura moderna, museus, centros culturais e uma variedade de opções de compras e gastronomia. É um local vibrante que reflete a diversidade e a energia da cidade."
        />
        <PlaceCard
          PlaceName="Avenida Paulista"
          PlaceImage="/rio-redirecionamento.jpg"
          PlaceDescription="A Avenida Paulista é um dos principais cartões-postais de São Paulo, conhecida por sua arquitetura moderna, museus, centros culturais e uma variedade de opções de compras e gastronomia. É um local vibrante que reflete a diversidade e a energia da cidade."
        />
        <PlaceCard
          PlaceName="Avenida Paulista"
          PlaceImage="/rio-redirecionamento.jpg"
          PlaceDescription="A Avenida Paulista é um dos principais cartões-postais de São Paulo, conhecida por sua arquitetura moderna, museus, centros culturais e uma variedade de opções de compras e gastronomia. É um local vibrante que reflete a diversidade e a energia da cidade."
        />
        </div>


      </div>

      <Footer />

    </div>
  );
}
