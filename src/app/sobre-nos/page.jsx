'use client';

import React, { useState, useEffect } from 'react';
import Loader from '../../components/Loader';
import Header from '../../components/Header';
import styles from '../../styles/sobre.module.css';
import Footer from '../../components/Footer';

export default function SobreNosPage() {
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const pessoas = [
    { nome: 'Amanda', idade: 17, cidade: 'Campinas', linkedin: 'https://www.linkedin.com/in/amanda-mechi-4287b52b1', imagem: '/amanda.png', cor: '#14746f' },
    { nome: 'André', idade: 18, cidade: 'Campinas', linkedin: 'https://www.linkedin.com/in/andré-lucca-santos-63345934a', imagem: '/andre.jpg', cor: '#209c91' },
    { nome: 'Flavia', idade: 17, cidade: 'Campinas', linkedin: 'https://www.linkedin.com/in/flaviamendes17', imagem: '/flavia.jfif', cor: '#38b2ac' },
    { nome: 'Giovanna', idade: 17, cidade: 'Valinhos', linkedin: 'https://www.linkedin.com/in/giovanna-caron/', imagem: '/giovanna.jpeg', cor: '#57c6a9' },
    { nome: 'Isabella', idade: 17, cidade: 'Valinhos', linkedin: 'https://www.linkedin.com/in/isabella-borin-792b222b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', imagem: '/isabella.jpg', cor: '#7de2d1' },
    { nome: 'João Vitor', idade: 17, cidade: 'Campinas', linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-vitor-porto-sales-18bb202b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', imagem: '/joao.jpg', cor: '#b2f7ef' },
    { nome: 'Laura', idade: 17, cidade: 'Valinhos', linkedin: 'https://www.linkedin.com/in/laura-ferreira-violla-a526b12b1', imagem: '/laura.jpg', cor: '#e0fcf9' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
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
          <h2 className={styles.titleBanner}>BORA VIAJAR</h2>
          <h1 className={styles.subtitleBanner}>Com a equipe</h1>
        </div>
      </div>

      <div
        className={styles.lequeContainer}
        style={{ margin: '2rem 0', gap: '1rem' }}
      >
        {pessoas.map((pessoa, index) => {
          const middle = Math.floor(pessoas.length / 2);
          const offset = index - middle;
          const baseAngle = offset * 1;
          const baseTranslateX = offset * -100;
          const baseZIndex = pessoas.length - Math.abs(offset);

          const isHovered = hoveredIndex === index;

          const transform = isHovered
            ? `rotateZ(${baseAngle}deg) translateX(${baseTranslateX}px) scale(1.1) translateY(-30px)`
            : `rotateZ(${baseAngle}deg) translateX(${baseTranslateX}px)`;

          const zIndex = isHovered ? 100 : baseZIndex;

          return (
            <div
              key={index}
              className={styles.card}
              style={{
                background: `linear-gradient(to bottom right, ${pessoa.cor}, #ffffff)`,
                transform,
                zIndex,
                boxShadow: isHovered
                  ? '0 25px 40px rgba(0, 0, 0, 0.3)'
                  : '0 10px 15px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'transform 0.4s ease, box-shadow 0.3s ease',
                position: 'relative',
                transformOrigin: 'bottom center',
                borderRadius: '2rem',
                width: '220px',
                height: '360px'
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${pessoa.imagem})`, borderRadius: '1.5rem' }}
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
      <Footer />
    </div>
  );
}

