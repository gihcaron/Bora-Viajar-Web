"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Pagination, Modal, Skeleton, Card, Input, Space } from "antd";
import styles from "./usuarios.module.css";
import { FaSearch } from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import UserCard from "../../components/CardUser";
import axios from "axios";

const Headers = { "x-api-key": process.env.NEXT_PUBLIC_API_KEY };

export default function Usuarios() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const cardsPerPage = 4;

  const [usersData, setDataUsers] = useState({
    current: 1,
    pageSize: cardsPerPage,
    users: [],
  });

  const fetchUsers = async (name = "") => {
    setIsLoading(true);

    try {
      const { data: usersData } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users/?name=${name}`,
        { headers: Headers }
      );
      setUsers(usersData);
      setDataUsers((prev) => ({
        ...prev,
        users: usersData || [],
      }));
      if (!usersData) {
        setAllUsers([]);
      } else {
        setAllUsers(usersData);
      }
    } catch (error) {
      console.error("Erro ao carregar Users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    const name = search.trim();
    fetchUsers(name, 1);
  }; 

  useEffect(() => {
    fetchUsers();
  }, []);

  const paginatedUser = () => {
    const start = (usersData.current - 1) * usersData.pageSize;
    return usersData.users.slice(start, start + usersData.pageSize);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.Title}>
        <h1 className={styles.text}>Conheça nossos viajantes!</h1>
        <p className={styles.description}>
          Encontre pessoas incríveis para se conectar!
        </p>
      </div>

      <div className={styles.searchInput}>
        <input 
        type="text" 
        placeholder="Buscar Usuário"
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
        />
        <button className={styles.searchButton}
        onClick={handleSearch}>
          <FaSearch />
        </button>
      </div>
      <div className={styles.usersContainer}>
        <div className={styles.cardContainer}>
          {paginatedUser().map((user) => (
            <UserCard
              key={user.id}
              type_user={(user.type_user || "").toLowerCase()}
              photo={user.photo }
              alt={user.name}
              name={user.name}
              city={user.city}
              state={user.state}
              onClick={() => router.push(`/usuarios/${user.id}`)}
            />
          ))}
        </div>
          <div className={styles.paginationContainer}>
            <Pagination
              className={styles.Pagination}
              defaultCurrent={1}
              current={usersData.current}
              pageSize={usersData.pageSize}
              total={usersData.users.length}
              onChange={(page, size) => {
                setDataUsers((prev) => ({
                  ...prev,
                  current: page,
                  pageSize: size,
                }));
              }}
            />
          </div>
      </div>

      <Footer />
    </div>
  );
}
