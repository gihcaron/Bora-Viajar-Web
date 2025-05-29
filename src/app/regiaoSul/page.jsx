"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import axios from "axios";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { toast } from "react-toastify";
import PlaceCard from "../../components/PlaceCard";
import styles from "./sul.module.css";

export default function Noticias() {
  const [loading, setLoading] = React.useState(true);
  
  const [data, setData] = useState({
        touristicPoints: [], 
        loading: true,
        current: 1,
    });

   useEffect (() => {
        const fetchSul = async () => {
            try{
              const { data : regions } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/regions`,);
              const sulPoints = regions.filter((region) => region.region === "Sul");
                
            
                setData({touristicPoints: sulPoints,
                  loading: false, 
                  current: 1});
                }
                catch(error){
                  console.error("Erro ao buscar sul:", error);
                  toast.error("Erro ao buscar sul");
                  setData((d) => ({...d, loading: false}));
            }
        };
        fetchSul();
        
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
          <h1 className={styles.subtitleBanner}>Região Sul</h1>
          <h2 className={styles.titleBanner}> Descubra os melhores destinos</h2>
        </div>
      </div>

      <div className={styles.BlueScreen}></div>

      <div className={styles.CityContainer}>

        <div className={styles.HeaderContainer}>
          <h1 className={styles.TitleHeder}>Colecione momentos no</h1>
          <h2 className={styles.TitleLocal}>Sul</h2>
          <p className={styles.TextContent}>
            A Região Sul do Brasil é conhecida por suas paisagens deslumbrantes, clima mais ameno, rica herança cultural e culinária marcante. Com cidades acolhedoras, belas praias, serras e tradições únicas, o Sul oferece experiências inesquecíveis para todos os tipos de viajantes.
          </p>

        <div className={styles.touristicPoint}>      
        {data.touristicPoints.map((regions) => (
          <PlaceCard
            key={regions.id}
            name={regions.name}
            image={regions.image}
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
