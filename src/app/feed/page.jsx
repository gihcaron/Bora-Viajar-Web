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
          alignItems: "flex-start", 
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
    {/* Avaliações*/}
    <h2 style={{ textAlign: "center", fontFamily: "poppins", fontWeight: "bold", fontSize: "24px", marginBottom: "20px", marginTop: "40px" }}>
      AVALIAÇÕES
    </h2>
    <div style={{
      display: "flex",
      backgroundColor: "#cbebe9",
      borderRadius: "8px",
      margin: "20px auto",
      padding: 0,
      alignItems: "stretch",
      gap: 0,
      maxWidth: "800px", // Aumentado para 800px
      height: "auto",    // Ajustado para altura automática
      overflow: "hidden"
    }}>
      <img
        src="/avaliacao-aquario.jpg"
        alt="Mulher no aquário"
        style={{
          width: "40%", // Ajustado para ocupar menos espaço
          height: "100%",
          objectFit: "cover",
          borderRadius: "8px 0 0 8px"
        }}
      />
      <div style={{
        fontFamily: "Poppins",
        fontSize: "15px",
        color: "#333",
        flex: 1,
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}>
        <p style={{ margin: 0 }}>
          <strong>@usuariodasilva</strong><br />
          <span style={{ color: "#5f7f7a", fontWeight: "bold" }}>Local: AguaRio</span><br />
          <span style={{ color: "#f7b801", fontSize: "16px" }}>★★★★★</span>
        </p>
        <p style={{ marginTop: "10px", textAlign: "justify", fontSize: "15px" }}>
          O Rio de Janeiro continua lindooo!🎶 Moro aqui há anos e só agora fui conhecer o famoso AquaRio — e que experiência incrível! Tudo isso graças ao Bora Viajar, que me conectou com uma guia top, super atenciosa. Ela cuidou de tudo, até dos ingressos, e me ajudou a descobrir esse mundo marinho maravilhoso. 
          Super recomendo o passeio! Fica a dica pra quem vier curtir a Cidade Maravilhosa 🌊🐠✨
        </p>
      </div>
    </div>
    <div style={{
      display: "flex",
      backgroundColor: "#cbebe9",
      borderRadius: "8px",
      margin: "20px auto",
      padding: 0,
      alignItems: "stretch",
      gap: 0,
      flexDirection: "row-reverse",
      maxWidth: "800px", 
      height: "auto",    
      overflow: "hidden"
    }}>
      <img
        src="/avaliacao-lencois.jpg"
        alt="Mulher nos lençóis maranhenses"
        style={{
          width: "40%", 
          height: "100%",
          objectFit: "cover",
          borderRadius: "0 8px 8px 0"
        }}
      />
      <div style={{
        fontFamily: "Poppins",
        fontSize: "15px",
        color: "#333",
        flex: 1,
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        direction: "rtl",
        textAlign: "justify"
      }}>
        <p style={{ margin: 0 }}>
          <strong>usuariocosta@</strong><br />
          <span style={{ color: "#5f7f7a", fontWeight: "bold" }}>Local: Lençóis Maranhenses</span><br />
          <span style={{ color: "#f7b801", fontSize: "16px" }}>★★★★★</span>
        </p>
        <p style={{ marginTop: "10px", fontSize: "15px" }}>
          A viagem foi simplesmente incrível, a realização de um sonho mesmo! Encontrar a página de uma guia no Maranhão fez toda a diferença — ajudou em cada detalhe do roteiro. Sou muito grato ao site por ter facilitado tudo isso.
          Recomendo demais, tanto o passeio quanto a página! Pode confiar que o pessoal é super eficiente e de verdade, tudo feito com muito carinho e profissionalismo
        </p>
      </div>
    </div>

    <Footer />
  </div>
  );
}
