"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import NoticiaCard from "../../components/NoticiaCard";
import Footer from "../../components/Footer";
import styles from "./Noticias.module.css";
import axios from "axios";

const regions = ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"];

export default function Noticias() {
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [allRegions, setAllRegions] = useState([]);

  const fetchRegions = async (region = "") => {
    setIsLoading(true);
    try {
      const baseURL = region
        ? "http://localhost:3000"
        : "http://localhost:4000";
      const url = `${baseURL}/api/regions/${region}`;
      const response = await axios.get(url);
      setRegions(response.data);
      if (!region) {
        setAllRegions(response.data);
      }
    } catch (error) {
      console.error("Erro ao carregar regiões:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRegions();
  }, []);

  const resetFilter = () => fetchRegions();

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
      </div>

      <div className={styles.destinoSection}>
        <div className={styles.ContentContainer}>
          <h1 className={styles.Title}>Conheça os melhores destinos</h1>
          <p className={styles.Text}>
            Confira abaixo os melhores lugares para a sua próxima viagem!
          </p>
        </div>

        <div>
          {regions.map((regions) => (
            <button
              key={regions}
              className={styles.button}
              onClick={() => {
                fetchRegions(regions);
              }}
            ></button>
          ))}
          <button className={styles.buttonReset} onClick={resetFilter}>
            Mostrar Todos
          </button>
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
        </div>
      </div>

      <div className={styles.AnuncioSection}>
        <div className={styles.AnuncioContent}>
          <h1 className={styles.AnuncioTitle}>Colecione momentos</h1>
          <h1 className={styles.Highlight}>com o Bora!</h1>
          <p className={styles.AnuncioText}>
            Descubra destinos incríveis e torne sua próxima viagem inesquecível!
            Escolha agora o lugar perfeito para criar memórias que durarão para
            sempre. Vamos planejar juntos de forma segura e inesquecível?
          </p>
        </div>
        <div className={styles.AnuncioImage}>
          <Image
            src="/rio-redirecionamento.jpg"
            alt="Imagem de Anúncio"
            width={200}
            height={300}
            className={styles.AnuncioImg}
          />
          <Image
            src="/rio-redirecionamento.jpg"
            alt="Imagem de Anúncio"
            width={200}
            height={300}
            className={styles.AnuncioImg}
          />
          <Image
            src="/rio-redirecionamento.jpg"
            alt="Imagem de Anúncio"
            width={200}
            height={300}
            className={styles.AnuncioImg}
          />
        </div>
      </div>
      <div className={styles.NoticiasSection}>
        <div className={styles.ContentContainer}>
          <h1 className={styles.NoticiasTitle}>Conheça os melhores destinos</h1>
          <p className={styles.NoticiasText}>
            Confira abaixo os melhores lugares para a sua próxima viagem!
          </p>
        </div>

        <div className={styles.NoticiasCard}>
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

      <Footer />
    </div>
  );
}
