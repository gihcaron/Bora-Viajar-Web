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

  // Exibir Comentários do Post

  // Modal para ver comentários
  const [modalInfo, setModalInfo] = useState({
    visible: false,
    description: null,
    comments: [],
    post_id: null,
    user_id: null,
  });

  const openModal = async (post) => {
    setSelectedPost(post);
    console.log("Post selecionado:", post);
    setModalInfo({
      visible: true,
      description: post.description,
      comments: [],
      post_id: post.id,
      user_id: post.user_id,
    });
    setIsLoading(true);

    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/comments`,
        { headers: Headers }
      );
      
      setComments(data);
    } catch (error) {
      console.error("Erro ao carregar comentário:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("id", id);
    if (id) {
      fetchUser(id);
      fetchPosts(id);
    }
  }, [id]);

  // Debugging logs

  console.log("user", user);

  console.log("posts", posts);

  console.log("comments", comments);

  console.log(selectedPost?.id);

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
            curtidas={post. likes_count}
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
            <p>
              <strong>Descrição:</strong>
            </p>
            <p>{modalInfo.description}</p>

            {comments.length > 0 ? (
              comments.map((comment) => (
                <p key={comment.id}>
                  <strong>{comment.usuario}:</strong> {comment.comment}
                </p>
              ))
            ) : (
              <p>Sem comentários neste post.</p>
            )}
          </div>
        )}
      </Modal>

      <Footer />
    </div>
  );
}
