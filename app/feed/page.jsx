'use client';

import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Loader from "../../components/Loader";
import Banner from "../../components/Banner"; 
import styles from "../../styles/Header.module.css";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

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
    <div style={styles.container}>
      <Header bannerTitle={"BORA VIAJAR"} />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px", 
          backgroundColor: "#e6e6e6",
          marginBottom: "15px", 
        }}
      >
        <img
          src="/escadaria-Selaron.jpeg"
          alt="Escadaria colorida"
          style={{ width: "25%", borderRadius: "8px" }} />
        <p style={{ width: "65%", fontSize: "16px", lineHeight: "1.4", fontFamily: "poppins" }}> 
        Somos um grupo de jovens apaixonados por programação e por explorar o mundo. Acreditamos que viajar é mais do que apenas conhecer novos destinos — é uma experiência que conecta culturas, pessoas e emoções. Unindo nossa paixão pela tecnologia e pelo turismo, criamos um site inovador que vai além dos tradicionais roteiros e pontos turísticos. 
        Nosso objetivo é proporcionar uma plataforma que conecta sentimentos, vivências e aventuras, ajudando você a planejar a viagem dos seus sonhos de maneira simples, prática e personalizada.
        Conheça nossa equipe de criadores, que coloca toda a sua energia e expertise para desenvolver funcionalidades que tornam sua jornada ainda mais única e inesquecível. Explore o site e aproveite todos os recursos pensados para transformar cada viagem em uma experiência completa.
        </p>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <button onClick={() => window.location.href = "/sobre-nos"} 
          style ={{
            padding: "10px 20px",
            fontSize: "13px",
            backgroundColor: "#cfe8e8",
            color: "#5f7f7a",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontFamily: "poppins",
            fontWeight: "bold",
            transition: "background-color 0.3s ease",
            textDecoration: "none",
            textAlign: "center",
            display: "inline-block",
            textTransform: "uppercase",
            letterSpacing: "1px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
          >
            Conheça equipe!
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px",
          backgroundColor: "#5f7f7a",
          color: "white",
          flexDirection: "row-reverse",
          marginBottom: "15px", 
        }}
      >
        <img
          src="/cachoeira.jpg"
          alt="Turista na cachoeira"
          style={{ width: "25%", borderRadius: "8px" }} 
        />
        <p style={{ width: "65%", fontSize: "16px", lineHeight: "1.4", fontFamily: "poppins" }}> 
        Nosso site é uma plataforma colaborativa que conecta guias turísticos e viajantes apaixonados. Aqui, guias profissionais têm a oportunidade de divulgar seus serviços e explorar novos destinos por todo o país, enquanto turistas podem compartilhar suas experiências de viagem, revelar lugares pouco conhecidos e oferecer sugestões de passeios para inspirar outros viajantes.Seja para divulgar o trabalho de um guia, ou para guardar e relembrar suas próprias memórias de viagem, nossa página proporciona um espaço único e acessível para todos. Unimos aqueles que buscam expandir seu alcance e visibilidade, com aqueles que desejam preservar suas histórias e experiências, criando uma comunidade rica de conteúdos autênticos e inspiradores.Agora que você conhece o nosso propósito, BORA VIAJAR!
        </p>
      </div>
    </div>
  );
}