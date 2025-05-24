"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import axios from "axios";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PlaceCard from "../../components/PlaceCard";
import styles from "./Regioes.module.css";

export default function Noticias() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = useState({
        touristicPoints: [], 
        loading: true,
        current: 1,
    });

   useEffect (() => {
        const fetchNorte = async () => {
            try{
              const { data : regions } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/regions`,);
              const nortePoints = regions.filter((region) => region.region === "Norte");
                
                
                setData({touristicPoints: nortePoints,
                  loading: false, 
                  current: 1});
                }
                catch(error){
                  console.error("Erro ao buscar norte:", error);
                  toast.error("Erro ao buscar norte");
                  setData((d) => ({...d, loading: false}));
            }
        };
        fetchNorte();
        
},[])

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
          <h1 className={styles.subtitleBanner}>Região Norte</h1>
          <h2 className={styles.titleBanner}> Descubra os melhores destinos</h2>
        </div>
      </div>

      <div className={styles.BlueScreen}></div>

      <div className={styles.CityContainer}>

        <div className={styles.HeaderContainer}>
          <h1 className={styles.TitleHeder}>Colecione momentos no</h1>
          <h2 className={styles.TitleLocal}>Norte</h2>
          <p className={styles.TextContent}>
            A Região Norte do Brasil é um destino fascinante, repleto de belezas naturais, cultura rica e biodiversidade única. Com suas florestas tropicais exuberantes, rios majestosos, essa região oferece uma experiência inesquecível para os viajantes que buscam aventura e conexão com a natureza.
          </p>

        <div className={styles.touristicPoint}>      
        {data.touristicPoints.map((regions) => (
          <PlaceCard
            key={regions.id}
            name={regions.name}
            PlaceImage={regions.photo}
            text={regions.text}
            links={regions.links}
            alt={regions.alt || `Imagem de ${regions.name}`}
          />
        ))}
        </div>  
        </div>


      </div>

      <Footer />

    </div>
  );
}
