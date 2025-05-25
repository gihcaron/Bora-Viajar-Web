"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import NoticiaCard from "../../components/NoticiaCard";
import Footer from "../../components/Footer";
import styles from "./Noticias.module.css";
import axios from "axios";


export default function Noticias() {
  const [loading, setLoading] = React.useState(true);
  const [regions, setRegions] = useState([]);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [allRegions, setAllRegions] = useState([]);
  const [current, setCurrent] = useState(0);
  const router = useRouter();


//   const fetchRegions = async (region = "") => {
//     setIsLoading(true);

//      try {
//       const url = `http://localhost:3000/api/regions/`;
//       const response = await axios.get(url);
//       setRegions(response.data);
//       if (!region) {
//         setAllRegions(response.data);
//       }
//     } catch (error) {
//       console.error("Erro ao carregar regiões:", error);
//     } finally {
//       setIsLoading(false);
//     }
    
//   }

//   useEffect(() => {
//   fetchRegions();
// }, []);

//   const fetchNews = async (regions = "") => {
//     setIsLoading(true);

//      try {
//       const url = `http://localhost:3000/api/news/`;
//       const response = await axios.get(url);
//       setNews(response.data);
//       if (!news) {
//         setAllNews(response.data);
//       }
//     } catch (error) {
//       console.error("Erro ao carregar Noticia:", error);
//     } finally {
//       setIsLoading(false);
//     }
    
//   }

//   useEffect(() => {
//   fetchNews();
// }, []);



  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  // Regiões

const destinos = [
  
  {
    photo: "/norte.jpg",
    info: "Imagem região Norte",
    title: "Norte",
    description: "Principais destinos da região Norte",
    link: "/regiaoNorte",
  },

 {
    photo: "/nordeste.jpg",
    info: "Imagem região Nordeste",
    title: "Nordeste",
    description: "Principais destinos da região Nordeste",
  },

  {
    photo: "/centro.jpg",
    info: "Imagem região Centro-Oeste",
    title: "Centro-Oeste",
    description: "Principais destinos da região Centro-Oeste",
  },

  {
    photo: "/sudeste.jpg",
    info: "Imagem região Sudeste",
    title: "Sudeste",
    description: "Principais destinos da região Sudeste",
  },

  {
    photo: "/sul.jpg",
    info: "Imagem região Sul",
    title: "Sul",
    description: "Principais destinos da região Sul",
  },
];
  const cardData = {
    photo: "/rio-redirecionamento.jpg",
    info: "Descrição da imagem",
    title: "Título do Card",
    description: "Descrição do Card",
    link: "/noticia",
  };
  
  const cardsPorPagina = 3;
 const totalPaginas = Math.ceil(destinos.length / cardsPorPagina);

  function nextCard() {
    setCurrent((prev) =>
      prev + cardsPorPagina >= destinos.length ? 0 : prev + cardsPorPagina
    );
  }

  function prevCard() {
    setCurrent((prev) =>
      prev - cardsPorPagina < 0
        ? (totalPaginas - 1) * cardsPorPagina
        : prev - cardsPorPagina
    );
  }

  const cardsParaExibir = [];
  for (let i = 0; i < cardsPorPagina; i++) {
    const id = (current + i) % destinos.length;
    cardsParaExibir.push(destinos[id]);
  }


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

        <div className={styles.destinoCard}>
               {cardsParaExibir.map((destino, id) => (
            <NoticiaCard
              key={destino.title + id}
              photo={destino.photo}
              info={destino.info}
              title={destino.title}
              description={destino.description}
              onClick={() => router.push(destino.link)}
            />
          ))}
        </div>
        <div
          className={styles.PaginationButtons}
         
        >
          <button 
          className={styles.button} 
          onClick={prevCard}>
          Anterior
          </button>

          <span className={styles.pageInfo}>
            {Math.floor(current / cardsPorPagina) + 1} / {totalPaginas}
          </span>

          <button 
          className={styles.button} 
          onClick={nextCard}>
            Próximo
          </button>
        </div>

      </div>

      {/* Seção com Anúncio */}
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
