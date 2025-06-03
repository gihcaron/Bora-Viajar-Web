"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {Card } from "antd";
import axios from "axios";
import styles from "../styles/CardUser.module.css"

const UserCard = ({photo, name, city, state}) => {
    
    const [seguindo, setSeguindo] = useState(false);

    return (
        <div className={styles.cardContainer}>
       
        <Card className={styles.card}>
            { usuario && (<p className={styles.typeUser}> Usuário</p>) }
            { guiaTuristico && (<p className={styles.typeUser}> Guia</p>) } */}            <Image 
            className={styles.userImage}
            src={photo}
            alt={name}
            width={150}
            height={150}
            priority={true}
             />
            
            <h1 className={styles.userName}>{name}</h1>
            <div className={styles.locationContainer}>
            <p className={styles.city}>{city}</p>
            <p className={styles.state}>{state}</p>
            </div>
            <p className={styles.typeUser}
            onClick={() => setSeguindo((prev) => !prev)}> 
            {seguindo ? "Seguindo" : "Seguir"}
            </p>
        </Card>

        </div>
    );

}

export default UserCard;
