"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card } from "antd";
import axios from "axios";
import styles from "../styles/CardUser.module.css"

const UserCard = ({ photo,  type_user, name, city, state }) => {

    const [seguindo, setSeguindo] = useState(false);

    return (
        <div className={styles.cardContainer}>

            <Card className={styles.card}>

                { type_user === "usuário" && (
                    <p className={styles.UserAndGuia}>Usuário</p>
                )}

                { type_user === "guia turístico" && (
                    <button className={styles.UserAndGuia}>Guia</button>
                )}
                <Image
                    className={styles.userImage}
                    src={`http://localhost:3000/uploads/` + photo}
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
