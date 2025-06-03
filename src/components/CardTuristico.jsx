import React, { useState } from "react";
import { Heart, MessageCircle, Bookmark } from "lucide-react";

export default function CardTuristico({ imagem, titulo, legenda }) {
  const [curtido, setCurtido] = useState(false);
  const [salvo, setSalvo] = useState(false);

  return (
    <div style={{
      width: "300px",
      borderRadius: "12px",
      overflow: "hidden",
      backgroundColor: "#fff",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      margin: "10px",
      fontFamily: "Poppins"
    }}>
      <div style={{ position: "relative" }}>
        <img
          src={imagem}
          alt={titulo}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          background: "rgba(180, 243, 224, 0.7)",
          padding: "4px 8px",
          borderRadius: "8px",
          fontSize: "14px",
        }}>
          {titulo}
        </div>
      </div>
      <div style={{ padding: "12px" }}>
        <p style={{ fontSize: "14px", marginBottom: "10px" }}>{legenda}</p>
        <div style={{ display: "flex", gap: "18px" }}>
          <Heart
            size={28}
            color={curtido ? "red" : "#888"}
            fill={curtido ? "red" : "none"}
            style={{ cursor: "pointer" }}
            onClick={() => setCurtido((v) => !v)}
            aria-label="Curtir"
          />
          <MessageCircle
            size={28}
            color="#888"
            style={{ cursor: "pointer" }}
            aria-label="Comentar"
          />
          <Bookmark
            size={28}
            color={salvo ? "#2e8b57" : "#888"}
            fill={salvo ? "#2e8b57" : "none"}
            style={{ cursor: "pointer" }}
            onClick={() => setSalvo((v) => !v)}
            aria-label="Salvar"
          />
        </div>
      </div>
    </div>
  );
}

