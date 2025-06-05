import React from "react";
import PropTypes from "prop-types";
import CardTuristico from "./CardTuristico";

export default function SecaoCidade({ cidade, pontos, onComentarioClick }) {
  return (
    <section style={{ padding: "40px 0" }}>
      <h2 style={{
        fontFamily: "Poppins",
        fontSize: "20px",
        fontWeight: "bold",
        backgroundColor: "#cbebe9",
        display: "inline-block",
        padding: "8px 16px",
        borderRadius: "20px",
        marginBottom: "20px"
      }}>
        {cidade}
      </h2>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px"
      }}>
        {pontos.map((p, i) => (
          <CardTuristico key={i} imagem={p.imagem} titulo={p.titulo} legenda={p.legenda} onComentarioClick={onComentarioClick}/>
        ))}
      </div>
    </section>
  );
}

SecaoCidade.propTypes = {
  cidade: PropTypes.string.isRequired,
  pontos: PropTypes.arrayOf(
    PropTypes.shape({
      imagem: PropTypes.string.isRequired,
      titulo: PropTypes.string.isRequired,
      legenda: PropTypes.string.isRequired
    })
  ).isRequired,
  onComentarioClick: PropTypes.func,
};
