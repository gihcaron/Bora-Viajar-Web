'use client';

import React, { use, useEffect, useState } from "react";
import { Rate } from "antd";
import "antd/dist/reset.css";

import Header from "../../components/Header";
import Loader from "../../components/Loader";
import Banner from "../../components/Banner";
import axios from "axios";
import styles from "../../styles/Header.module.css";
import Footer from "../../components/Footer";
import Cidades from "../../components/Cidades";
import ModalComentarios from "../../components/ModalComentarios";
import PostUsers from "../../components/PostUsers";
import AvaliacaoApp from "../../components/AvaliacaoApp";

const Headers = { "x-api-key": process.env.NEXT_PUBLIC_API_KEY };

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [comentarios, setComentarios] = useState([]);
  const [comentariosLoading, setComentariosLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchComentarios = async (postId) => {
    setComentariosLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/api/comments?postId=${postId}`, {
        headers: {
          'x-api-key': 'B0raV1@j@2025'
        }
      });
      const data = await res.json();
      setComentarios(Array.isArray(data) ? data : data.comentarios || []);
    } catch (err) {
      setComentarios([]);
    } finally {
      setComentariosLoading(false);
    }
  };

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/posts`,
        { headers: Headers }
      );
      console.log("Dados recebidos:", data);
      setPosts(data)
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  })


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
        <div style={{ width: "65%", display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <p
            style={{
              width: "100%",
              fontSize: "16px",
              lineHeight: "1.4",
              fontFamily: "poppins",
              textAlign: "justify",
              marginBottom: "16px"
            }}
          >
            Nosso site é o ponto de encontro entre guias e viajantes apaixonados. Aqui, guias mostram seu trabalho e turistas trocam dicas, memórias e achados incríveis pelo Brasil. É um espaço leve, feito pra inspirar, divulgar e conectar histórias reais. Curtiu a ideia? Então... BORA VIAJAR!
          </p>
          <div style={{ textAlign: "center", width: "100%" }}>
            <button
              onClick={() => {
                const feedbackSection = document.getElementById("feedback-section");
                if (feedbackSection) {
                  feedbackSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
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
              Ver feedback dos usuários
            </button>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
          margin: "0 auto",
          maxWidth: 500,
          width: "100%",
          padding: "0 8px",
          fontFamily: "poppins",
        }}
      >
        {[ // Ordena: posts com imagem primeiro
          ...posts.filter(post => post.image && post.image.trim() !== ""),
          ...posts.filter(post => !post.image || post.image.trim() === "")
        ].map((post) => (
          <PostUsers
            key={post.id}
            curtidas={post.likes_count}
            {...post}
            onComentarioClick={() => {
              setModalOpen(true);
              fetchComentarios(post.id);
            }}
            style={{ fontFamily: "poppins" }}
          />
        ))}
      </div>

      <ModalComentarios
        open={modalOpen}
        onClose={handleCloseModal}
        comentarios={comentarios}
        loading={comentariosLoading}
        style={{ fontFamily: "poppins" }}
      />

      {/* Coloque o id na seção de feedback dos usuários */}
      <div id="feedback-section">
        <AvaliacaoApp />
      </div>

      {/* Botão para subir ao topo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: 32,
          right: 32,
          background: "#3ddad7",
          border: "none",
          borderRadius: "50%",
          width: 56,
          height: 56,
          boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 9999,
          transition: "background 0.2s",
        }}
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      <Footer />
    </div>
  );
}