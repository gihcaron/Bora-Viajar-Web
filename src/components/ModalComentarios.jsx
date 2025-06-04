export default function ModalComentarios({ open, onClose, comentarios, loading }) {
    if (!open) return null;

    return (
        <div style={{
            position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
            background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, overflow:"hidden"
        }}>
             <div
                style={{
                    background: "#fff",
                    padding: "24px 24px 16px",
                    borderRadius: 8,
                    minWidth: 300,
                    maxWidth: 600,
                    maxHeight: "80vh", // altura máxima
                    overflowY: "auto", // ativa scroll interno
                    position: "relative"
                }}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        background: "transparent",
                        border: "none",
                        fontSize: "1rem",
                        cursor: "pointer"
                    }}
                >
                    ✖
                </button>
                <h3>Comentários</h3>
                {loading ? (
                    <p>Carregando...</p>
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
