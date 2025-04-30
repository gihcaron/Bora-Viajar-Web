"use client";

import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
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
        <div className={styles.DestinoContainer}>
            <div className={styles.ContentContainer}>
            <h1 className={styles.Title}>Conheça os melhores destinos</h1>
            <p className={styles.Text}>Confira abaixo os melhores lugares para a sua próxima viagem!</p>
            </div>
        </div>
        <div className={styles.destinoCard}>

        </div>
      </div>
    </div>
  );
}
