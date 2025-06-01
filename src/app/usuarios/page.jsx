"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Pagination, Modal, Skeleton, Card } from "antd";
import styles from "./usuarios.module.css";
import axios from "axios";
import { CaretDownFilled } from "@ant-design/icons";

export default function Usuarios() {

    return (
        <div className={styles.container}>
        <div className={styles.cardContainer}>
       
        <Card className={styles.card}>
            <Image 
            className={styles.userImage}
            src="/amanda.png"
            alt="Usuários"
            width={150}
            height={150}
             />
            
            <h1 className={styles.userName}>Amanda</h1>
            <div className={styles.locationContainer}>
            <p className={styles.city}>Valinhos</p>
            <p className={styles.state}> SP</p>
            </div>
            <p className={styles.typeUser}> Usuário</p>
        </Card>

        <Card className={styles.card}>
            <Image 
            className={styles.userImage}
            src="/amanda.png"
            alt="Usuários"
            width={150}
            height={150}
             />
            
            <h1 className={styles.userName}>Amanda</h1>
            <div className={styles.locationContainer}>
            <p className={styles.city}>Valinhos</p>
            <p className={styles.state}> SP</p>
            </div>
            <p className={styles.typeUser}> Usuário</p>
        </Card>

        <Card className={styles.card}>
            <Image 
            className={styles.userImage}
            src="/amanda.png"
            alt="Usuários"
            width={150}
            height={150}
             />
            
            <h1 className={styles.userName}>Amanda</h1>
            <div className={styles.locationContainer}>
            <p className={styles.city}>Valinhos</p>
            <p className={styles.state}> SP</p>
            </div>
            <p className={styles.typeUser}> Usuário</p>
        </Card>
        <Card className={styles.card}>
            <Image 
            className={styles.userImage}
            src="/amanda.png"
            alt="Usuários"
            width={150}
            height={150}
             />
            
            <h1 className={styles.userName}>Amanda</h1>
            <div className={styles.locationContainer}>
            <p className={styles.city}>Valinhos</p>
            <p className={styles.state}> SP</p>
            </div>
            <p className={styles.typeUser}> Usuário</p>
        </Card>
        </div>
        </div>
    );
}
