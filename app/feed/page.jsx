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
          style={{ width: "25%", borderRadius: "8px" }} 
        />
        <p style={{ width: "65%", fontSize: "16px", lineHeight: "1.4" }}> 
          Descrição sobre nossa rede social, contando a história
        </p>
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
        <p style={{ width: "65%", fontSize: "16px", lineHeight: "1.4" }}> 
          Descrição sobre nossa rede social, contando a história
        </p>
      </div>
    </div>
  );
}