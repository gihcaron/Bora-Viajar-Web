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

const Headers = { "x-api-key": process.env.NEXT_PUBLIC_API_KEY };

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [comentarios, setComentarios] = useState([]);
  const [comentariosLoading, setComentariosLoading] = useState(false);

  const fetchComentarios = async () => {
    setComentariosLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/comentarios", { headers: Headers });
      const data = await res.json();
      console.log("Resposta bruta da API:", data);

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
    }
    fetchComentarios();
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
        maxWidth: "800px",
        height: "auto",
        overflow: "hidden"
      }}>
        <img
          src="/avaliacao-aquario.jpg"
          alt="Mulher no aquário"
          style={{
            width: "40%",
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
          <div style={{ margin: 0 }}>
            <strong>@usuariodasilva</strong><br />
            <span style={{ color: "#5f7f7a", fontWeight: "bold" }}>Local: AguaRio</span>
            <div>
              <Rate allowHalf disabled defaultValue={5} style={{ color: "#f7b801", fontSize: "16px" }} />
            </div>
          </div>
          <p style={{ marginTop: "10px", textAlign: "justify", fontSize: "15px" }}>
            O Rio de Janeiro continua lindooo!🎶 Moro aqui há anos e só agora fui conhecer o famoso AquaRio — e que experiência incrível! Tudo isso graças ao Bora Viajar, que me conectou com uma guia top, super atenciosa. Ela cuidou de tudo, até dos ingressos, e me ajudou a descobrir esse mundo marinho maravilhoso.
            Super recomendo o passeio! Fica a dica pra quem vier curtir a Cidade Maravilhosa 🌊🐠✨
          </p>
          <span
            onClick={handleOpenModal}
            style={{ cursor: "pointer", fontSize: 20 }}
            title="Ver comentários"
            role="button"
            aria-label="Ver comentários"
          >💬</span>
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
          <div style={{ margin: 0 }}>
            <strong>usuariocosta@</strong><br />
            <span style={{ color: "#5f7f7a", fontWeight: "bold" }}>Local: Lençóis Maranhenses</span>
            <div>
              <Rate allowHalf disabled defaultValue={5} style={{ color: "#f7b801", fontSize: "16px" }} />
              <span
                onClick={handleOpenModal}
                style={{ cursor: "pointer", fontSize: 20 }}
                title="Ver comentários"
                role="button"
                aria-label="Ver comentários"
              >💬</span>

              <div>
                <Rate allowHalf disabled defaultValue={5} style={{ color: "#f7b801", fontSize: "16px" }} />
                <span
                  style={{ cursor: "pointer", marginLeft: 12, fontSize: 20 }}
                  title="Ver comentários"
                  onClick={handleOpenModal}
                  role="button"
                  aria-label="Ver comentários"
                >
                  💬
                </span>
              </div>
            </div>
          </div>
          <p style={{ marginTop: "10px", fontSize: "15px" }}>
            A viagem foi simplesmente incrível, a realização de um sonho mesmo! Encontrar a página de uma guia no Maranhão fez toda a diferença — ajudou em cada detalhe do roteiro. Sou muito grato ao site por ter facilitado tudo isso.
            Recomendo demais, tanto o passeio quanto a página! Pode confiar que o pessoal é super eficiente e de verdade, tudo feito com muito carinho e profissionalismo
          </p>
          <span
            onClick={handleOpenModal}
            style={{ cursor: "pointer", fontSize: 20 }}
            title="Ver comentários"
            role="button"
            aria-label="Ver comentários"
          >💬</span>
        </div>
      </div>
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

      <Footer />
    </div>
  );
}
