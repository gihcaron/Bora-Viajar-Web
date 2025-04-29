"use client";

import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import styles from "../../styles/Noticias.module.css"; ;

export default function Noticias() {
    const [loading, setLoading] = React.useState(true);

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
    <div className={styles.Container}>
   
    <h1 className={styles.title}>Notícias</h1>

    </div>


)};

