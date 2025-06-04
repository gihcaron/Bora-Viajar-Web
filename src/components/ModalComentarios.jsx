export default function ModalComentarios({ open, onClose, comentarios, loading }) {
  if (!open) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
      background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000
    }}>
      <div style={{ background: "#fff", padding: 24, borderRadius: 8, minWidth: 300, maxWidth: 500 }}>
        <button onClick={onClose} style={{ float: "right" }}>Fechar</button>
        <h3>Comentários</h3>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <ul>
            {comentarios.map((c, i) => (
              <li key={i}>{c.texto}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
