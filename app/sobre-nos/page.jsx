 'use client';

import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import styles from "../../styles/sobre.module.css";

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
      <div className={styles.bannerContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.titleBanner}> BORA VIAJAR!</h1>
          <h2 className={styles.subtitleBanner}>com a equipe</h2>
        </div>
      </div>
    </div>
  );
}

  const pessoas = [
    { nome: "Ana Souza", idade: 29, cidade: "São Paulo", linkedin: "https://linkedin.com/in/ana-souza" },
    { nome: "Carlos Lima", idade: 34, cidade: "Rio de Janeiro", linkedin: "https://linkedin.com/in/carlos-lima" },
    { nome: "Julia Mendes", idade: 26, cidade: "Belo Horizonte", linkedin: "https://linkedin.com/in/julia-mendes" },
    { nome: "Pedro Martins", idade: 31, cidade: "Curitiba", linkedin: "https://linkedin.com/in/pedro-martins" },
    { nome: "Larissa Dias", idade: 27, cidade: "Salvador", linkedin: "https://linkedin.com/in/larissa-dias" },
    { nome: "Marcos Silva", idade: 38, cidade: "Brasília", linkedin: "https://linkedin.com/in/marcos-silva" },
    { nome: "Renata Costa", idade: 25, cidade: "Fortaleza", linkedin: "https://linkedin.com/in/renata-costa" },
  ];

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <Header bannerTitle={"BORA VIAJAR"} />
      <div className={styles.bannerContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.titleBanner}> BORA VIAJAR!</h1>
          <h2 className={styles.subtitleBanner}>com a equipe</h2>
        </div>
      </div>

      <div className={styles.lequeContainer}>
        {pessoas.map((pessoa, index) => {
          const offset = index - Math.floor(pessoas.length / 2);
          const rotation = offset * 5;
          const scale = 1 - Math.abs(offset) * 0.05;
          const zIndex = 100 - Math.abs(offset);

          return (
            <div
              key={index}
              className={styles.card}
              style={{
                transform: `rotate(${rotation}deg) scale(${scale}) translateY(${Math.abs(offset) * 10}px)`,
                zIndex
              }}
            >
              <h3>{pessoa.nome}</h3>
              <p>Idade: {pessoa.idade}</p>
              <p>Cidade: {pessoa.cidade}</p>
              <a href={pessoa.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn →
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
