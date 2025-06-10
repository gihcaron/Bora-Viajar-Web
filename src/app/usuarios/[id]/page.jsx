"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import PostUsers from "../../../components/PostUsers";
import styles from "./usuariosProfile.module.css";
import { Heart, MessageCircle, Bookmark } from "lucide-react";
import { Modal, Skeleton } from "antd";
import UserProfile from "../../../components/UserProfile";
import axios from "axios";

const Headers = { "x-api-key": process.env.NEXT_PUBLIC_API_KEY };

export default function Usuarios() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  console.log(id);

  // Exibir Usuário

  const fetchUser = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${id}`,
        { headers: Headers }
      );

      console.log("data", data);
      setUser(data);
    } catch (error) {
      console.error("Erro ao carregar Usuário:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Exibir Posts do Usuário

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/posts?user_id=${id}`,
        { headers: Headers }
      );
      console.log("Resposta da API (posts):", data);
      setPosts(data);
    } catch (error) {
      console.error("Erro ao carregar post:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchComments = async (postId) => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/comments/post/${postId}`,
        { headers: Headers }
      );
      console.log("Resposta da API (comentários):", data);
      setComments(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao carregar comentários:", error);
    }
  }

  // Exibir Comentários do Post

  // Modal para ver comentários
  const [modalInfo, setModalInfo] = useState({
    visible: false,
    description: null,
    comments: [],
    post_id: null,
    user_id: null,
    photo: null,
  });

  const openModal = async (post) => {
    setSelectedPost(post);
    console.log("Post selecionado:", post);
    setModalInfo({
      visible: true,
      comments: [],
      post_id: post.id,
      user_id: post.user_id,
      description: post.description,
    });

    setIsLoading(true);
    fetchComments(post.id);
  };

  useEffect(() => {
    console.log("id", id);
    if (id) {
      fetchUser(id);
      fetchPosts(id);
    }
  }, [id]);

  // Debugging logs


  console.log("comments", comments);

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.ProfileContainer}>
        {user && (
          <UserProfile
            key={user.user.id}
            photo={user.user.photo}
            alt={user.user.name}
            name={user.user.name}
            city={user.user.city}
            state={user.user.state}
            email={user.user.email}
            type_user={(user.user.type_user || "").toLowerCase()}
          />
        )}
      </div>

      <div className={styles.PostContainer}>
        {posts.map((post) => (
          <PostUsers
            key={post.id}
            username={user?.user?.name}
            name={user.user.name}
            photo={user?.user?.photo}
            image={post.image}
            onComentarioClick={() => openModal(post)}
            description={post.description}
            tag={post.tag}
            curtidas={post.likes_count}
          />
        ))}
      </div>

      <Modal
        className={styles.Modal}
        open={modalInfo.visible}
        onCancel={() => setModalInfo({ visible: false, comments: null })}
        footer={null}
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
          xxl: "40%",
        }}
      >
        {isLoading ? (
          <Skeleton active />
        ) : (
          <div>
            <p
              className={styles.descricao}
            >
              <strong className={styles.descricaoText}>Descrição:</strong>
            </p>
            <p className={styles.descricaoText}>{modalInfo.description}</p>

            {comments.length > 0 ? (
              comments.map((comment) => (
                <p
                  className={styles.commentText}
                  key={comment.id}>
                  <strong>@{comment.usuario}:</strong>
                  <p>{comment.comentario}</p>
                </p>
              ))
            ) : (
              <p
                className={styles.semComentariosMensagem}>Sem comentários neste post.</p>
            )}
          </div>
        )}
      </Modal>

       {/* Botão para subir ao topo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: 32,
          right: 32,
          background: "#3ddad7",
          border: "none",
          borderRadius: "50%",
          width: 56,
          height: 56,
          boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 9999,
          transition: "background 0.2s",
        }}
        aria-label="Voltar ao topo"
        title="Voltar ao topo"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      <Footer />
    </div>
  );
}
