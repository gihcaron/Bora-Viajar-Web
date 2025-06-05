"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card } from "antd";
import axios from "axios";
import styles from "../styles/CardUser.module.css"

const UserCard = ({ photo, type_user, name, city, state, onClick}) => {

    const [seguindo, setSeguindo] = useState(false);

    return (
        <div className={styles.cardContainer} onClick={onClick}>

            <Card className={styles.card}>
             
                {type_user && type_user.trim().toLowerCase() === "usuário"  && (
                    <p className={styles.UserAndGuia}>Usuário</p>
                )}

                {type_user && type_user.trim().toLowerCase() === "guia turístico" && (
                    <button className={styles.UserAndGuia}>Guia</button>
                )}


                <Image
                    className={styles.userImage}
                    src={
                        photo &&
                            photo !== "undefined" &&
                            photo !== "null" &&
                            photo.trim() !== ""
                            ? `http://localhost:3000/uploads/${photo}`
                            : "/perfil.jpg"
                    }
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
                    style={{
                        color: seguindo ? "#109191" : "#fff",
                        background: seguindo ? "transparent" : "#109191",
                        border: seguindo ? "1px solid #109191" : "none",
                    }}
                    onClick={() => setSeguindo((prev) => !prev)}>
                    {seguindo ? "Seguindo" : "Seguir"}
                </p>
            </Card>

        </div>
    );

}

export default UserCard;
