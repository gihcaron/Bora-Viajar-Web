"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/PostUsers.module.css";
import { Heart, MessageCircle, Bookmark } from "lucide-react";

export default function Posts ({ image, description, tag, onComentarioClick}) {
  const [curtido, setCurtido] = useState(false);
  const [salvo, setSalvo] = useState(false);
   
    return (
               <div className={styles.Post}>
                  <div className={styles.PostHeader}>
                    <Image
                      src="/tres-pontos.png"
                      alt="Post Image"
                      width={30}
                      height={30}
                      className={styles.PostThreePoints}
                    />
                  </div>
                  {image && image.trim() !== "" && (
                  <div className={styles.PostImage}>
                    <Image
                      src={`http://localhost:3000/uploads/` + image}
                      alt={description && description.trim() !== "" ? description : "Imagem do post"}
                      width={500}
                      height={300}
                      className={styles.PostImage}
                    />
                  </div>
                  )}
                  <div className={styles.PostContent}>

                  <p className={styles.UserAndGuia}>{tag}</p>

                  <p className={styles.Description}>{description}</p>

                  <div className={styles.PostInfo}>
                    <div className={styles.PostActions}>
                    <Heart
                               size={28}
                               color={curtido ? "rgb(16, 145, 145)" : "black"}
                               fill={curtido ? " rgb(16, 145, 145)" : "none"}
                               style={{ cursor: "pointer" }}
                               onClick={() => setCurtido((v) => !v)}
                               aria-label="Curtir"
                             />
                             <MessageCircle
                               size={28}
                               color="black"
                               style={{ cursor: "pointer" }}
                               onClick={onComentarioClick }
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
