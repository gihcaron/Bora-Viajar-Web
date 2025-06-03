"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Pagination, Modal, Skeleton, Card } from "antd";
import styles from "./usuarios.module.css";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import UserCard from "../../components/CardUser";
import axios from "axios";

export default function Usuarios() {
    
    const [seguindo, setSeguindo] = useState(false);

    return (
        <div className={styles.container}>
        
        <Header />

        <div className={styles.cardContainer}>

        <UserCard />
        
        </div>

        <Footer />

        </div>
    );

}
