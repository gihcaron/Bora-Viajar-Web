"use client";

import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import styles from "./usuariosProfile.module.css";
import UserProfile from "../../../components/UserProfile";
import { useParams } from "next/navigation";
import axios from "axios";

const Headers = { "x-api-key": process.env.NEXT_PUBLIC_API_KEY };

export default function Usuarios() {
    const [users, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const { id } = userParams();

  const fetchUser = async (id = "") => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
        { headers: Headers }
      );
      setUser(data);
    } catch (error) {
      console.error("Erro ao carregar Usuário:", error);
    } finally {
      setIsLoading(false);
    }
  };

    useEffect(() => {
        if (id) {
      fetchUser(id);
        }
    }, [id]);


    return (
        <div className={styles.container}>

            <Header />

            <div className={styles.ProfileContainer}>
            {users && (
            <UserProfile
              key={users.id}
              photo={users.photo }
              alt={users.name}
              name={users.name}
              city={users.city}
              state={users.state}
              email={users.email}
              type_user={(users.type_user || "").toLowerCase()}
            />
              )}
            </div>

        <Footer />
        </div>
    );
}
