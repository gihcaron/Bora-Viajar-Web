import { useEffect } from "react";

export default function ModalComentarios({ open, onClose, comentarios, loading, postId }) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);
    if (!open) return null;

    const comentariosFiltados = comentarios.filter(c => c.postId === postId);

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
                    width: "100%",
                    maxWidth: 600,
                    backgroundColor: "#1c1c1e",
                    color: "#f1f1f1",
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    padding: "16px 20px",
                    maxHeight: "80vh",
                    overflowY: "auto",
                    boxShadow: "0 -4px 12px rgba(0,0,0,0.2)",
                    animation: "slideUp 0.3s ease-out"
                }}
            >

                                <div style={{
                    width: 40,
                    height: 5,
                    backgroundColor: "#444",
                    borderRadius: 10,
                    margin: "0 auto 12px",
                }} />



                <button onClick={onClose} style={{
                    marginTop: 16,
                    backgroundColor: "#2c2c2e",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: 8,
                    color: "#fff",
                    width: "100%",
                    fontSize: "1rem",
                    cursor: "pointer",
                    transition: "background 0.3s",
                    marginBottom: 32,
                }}>
                    Fechar
                </button>

                            <style>{`
                @keyframes slideUp {
                    from {
                        transform: translateY(100%);
                    }
                    to {
                        transform: translateY(0);
                    }
                }
            `}</style>

                <h3 style={{
                    textAlign: "center",
                    marginBottom: 16,
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    borderBottom: "1px solid #333",
                    paddingBottom: 8,
                    color: "#fff"
                }}>
                    Comentários
                </h3>
                {loading ? (
                    <p style={{
                        textAlign: "center", color: "#999"
                    }}>Carregando...</p>
                ) : (
<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
    {comentariosFiltados.map((c, i) => (
        <li key={i} style={{ marginBottom: 16 }}>
            <div>
                <p style={{ margin: 0, fontWeight: "bold", fontSize: "0.95rem" }}>
                    {c.usuario}
                </p>
                <p style={{ margin: 0, fontSize: "0.9rem", color: "#ddd" }}>
                    {c.comentario}
                </p>
            </div>
        </li>
    ))}
</ul>

                )}
            </div>
        </div>
    );
}
