export default function ModalComentarios({ open, onClose, comentarios, loading }) {
    if (!open) return null;

    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            overflow: "hidden"
        }}>
            <div
                style={{
                    background: "#fff",
                    padding: "24px 24px 16px",
                    borderRadius: 8,
                    minWidth: 300,
                    maxWidth: 600,
                    maxHeight: "80vh",
                    overflowY: "auto",
                    position: "relative",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" 
                }}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        background: "transparent",
                        border: "none",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        color: "#333",
                        transition: "color 0.3s ease"
                    }}
                >
                    ✖
                </button>
                <h3 style={{
                    marginBottom: "16px",
                    fontSize: "1.5rem",
                    color: "#333",
                    borderBottom: "1px solid #ddd",
                    paddingBottom: "8px",
                    fontWeight: "bold",
                    alignItems: "center",
                }}>Comentários</h3>
                {loading ? (
                    <p style={{
                        fontSize: "1rem",
                        color: "#666",
                        textAlign: "center"
                    }}>Carregando...</p>
                ) : (
                    <ul style={{ padding: 0, listStyle: "none" }}>
                        {comentarios.map((c, i) => (
                            <li key={i} style={{ marginBottom: 12 }}>
                                <p>
                                    <strong>{c.usuario}</strong>: {c.comentario}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
