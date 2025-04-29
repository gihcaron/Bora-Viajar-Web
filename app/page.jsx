"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from ".././styles/Redirecionamento.module.css";

export default function Redirecionamento() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/login');
    }, 1000); 
  },);

  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
        <p className={styles.text}>Carregando...</p>
    
    </div>
  );
}