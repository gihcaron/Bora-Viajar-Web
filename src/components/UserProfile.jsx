"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Pagination, Modal, Skeleton, Card, Input, Space } from "antd";
import styles from "../styles/UserProfile.module.css";
import axios from "axios";


export default function Usuarios({photo, type_user, name, city, state, email}) {

    return (

        <div className={styles.Profile}>

            <div className={styles.Background}>
               
            </div>
            <div className={styles.ProfileImage}>
                <Image
                    className={styles.profileImage}
                    src={
                        photo &&
                            photo !== "undefined" &&
                            photo !== "null" &&
                            photo.trim() !== ""
                            ? `http://localhost:3000/uploads/${photo}`
                            : "/perfil.jpg"
                    }
                    alt={name}
                    width={160}
                    height={160}
                    priority={true}
                />
            </div>
            <div className={styles.ProfileContent}>
                <div className={styles.ProfileInfo}>
                    <h1 className={styles.userName} >{name}</h1>
                    <p className={styles.userEmail}>{email}</p>
                    <div className={styles.locationContainer}>
                        <p className={styles.city}>{city} | </p>
                        <p className={styles.state}>{state}</p>
                    </div>


                    {type_user && type_user.trim().toLowerCase() === "usuário" && (
                        <p className={styles.UserAndGuia}>Usuário</p>
                    )}

                    {type_user && type_user.trim().toLowerCase() === "guia turístico" && (
                        <button className={styles.UserAndGuia}>Guia</button>
                    )}

                </div>
            </div>

        </div>

    );
}
