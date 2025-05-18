'use client';

import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Loader from "../../components/Loader";
import Banner from "../../components/Banner";
import styles from "../../styles/Header.module.css";
import Footer from "../../components/Footer";

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

      {/* Primeiro Card */}
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
            style={{ width: "25%", borderRadius: "8px" }}
          />

          <div
            style={{
          width: "65%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start", // alterado de "center" para "flex-start"
            }}
          >
            <p
          style={{
            fontSize: "16px",
            lineHeight: "1.4",
            fontFamily: "poppins",
            textAlign: "justify",
          }}
            >
          Somos jovens apaixonados por programação e por explorar o mundo. Criamos um site que une tecnologia e turismo para ajudar você a planejar viagens de forma simples, personalizada e inesquecível. Conheça nossa equipe e aproveite os recursos pensados para tornar cada jornada única.
            </p>

            <div style={{ marginTop: "20px", textAlign: "center", width: "100%" }}>
          <button
            onClick={() => window.location.href = "/sobre-nos"}
            style={{
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
              textTransform: "uppercase",
              letterSpacing: "1px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            Conheça equipe!
          </button>
            </div>
          </div>
        </div>

        {/* Segundo Card */}
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
        <p
          style={{
            width: "65%",
            fontSize: "16px",
            lineHeight: "1.4",
            fontFamily: "poppins",
            textAlign: "justify",
          }}
        >
          Nosso site é o ponto de encontro entre guias e viajantes apaixonados. Aqui, guias mostram seu trabalho e turistas trocam dicas, memórias e achados incríveis pelo Brasil. É um espaço leve, feito pra inspirar, divulgar e conectar histórias reais. Curtiu a ideia? Então... BORA VIAJAR! 
        </p>
      </div>

      <Footer />
    </div>
  );
}
