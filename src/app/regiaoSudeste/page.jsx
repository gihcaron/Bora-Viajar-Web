"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import axios from "axios";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { toast } from "react-toastify";
import PlaceCard from "../../components/PlaceCard";
import styles from "./Sudeste.module.css";

const Headers = {"x-api-key" : process.env.NEXT_PUBLIC_API_KEY};


export default function Noticias() {
  const [loading, setLoading] = React.useState(true);
  
  const [data, setData] = useState({
        touristicPoints: [], 
        loading: true,
        current: 1,
    });

   useEffect (() => {
        const fetchSudeste = async () => {
            try{
              const { data : regions } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/regions`,
              {
                headers: Headers,
              }
              );
              const sudestePoints = regions.filter((region) => region.region === "Sudeste");
                
            
                setData({touristicPoints: sudestePoints,
                  loading: false, 
                  current: 1});
                }
                catch(error){
                  console.error("Erro ao buscar sudeste:", error);
                  toast.error("Erro ao buscar sudeste");
                  setData((d) => ({...d, loading: false}));
            }
        };
        fetchSudeste();
        
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
          <h1 className={styles.subtitleBanner}>Região Sudeste</h1>
          <h2 className={styles.titleBanner}> Descubra os melhores destinos</h2>
        </div>
      </div>

      <div className={styles.BlueScreen}></div>

      <div className={styles.CityContainer}>

        <div className={styles.HeaderContainer}>
          <h1 className={styles.TitleHeder}>Colecione momentos no</h1>
          <h2 className={styles.TitleLocal}>Sudeste</h2>
          <p className={styles.TextContent}>
            A Região Sudeste do Brasil é conhecida por sua diversidade cultural, econômica e natural. Composta pelos estados de São Paulo, Rio de Janeiro, Minas Gerais e Espírito Santo, reúne grandes metrópoles, cidades históricas, belas praias e paisagens de montanha. É um destino que oferece experiências para todos os gostos, desde roteiros urbanos e gastronômicos até aventuras em meio à natureza e ao patrimônio histórico.
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
