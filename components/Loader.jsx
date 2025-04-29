"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from ".././styles/Redirecionamento.module.css";

export default function Redirecionamento() {

  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
        <p className={styles.text}>Redirecionando...</p>
    
    </div>
  );
}
