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

const Headers = {"x-api-key" : process.env.NEXT_PUBLIC_API_KEY};

export default function Usuarios() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async (users = "") => {
        setIsLoading(true);
    
        try {
          const { data: UserData } = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/users`,
            {headers: Headers}
          );
          setUsers(UserData);
          setDataUsers((prev) => ({
            ...prev,
            Users: UserData || [],
          }));
          if (!UserData) {
            setAllUsers([]);
          } else {
            setAllUsers(UserData);
          }
        } catch (error) {
          console.error("Erro ao carregar Users:", error);
        } finally {
          setIsLoading(false);
        }
      };
    
      useEffect(() => {
        fetchUsers();
      }, []);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1000);
    
        return () => clearTimeout(timer);
      }, []);
    
      if (loading) {
        return <Loader />;
      };

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
