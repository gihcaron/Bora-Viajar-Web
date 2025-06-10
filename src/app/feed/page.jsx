'use client';

import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import "antd/dist/reset.css";

import Header from "../../components/Header";
import Loader from "../../components/Loader";
import Banner from "../../components/Banner";
import styles from "../../styles/Header.module.css";
import Footer from "../../components/Footer";
import Cidades from "../../components/Cidades";
import ModalComentarios from "../../components/ModalComentarios";
import AvaliacaoApp from "../../components/AvaliacaoApp";


const Headers = { "x-api-key": process.env.NEXT_PUBLIC_API_KEY };

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [comentarios, setComentarios] = useState([]);
  const [comentariosLoading, setComentariosLoading] = useState(false);

  const fetchComentarios = async () => {
    setComentariosLoading(true);
    try {
const res = await fetch('http://localhost:3000/api/comments', {
  headers: {
    'x-api-key': 'B0raV1@j@2025'
  }
});      const data = await res.json();
      console.log("Resposta bruta da API:", data);
console.log("Comentários recebidos:", data);

      setComentarios(data);
      if (Array.isArray(data)) {
        setComentarios(data);
      } else if (Array.isArray(data.comentarios)) {
        setComentarios(data.comentarios);
      } else {
        setComentarios([]);
        console.error("A resposta da API não é um array:", data);
      }
    } catch (err) {
      console.error("Erro ao buscar comentários:", err);
      setComentarios([]);
    } finally {
      setComentariosLoading(false);
    }
  };

  const handleOpenModal = () => {
    setModalOpen(true);
    fetchComentarios();
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

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

      {/* Seções de cidades */}
      <Cidades
        cidade="NOVIDADES!"
        pontos={[
          {
            imagem: "/elevador-lacerda.jpg",
            titulo: "Elevador Lacerda",
            legenda: "Pequeno texto sobre guia turístico",
          },
          {
            imagem: "/Pelourinho.jpg",
            titulo: "Pelourinho",
            legenda: "Pequeno texto sobre guia turístico",
          },
          {
            imagem: "/igreja-do-bonfim.jpg",
            titulo: "Igreja do Bonfim",
            legenda: "Pequeno texto sobre guia turístico",
          },
        ]}
        onComentarioClick={handleOpenModal}
      />

      <Cidades
        cidade="ALERTA!"
        pontos={[
          {
            imagem: "/cristo-redentor.jpg",
            titulo: "Cristo Redentor",
            legenda: "Pequeno texto sobre guia turístico",
          },
          {
            imagem: "/maracana.jpg",
            titulo: "Maracanã",
            legenda: "Pequeno texto sobre guia turístico",
          },
          {
            imagem: "/parque-lage.jpg",
            titulo: "Parque Lage",
            legenda: "Pequeno texto sobre guia turístico",
          },
        ]}
        onComentarioClick={handleOpenModal}
      />
      <Cidades
        cidade="PROMOÇÃO!"
        pontos={[
          {
            imagem: "/beto-carrero.jpg",
            titulo: "Bato Carrero World",
            legenda: "Pequeno texto sobre guia turístico",
          },
          {
            imagem: "/roda-gigante-de-Balneario-Camboriu.jpg",
            titulo: "Roda gigante Balneário",
            legenda: "Pequeno texto sobre guia turístico",
          },
          {
            imagem: "/serra-catarinense.jpg",
            titulo: "Serra catarinense",
            legenda: "Pequeno texto sobre guia turístico",
          },
        ]}
        onComentarioClick={handleOpenModal}
      />
      {modalOpen && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
          background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000
        }}>
          <div style={{ background: "#fff", padding: 24, borderRadius: 8, minWidth: 300, maxWidth: 500 }}>
            <button onClick={handleCloseModal} style={{ float: "right" }}>Fechar</button>
            <h3>Comentários</h3>
            {comentariosLoading ? (
              <p>Carregando...</p>
            ) : (
              <ul>
                {comentarios.map((c, i) => (
                  <li key={i}>{c.texto}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      <ModalComentarios
        open={modalOpen}
        onClose={handleCloseModal}
        comentarios={comentarios}
        loading={comentariosLoading}
      />

      <AvaliacaoApp />


      <Footer />
    </div>
  );
}
