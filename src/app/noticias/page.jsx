"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import NoticiaCard from "../../components/NoticiaCard";
import Footer from "../../components/Footer";
import { Pagination, Modal, Skeleton } from "antd";
import NoticiaNewsCard from "../../components/NoticiaNewsCard";
import styles from "./Noticias.module.css";
import axios from "axios";

export default function Noticias() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [allNews, setAllNews] = useState([]);
  const router = useRouter();
  const cardsPerPage = 3;

  // Regiões
  const [data, setData] = useState({
    current: 1,
    pageSize: cardsPerPage,
    destinos: [
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
        link: "/regiaoNordeste",
      },

      {
        photo: "/centro.jpg",
        info: "Imagem região Centro-Oeste",
        title: "Centro-Oeste",
        description: "Principais destinos da região Centro-Oeste",
        link: "/regiaoCentroOeste",
      },

      {
        photo: "/sudeste.jpg",
        info: "Imagem região Sudeste",
        title: "Sudeste",
        description: "Principais destinos da região Sudeste",
        link: "/regiaoSudeste",
      },

      {
        photo: "/sul.jpg",
        info: "Imagem região Sul",
        title: "Sul",
        description: "Principais destinos da região Sul",
        link: "/regiaoSul",
      },
    ],
  });

  const [dataNews, setDataNews] = useState({
    current: 1,
    pageSize: cardsPerPage,
    news: [],
  });

  const [modalInfo, setModalInfo] = useState({
    visible: false,
    news: null,
    name: null,
    photo: null,
    place: null,
    text: null,
  });

  const fetchNews = async (news = "") => {
    setIsLoading(true);

    try {
      const { data: newsData } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/news`
      );
      setNews(newsData);
      setDataNews((prev) => ({
        ...prev,
        news: newsData || [],
      }));
      if (!newsData) {
        setAllNews([]);
      } else {
        setAllNews(newsData);
      }
    } catch (error) {
      console.error("Erro ao carregar notícias:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = async (news) => {
    setModalInfo({
      visible: true,
      news: null,
      loading: true,
    });

    try {
      const { data: newsData } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/news/${news.id}`
      );
      setModalInfo((m) => ({
        ...m,
        news,
        loading: false,
      }));
    } catch (error) {
      setModalInfo((m) => ({ ...m, loading: false }));
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const paginatedDestinos = () => {
    const start = (data.current - 1) * data.pageSize;
    return data.destinos.slice(start, start + data.pageSize);
  };

  const paginatedNews = () => {
    const start = (dataNews.current - 1) * dataNews.pageSize;
    return dataNews.news.slice(start, start + data.pageSize);
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

        <div className={styles.CardContainer}>
          {paginatedDestinos().map((destino, id) => (
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
        <div className={styles.PaginationContainer}>
          <Pagination
            className={styles.Pagination}
            defaultCurrent={1}
            current={data.current}
            pageSize={data.pageSize}
            total={data.destinos.length}
            onChange={(page, size) => {
              setData((d) => ({ ...d, current: page, pageSize: size }));
            }}
          />
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
            src="/surf.jpg"
            alt="Imagem de Anúncio"
            width={200}
            height={300}
            className={styles.AnuncioImg}
          />
          <Image
            src="/paraty.jpg"
            alt="Imagem de Anúncio"
            width={200}
            height={300}
            className={styles.AnuncioImg}
          />
          <Image
            src="/rua-brasil.jpg"
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
          <div className={styles.NoticiasCardContainer}>
            {paginatedNews().map((news) => (
              <NoticiaNewsCard
                key={news.id}
                photo={news.photo ? news.photo : "/noticia.jpeg"}
                info={news.name}
                place={news.place}
                name={news.name}
                link={`/news/${news.id}`}
                onClick={() => openModal(news)}
              />
            ))}
          </div>

          {/* Modal */}

          <Modal
            className={styles.Modal}
            open={modalInfo.visible}
            onOk={() =>
              setModalInfo({
                visible: false,
                news: null,
                name: null,
                photo: null,
                place: null,
                text: null,
              })
            }
            onCancel={() =>
              setModalInfo({
                visible: false,
                news: null,
                name: null,
                photo: null,
                place: null,
                text: null,
              })
            }
            width={{
              xs: "90%",
              sm: "80%",
              md: "70%",
              lg: "60%",
              xl: "50%",
              xxl: "40%",
            }}
            okButtonProps={{
              style: { backgroundColor: "#109191", color: "#fff" },
            }}
            cancelButtonProps={{
              style: { border: "#109191 1px solid", color: "#109191" },
            }}
          >
            {modalInfo.loading ? (
              <Skeleton active />
            ) : (
              modalInfo.news && (
                <div className={styles.ModalContent}>
                  <div className={styles.ModalImageContainer}>
                    <Image
                      src={modalInfo.news.photo || "/noticia.jpeg"}
                      alt={modalInfo.news.name}
                      width={200}
                      height={200}
                      className={styles.ModalImage}
                    />
                  </div>
                  <h2 className={styles.ModalTitle}>{modalInfo.news.name}</h2>
                  <div className={styles.Place}>
                    <p className={styles.ModalPlace}>{modalInfo.news.place}</p>
                  </div>
                  <p className={styles.ModalText}>{modalInfo.news.text}</p>
                </div>
              )
            )}
          </Modal>

          <div className={styles.PaginationContainer}>
            <Pagination
              className={styles.Pagination}
              defaultCurrent={1}
              current={dataNews.current}
              pageSize={dataNews.pageSize}
              total={dataNews.news.length}
              onChange={(page, size) => {
                setDataNews((prev) => ({
                  ...prev,
                  current: page,
                  pageSize: size,
                }));
              }}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
