"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/PostUsers.module.css";
import { Heart, MessageCircle, Bookmark } from "lucide-react";

export default function Posts({
  image,
  photo,
  description,
  tag,
  onComentarioClick,
  username,
  name,
  curtidas,
}) {
  const [curtido, setCurtido] = useState(false);
  const [salvo, setSalvo] = useState(false);

  const [curtidasCount, setCurtidasCount] = useState(curtidas);

  const handleCurtidaClick = () => {
    if (curtido) {
      setCurtidasCount((prev) => prev - 1);
    } else {
      setCurtidasCount((prev) => prev + 1);
    }
    setCurtido((v) => !v);
  };

  return (
    <div
      className={styles.Post}
      style={{
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        margin: "0 auto",
        width: "100%",
        maxWidth: 420,
        border: "1px solid #ececec",
        overflow: "hidden",
        marginBottom: "0px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className={styles.PostHeader}>
        <div>
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
            alt={name ? `Foto de perfil de ${name}` : "Foto de perfil do usuário"}
            width={160}
            height={160}
            priority={true}
          />
        </div>
        <div>
          <h1 className={styles.Name}>{name}</h1>
          <p className={styles.UserName}>@{username}</p>
        </div>
      </div>
      {image && image.trim() !== "" && (
        <div className={styles.PostImage}>
          <Image
            src={`http://localhost:3000/uploads/` + image}
            alt={
              description && description.trim() !== ""
                ? description
                : "Imagem do post"
            }
            width={500}
            height={300}
            className={styles.PostImage}
          />
        </div>
      )}
      <div className={styles.PostContent}>
        {tag && tag.trim().toLowerCase() === "alerta" && (
          <p className={styles.Alerta}>Alerta</p>
        )}
        {tag &&
          (tag.trim().toLowerCase() === "promoção" ||
            tag.trim().toLowerCase() === "promo€ço") && (
            <p className={styles.Promocao} styles={{}}>
              Promoção
            </p>
          )}
        {tag && tag.trim().toLowerCase() === "novidades" && (
          <p className={styles.Novidades}>Novidades</p>
        )}

        <p className={styles.Description}>{description}</p>

        <div className={styles.PostInfo}>
          <div className={styles.PostActions}>
            <Heart
              size={28}
              color={curtido ? "rgb(16, 145, 145)" : "black"}
              fill={curtido ? " rgb(16, 145, 145)" : "none"}
              style={{ cursor: "pointer" }}
              onClick={handleCurtidaClick}
              aria-label="Curtir"
            />
            <div className={styles.postCurtidas}>
              <p className={styles.curtidas}>{curtidasCount}</p>
            </div>
            <MessageCircle
              size={28}
              color="black"
              style={{ cursor: "pointer" }}
              onClick={onComentarioClick}
              title="Ver comentários"
            />
            <Bookmark
              size={28}
              color={salvo ? "rgb(16, 145, 145)" : "black"}
              fill={salvo ? "rgb(16, 145, 145)" : "none"}
              style={{ cursor: "pointer" }}
              onClick={() => setSalvo((v) => !v)}
              aria-label="Salvar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
