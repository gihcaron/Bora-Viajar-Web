"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import styles from "./usuariosProfile.module.css";
import UserProfile from "../../../components/UserProfile";
import axios from "axios";

const Headers = { "x-api-key": process.env.NEXT_PUBLIC_API_KEY };

export default function Usuarios() {
  const { id } = useParams();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    console.log(id);

    const fetchUser = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
        { headers: Headers }
      );

      console.log('data', data)
      setUser(data);
    } catch (error) {
      console.error("Erro ao carregar Usuário:", error);
    } finally {
      setIsLoading(false);
    }
  };

    useEffect(() => {
      console.log('id', id)
        if (id) {
          fetchUser(id);
        }
    }, [id]);

    console.log('user',user);
   
    return (
        <div className={styles.container}>

            <Header />
            
            <div className={styles.ProfileContainer}>
            {user && (
            <UserProfile
              key={user.user.id}
              photo={user.user.photo }
              alt={user.user.name}
              name={user.user.name}
              city={user.user.city}
              state={user.user.state}
              email={user.user.email}
              type_user={(user.user.type_user || "").toLowerCase()}
            />
              )}
            </div>

        <Footer />
        </div>
    );
}
