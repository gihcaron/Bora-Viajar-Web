"use client";

import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import styles from "../../styles/Noticias.module.css"; ;

export default function Noticias() {
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); 
        }, 3000);

        return () => clearTimeout(timer); 
    }, []);

    if (loading) {
        return <Loader />;
    }

 return (
    <div className={styles.Container}>
   
        <div className={styles.headerContainer}>

            <div className={styles.Navbar}>
                <ul className={styles.NavLikns}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                </ul>

                <div className={styles.SocialIcons}>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-whatsapp"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>

            </div>

        </div>

        <div className={styles.Content}>
            <h2 className={styles.ContentTitle}>PLANEJE OS MELHORES MOMENTOS</h2>
            <h1 className={styles.ContentSubtitle}>BORA VIAJAR!</h1>
            <button className={styles.button}>Comece já!</button>
        </div>

    </div>


)};

