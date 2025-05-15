'use client';

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

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={styles.container}>
      <Header bannerTitle={"BORA VIAJAR"} />
    </div>
  );
}