'use client';

<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import styles from "../../styles/Header.module.css";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

=======
import React, { useState, useEffect } from 'react';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import styles from '../../styles/sobre.module.css';

export default function SobreNosPage() {
  const [loading, setLoading] = useState(true);

  const pessoas = [
    { nome: 'Amanda', idade: 17, cidade: 'Campinas', linkedin: 'https://linkedin.com/in/joao', imagem: '/amanda.jpg', cor: '#FFC1CC' },
    { nome: 'André', idade: 18, cidade: 'Rio de Janeiro', linkedin: 'https://linkedin.com/in/maria', imagem: '/andre.jpg', cor: '#A0E7E5' },
    { nome: 'Flavia', idade: 17, cidade: 'Campinas', linkedin: 'https://linkedin.com/in/pedro', imagem: '/flavia.jfif', cor: '#B4F8C8' },
    { nome: 'Giovanna', idade: 17, cidade: 'Valinhos', linkedin: 'https://linkedin.com/in/andre', imagem: '/giovanna.jpg', cor: '#FBE7C6' },
    { nome: 'Isabella', idade: 17, cidade: 'Valinhos', linkedin: 'https://linkedin.com/in/andre', imagem: '/isabella.jpg', cor: '#FFDAC1' },
    { nome: 'João Vitor', idade: 17, cidade: 'Campinas', linkedin: 'https://linkedin.com/in/andre', imagem: '/joaovitor.jpg', cor: '#C7CEEA' },
    { nome: 'Laura', idade: 17, cidade: 'Valinhos', linkedin: 'https://linkedin.com/in/andre', imagem: '/laura.jpg', cor: '#E2F0CB' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
>>>>>>> 8e04e808d1dc177e5fa9ebde7b9f18100d3cf21d
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
<<<<<<< HEAD
    <div style={styles.container}>
      <Header bannerTitle={"BORA VIAJAR"} />
    </div>
  );
}
=======
    <div className={styles.Container}>
      <Header bannerTitle={"BORA VIAJAR"} />

      <div className={styles.bannerContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.titleBanner}> BORA VIAJAR </h2>
          <h1 className={styles.subtitleBanner}>Com a equipe </h1>
        </div>
      </div>

      <div className={styles.lequeContainer} style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        overflowX: 'auto',
        padding: '40px 20px',
        perspective: '1000px'
      }}>
        {pessoas.map((pessoa, index) => {
          let rotate = 'rotateY(0deg)';
          if (index === 0) rotate = 'rotateY(-10deg)';
          if (index === pessoas.length - 1) rotate = 'rotateY(10deg)';

          const isCenter = index === Math.floor(pessoas.length / 2);
          const scale = isCenter ? 1.1 : 0.95;
          const zIndex = isCenter ? 10 : index;

          return (
            <div
              key={index}
              className={styles.card}
              style={{
                backgroundColor: pessoa.cor,
                transform: `${rotate} scale(${scale}) translateY(0px)`,
                margin: '0 -40px',
                zIndex: zIndex, // Valor inicial do zIndex
                transition: 'transform 0.3s ease, z-index 0.3s ease', // Adicionado para suavizar o zIndex
                boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
                cursor: 'pointer',
                position: 'relative',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = `scale(1.2) translateY(-20px)`;
                e.currentTarget.style.zIndex = '999'; // Garante que o card fique na frente
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = `${rotate} scale(${scale}) translateY(0px)`;
                e.currentTarget.style.zIndex = `${zIndex}`; // Restaura o zIndex original
              }}
            >
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${pessoa.imagem})` }}
              >
                <span className={styles.idade}>{pessoa.idade} anos</span>
              </div>
              <div className={styles.cardInfo}>
                <h3>{pessoa.nome}</h3>
                <a
                  href={pessoa.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkedinBtn}
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
>>>>>>> 8e04e808d1dc177e5fa9ebde7b9f18100d3cf21d
